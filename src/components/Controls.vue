<script setup>
import {getPlayListOrder, songs} from "@/lib/utils";
import {loadPlaylist, resetProgress, usePlaylist} from "@/usePlaylistApi";
import {useHistory} from "@/stores/useHistory";
import {SkipForward, Pause, Play, SkipBack, Shuffle} from "lucide-vue-next";
import {inject, ref} from "vue";

const audioRef = inject("audioRef");
const playlist = usePlaylist();
const history = useHistory();
const playedStack = ref({});
const isRandom = ref(playlist.options.order === "random");

const startPlaying = () => {
	loadPlaylist("Linkin Park", songs, {
		key: "path",
	});
};

const handlePausePlay = () => {
	if (!playlist.currentSong) return startPlaying();
	const isPaused = playlist.song.isPaused;

	playlist.$patch({
		song: {
			isPaused: isPaused ? false : true,
		},
	});

	isPaused ? audioRef.value.play() : audioRef.value.pause();
};

const handleHistory = (songToPlay) => {
	const alreadyListened = history.songs.some(
		(song) => song.path === songToPlay.path
	);
	const HISTORY_LIMIT = 5;
	const LIMIT_OVER = history.songs.length >= HISTORY_LIMIT;

	if (LIMIT_OVER && !alreadyListened) history.songs.pop();

	if (alreadyListened) {
		const newArr = history.songs.filter(
			(song) => song.path !== songToPlay.path
		);

		return history.$patch({
			songs: [songToPlay, ...newArr],
		});
	}

	history.add(songToPlay);
};

const handleRandom = () => {
	const key = playlist.currentSong[playlist.options.key];
	console.log("asd");
	if (!playedStack.value[key]) {
		playedStack.value[key] = playlist.currentSong;
	}

	const filteredValue = playlist.songs.filter((song) => {
		if (!playedStack.value[song.path]) {
			return song;
		}
	});

	const randomIndex = Math.floor(Math.random() * filteredValue.length);
	const randomSong = filteredValue[randomIndex];

	const lastTrack = filteredValue.length === 1;
	if (lastTrack) {
		playedStack.value = {};
	}

	const nextSongIfLastTrack =
		playlist.songs[Math.floor(Math.random() * playlist.songs.length)];
	const songToPlay = lastTrack ? nextSongIfLastTrack : randomSong;

	playlist.$patch({
		currentSong: songToPlay,
		song: {
			progress: 0,
			songDuration: 0,
			isPaused: false,
		},
	});

	handleHistory(songToPlay);
	audioRef.value.src = songToPlay;
};

const handleControls = (action) => {
	if (!playlist.songs || !playlist.currentSong) return null;
	const isRandom = playlist.options.order === "random";

	const lastTrack = playlist.songs[playlist.songs.length - 1];
	const firstTrack = playlist.songs[0];
	if (isRandom) {
		return handleRandom();
	}

	const {prevSong, nextSong} = getPlayListOrder(
		playlist.songs,
		playlist.options.key,
		playlist.currentSong.path
	);

	const isFirstTrack = prevSong === null;
	const isLastTrack = nextSong === null;
	let songToPlay = null;

	resetProgress();

	if (action === "prev") {
		songToPlay = !isFirstTrack ? prevSong : lastTrack;
	}
	if (action === "next") {
		songToPlay = !isLastTrack ? nextSong : firstTrack;
	}

	playlist.$patch({
		currentSong: songToPlay,
	});
	return handleHistory(songToPlay);
};
const defineRandom = () => {
	const isR = playlist.options.order === "random";
	playlist.$patch({options: {order: isR ? "default" : "random"}});
	isRandom.value = !isRandom.value;
};
</script>

<template>
	<div
		class="flex items-center absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 gap-12"
	>
		<!-- <button>
			<Repeat
				fill="white"
				color="white"
				:size="30"
				class="ml-6"
			/>
		</button> -->
		<div className="flex items-center gap-8">
			<button @click="handleControls('prev')">
				<SkipBack
					fill="white"
					color="white"
					:size="32"
				/>
			</button>
			<button
				@click="handlePausePlay"
				class="bg-white rounded-full p-3"
			>
				<Play
					v-if="playlist.song.isPaused"
					fill="black"
					color="black"
					:size="24"
				/>
				<Pause
					v-else
					fill="black"
					color="black"
					:size="24"
				/>
			</button>

			<button @click="handleControls('next')">
				<SkipForward
					fill="white"
					color="white"
					:size="32"
				/>
			</button>
		</div>
		<button>
			<Shuffle
				@click="defineRandom"
				:fill="[isRandom ? 'white' : 'gray']"
				:color="[isRandom ? 'white' : 'gray']"
				:size="30"
			/>
		</button>
	</div>
</template>

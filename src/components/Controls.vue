<script setup>
import {getPlayListOrder, playlists, songs} from "@/lib/utils";
import {loadPlaylist, usePlaylist} from "@/usePlaylistApi";
import {useHistory} from "@/stores/useHistory";
import {
	SkipForward,
	Pause,
	Play,
	SkipBack,
	Shuffle,
	Dices,
	ArrowDownUp,
	Repeat,
} from "lucide-vue-next";
import {inject} from "vue";

const audioRef = inject("audioRef");
const playlist = usePlaylist();
const history = useHistory();

const startPlaying = () => {
	loadPlaylist("Linkin Park", songs, {
		sort: "path",
	});
	history.$patch({
		songs: [songs[0]],
	});
};

const handlePausePlay = async () => {
	if (!playlist.currentSong) return startPlaying();

	if (playlist.song.isPaused) {
		playlist.$patch({
			song: {
				isPaused: false,
			},
		});

		audioRef.value.play();
	} else {
		playlist.$patch({
			song: {
				isPaused: true,
			},
		});
		audioRef.value.pause();
	}
};

const resetProgress = () => {
	playlist.$patch({
		song: {
			progress: 0,
			songDuration: 0,
			isPaused: false,
		},
	});
};

const handleHistory = (songToPlay) => {
	// hit the history
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

const handleNextSong = () => {
	if (!playlist.songs || !playlist.currentSong) return;

	resetProgress();

	const {currentSong, prevSong, nextSong} = getPlayListOrder(
		playlist.songs,
		playlist.options.sort,
		playlist.currentSong.path
	);
	const isLastTrack = nextSong === null;
	const songToPlay = !isLastTrack ? nextSong : playlist.songs[0];

	playlist.$patch({
		currentSong: songToPlay,
	});
	handleHistory(songToPlay);

	// // if (playlist.options.order === "random") {
	// // 	played.value.push(playlist.currentSong[playlist.options.sort]);
	// // 	const filteredValue = playlist.songs.filter((song) => {
	// // 		if (!played.value.includes(song.path)) return song;
	// // 	});

	// // 	const randomIndex = Math.floor(Math.random() * filteredValue.length);
	// // 	const randomSong = filteredValue[randomIndex];
	// // 	const lastTrack = filteredValue.length === 1;

	// // 	if (lastTrack) {
	// // 		playlist.$patch({
	// // 			currentSong:
	// // 				playlist.songs[Math.floor(Math.random() * playlist.songs.length)],
	// // 			song: {
	// // 				progress: 0,
	// // 				songDuration: 0,
	// // 				isPaused: false,
	// // 			},
	// // 		});
	// // 		return (audioRef.value.src =
	// // 			playlist.songs[Math.floor(Math.random() * playlist.songs.length)]);
	// // 	}
	// // 	playlist.$patch({
	// // 		currentSong: randomSong,
	// // 		song: {
	// // 			progress: 0,
	// // 			songDuration: 0,
	// // 			isPaused: false,
	// // 		},
	// // 	});

	// // 	return (audioRef.value.src = randomSong);
	// // }
};

const handlePreviousSong = () => {
	if (!playlist.songs || !playlist.currentSong) return null;
	resetProgress();

	const {currentSong, prevSong, nextSong} = getPlayListOrder(
		playlist.songs,
		"path",
		playlist.currentSong.path
	);

	const isFirstTrack = prevSong === null;
	const lastTrack = playlist.songs[playlist.songs.length - 1];
	const songToPlay = !isFirstTrack ? prevSong : lastTrack;

	handleHistory(songToPlay);
	return playlist.$patch({
		currentSong: !isFirstTrack ? prevSong : lastTrack,
	});
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
			<button @click="handlePreviousSong">
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

			<button @click="handleNextSong">
				<SkipForward
					fill="white"
					color="white"
					:size="32"
				/>
			</button>
		</div>
		<!-- <button>
			<Shuffle
				fill="white"
				color="white"
				:size="30"
				class=""
			/>
		</button> -->
	</div>
</template>

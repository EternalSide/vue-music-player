<script setup>
import {computed, defineProps, onMounted} from "vue";
import {usePlaylist} from "/src/usePlaylistApi.js";
import {songs} from "/src/lib/utils.js";

const props = defineProps(["song", "isPlaylist"]);
const playlist = usePlaylist();

const startPlaying = () => {
	return playlist.$patch({
		currentSong: props.song,
		song: {
			isPaused: false,
		},
		songs,
	});
};

const isPlaying = computed(
	() => playlist.currentSong && playlist.currentSong.name === props.song.name
);
</script>

<template>
	<div
		:class="{'!border-indigo-600': isPlaying}"
		@click="startPlaying"
		class="flex cursor-pointer justify-between items-center p-3 rounded-xl bg-black border transition all hover:border-indigo-600 border-transparent"
	>
		<div className="flex items-center gap-2.5">
			<img
				:src="playlist?.currentSong?.img || songs[0].img"
				class="object-cover rounded-md h-12 w-12"
			/>
			<div>
				<h3 className="font-medium text-sm hover:underline transition">
					{{ props.song.label }}
				</h3>
				<p
					className="text-sm text-neutral-400 mt-0.5 hover:text-indigo-500 transition"
				>
					{{ props.song.name }}
				</p>
			</div>
		</div>
		<!-- <div>
			<p
				v-if:="isPlaylist"
				className="text-sm text-neutral-400 mt-0.5 hover:text-indigo-500 transition"
			>
				{{ playlist.name }}
			</p>
		</div> -->
		<img
			v-if="isPlaying"
			class="w-12 h-12 object-cover object-center rounded-full"
			src="/playing.gif"
		/>
	</div>
</template>

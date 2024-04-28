<script setup>
import {loadPlaylist} from "@/usePlaylistApi";
import {defineProps} from "vue";

const props = defineProps(["playlist"]);

const startPlaying = () => {
	loadPlaylist(props.playlist.name, props.playlist.songs);
};
</script>

<template>
	<div
		@click="startPlaying"
		class="border cursor-pointer p-3 w-full block rounded-xl border-neutral-800 hover:border-indigo-700 transition-all"
	>
		<div class="relative w-full rounded-xl">
			<img
				:src="props.playlist.image"
				class="object-start object-cover rounded-xl h-[200px] w-full"
			/>
		</div>
		<div class="mt-10">
			<h3 class="font-bold text-xl text-white">{{ props.playlist.name }}</h3>
			<p class="text-neutral-400 text-sm">{{ props.playlist.description }}</p>
		</div>
	</div>
</template>

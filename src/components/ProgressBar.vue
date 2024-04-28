<script setup>
import {ref, inject, watchEffect, watch} from "vue";
import {usePlaylist} from "../usePlaylistApi";

const playlist = usePlaylist();
const progressBarRef = ref(null);
const audioRef = inject("audioRef");

const handleProgressBarClick = (e) => {
	const refWidth = progressBarRef.value.offsetWidth;
	const songDuration = audioRef.value.duration;

	const clickX = e.clientX - progressBarRef.value.getBoundingClientRect().left;
	const progressPercentage = (clickX / refWidth) * 100;
	const seconds = (progressPercentage / 100) * songDuration;

	playlist.$patch({
		song: {
			progress: (seconds / songDuration) * 100,
		},
	});

	audioRef.value.currentTime = seconds;
};

const handleUpdateProgress = () => {
	if (!audioRef.value) return;
	const currentProgress =
		(audioRef.value.currentTime / audioRef.value.duration) * 100;

	playlist.$patch({
		song: {
			progress: currentProgress,
			songDuration: audioRef.value.duration,
		},
	});
};
</script>

<template>
	<audio
		ref="audioRef"
		v-if="playlist.currentSong"
		:controls="false"
		:autoPlay="false"
		:src="playlist.currentSong.path"
		v-on:timeupdate="handleUpdateProgress"
	/>
	<div
		ref="progressBarRef"
		class="relative opacity-100 visible transition-all duration-300"
		@click="handleProgressBarClick"
	>
		<button
			:style="{width: playlist.song.progress + '%'}"
			class="h-[8px] transition-all duration-300 bg-gradient-to-l from-[#8e2de2] via-purple-600 to-[#4a00e0] rounded-md z-50 border-none outline-none absolute top-0"
		/>
		<button
			className="absolute
        transition-all
        duration-300
        bg-neutral-500
        rounded-md
        border-none
        outline-none h-2 w-full"
		/>
	</div>
</template>

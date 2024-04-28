<script setup>
import {onMounted, ref, inject} from "vue";
import {usePlaylist} from "../usePlaylistApi";
import {VolumeXIcon, Volume2Icon} from "lucide-vue-next";

const playlist = usePlaylist();
const volumeRef = ref(null);
const currentVolume = ref(Number(localStorage.getItem("volume")));
const audioRef = inject("audioRef");

onMounted(() => {
	playlist.$patch({
		song: {
			currentVolume: currentVolume.value,
			isMuted: currentVolume.value === 0 ? true : false,
		},
	});
});

const handleMuteVolume = () => {
	if (playlist.song.isMuted) {
		playlist.$patch({
			song: {
				isMuted: false,
				currentVolume: playlist.song.lastVolumeValue,
			},
		});

		audioRef.value.volume = playlist.song.lastVolumeValue;
	} else {
		playlist.$patch({
			song: {
				isMuted: true,
				currentVolume: 0,
			},
		});
		audioRef.value.volume = 0;
		localStorage.setItem("volume", "0");
	}
};

const handleVolumeClick = (e) => {
	const volumeBarWidth = volumeRef.value.offsetWidth;
	const clickX = Math.max(
		0,
		Math.min(
			e.clientX - volumeRef.value.getBoundingClientRect().left,
			volumeBarWidth
		)
	);
	const volumePercentage = clickX / 100;
	const volume = volumePercentage < 0.05 ? 0 : volumePercentage;

	playlist.$patch({
		song: {
			currentVolume: volume,
			isMuted: false,
			lastVolumeValue: volume,
		},
	});
	audioRef.value.volume = volume;
	localStorage.setItem("volume", String(volume));
};
</script>

<template>
	<div className="flex items-center justify-center">
		<button @click="handleMuteVolume">
			<VolumeXIcon
				v-if:="playlist.song.isMuted"
				fill="#9c99a1"
				class="h-8 w-8 text-[#9c99a1]"
			/>
			<Volume2Icon
				v-else
				fill="#9c99a1"
				class="h-8 w-8 text-[#9c99a1]"
			/>
		</button>
		<div
			@click="handleVolumeClick"
			ref="volumeRef"
			class="relative w-[100px] flex items-center ml-3.5 transition-all duration-150"
		>
			<button
				class="h-2 bg-white rounded-md z-[50] border-none outline-none transition-all duration-150"
				:style="{width: playlist.song.currentVolume * 100 + '%'}"
			/>
			<button
				onmousedown="handleVolumeDrag"
				class="h-2 absolute bg-neutral-400 rounded-md border-none outline-none w-full"
			/>
		</div>
	</div>
</template>

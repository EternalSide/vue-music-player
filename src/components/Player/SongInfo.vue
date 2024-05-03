<script setup>
import {Heart} from "lucide-vue-next";
import {usePlaylist} from "../../usePlaylistApi";
const playlist = usePlaylist();
</script>

<template>
	<div class="opacity-100 visible transition-all duration-300">
		<div
			class="flex items-center gap-2.5"
			v-if:="playlist.currentSong"
		>
			<img
				class="h-11 w-11"
				:src="playlist.currentSong.img"
			/>

			<div>
				<h3 className="font-medium text-sm">
					{{ playlist.currentSong.label }}
				</h3>
				<p className="text-sm text-neutral-400 mt-0.5">
					{{ playlist.currentSong.name }}
				</p>
			</div>
			<button
				className="hover:bg-indigo-800/50 rounded-3xl p-1.5 transition duration-300"
			>
				<div
					class="rounded-full transition-all duration-300 p-1 flex justify-center items-center"
				>
					<Heart className="h-3 w-3" />
				</div>
			</button>
		</div>
	</div>
</template>

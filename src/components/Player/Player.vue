<script setup>
import ProgressBar from "./ProgressBar.vue";
import Controls from "./Controls.vue";
import SongInfo from "./SongInfo.vue";
import Volume from "./Volume.vue";
import {provide, ref} from "vue";

const audioRef = ref(null);
provide("audioRef", audioRef);
</script>

<template>
	<div
		:style="{'background-color': 'black'}"
		class="fixed bottom-0 w-full h-[9vh] border-t border-neutral-800"
	>
		<ProgressBar />
		<div className="flex justify-between items-center w-full h-full px-6">
			<Controls />
			<SongInfo />
			<Volume />
		</div>
	</div>
</template>

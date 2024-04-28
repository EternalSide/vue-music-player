<script setup>
import {songs} from "/src/lib/utils.js";
import SongCard from "/src/components/cards/SongCard.vue";
import Separator from "@/components/ui/separator/Separator.vue";
import Header from "./header.vue";
import {loadPlaylist} from "@/usePlaylistApi";
import {onMounted} from "vue";

onMounted(() => {
	loadPlaylist("Linkin Park", songs, {
		isPaused: true,
	});
});
</script>

<template>
	<div class="pt-10 flex flex-col gap-6">
		<Header />
		<Separator class="bg-neutral-800" />
		<div
			class="pl-10 flex flex-col gap-2.5 pr-6"
			v-for="song in songs"
		>
			<SongCard
				:isPlaylist="true"
				:key="song.path"
				v-if:="songs"
				:song="song"
			/>
		</div>
	</div>
</template>

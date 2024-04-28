<script setup>
import HomeBlock from "./HomeBlock.vue";
import {usePlaylist} from "/src/usePlaylistApi.js";
import SongCard from "/src/components/cards/SongCard.vue";
import {useHistory} from "@/stores/useHistory";

const playlist = usePlaylist();
const history = useHistory();
</script>

<template>
	<div class="pl-0 pt-10">
		<div class="flex flex-col gap-5 pb-6 pl-10">
			<h3 class="text-xl font-semibold">
				Playlist: <span class="text-indigo-500">{{ playlist.name }}</span>
			</h3>
			<h3 class="text-xl font-semibold">
				Current:
				<span
					v-if="playlist.currentSong"
					class="text-indigo-500"
					>{{ playlist.currentSong.label }} -
					{{ playlist.currentSong.name }}</span
				>
				<span
					v-else="playlist.currentSong"
					class="text-indigo-500"
					>Not defined.</span
				>
			</h3>
		</div>

		<HomeBlock title="You Listened">
			<div
				class="mt-5 flex flex-col gap-2.5 pr-6"
				v-if:="history.songs"
				v-for="song in history.songs"
			>
				<SongCard :song="song" />
			</div>
			<div
				v-if:="history.songs.length === 0"
				class="text-zinc-400 text-base mt-5"
			>
				Not Found.
			</div>
		</HomeBlock>
	</div>
</template>

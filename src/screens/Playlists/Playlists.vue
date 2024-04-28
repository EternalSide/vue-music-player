<script setup>
import PlaylistCard from "@/components/cards/PlaylistCard.vue";
import {playlists} from "/src/lib/utils.js";
</script>

<template>
	<div
		v-for:="playlist in playlists"
		class="grid grid-cols-5 gap-5 pt-10 px-10 max-lg:px-6 max-[1800px]:grid-cols-4 max-[1500px]:grid-cols-3 max-[1150px]:grid-cols-2 max-md:grid-cols-1"
	>
		<PlaylistCard :playlist="playlist" /> <PlaylistCard :playlist="playlist" />
		<PlaylistCard :playlist="playlist" /> <PlaylistCard :playlist="playlist" />
		<PlaylistCard :playlist="playlist" /> <PlaylistCard :playlist="playlist" />
		<PlaylistCard :playlist="playlist" /> <PlaylistCard :playlist="playlist" />
		<PlaylistCard :playlist="playlist" /> <PlaylistCard :playlist="playlist" />
	</div>
</template>

<script setup>
import Button from "@/components/ui/button/Button.vue";
import {loadPlaylist} from "@/usePlaylistApi";
import HomeBlock from "./HomeBlock.vue";
import HomeData from "./HomeData.vue";
import SongCard from "/src/components/cards/SongCard.vue";
import {songs, playlists} from "/src/lib/utils.js";
import PlaylistCard from "@/components/cards/PlaylistCard.vue";
import Separator from "@/components/ui/separator/Separator.vue";

const startPlaying = () => {
	loadPlaylist("Linkin Park", songs, {
		key: "path",
	});
};
</script>

<template>
	<div class="grid grid-cols-2 max-[1400px]:grid-cols-1 pb-[9vh]">
		<ul class="pl-0 border-r border-neutral-800 min-h-screen">
			<HomeBlock
				title="General"
				styles="flex items-center gap-5 p-10"
				:showSeparator="true"
			>
				<Button
					@click="startPlaying"
					variant="purple"
					>Start Playing</Button
				>
			</HomeBlock>

			<!-- <HomeBlock
				title="Options"
				styles="flex items-end gap-6 	"
				:showSeparator="true"
			>
				<div class="flex items-center space-x-2">
					<Checkbox id="terms" />
					<label
						for="terms"
						class="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Random Order
					</label>
				</div>
			</HomeBlock> -->

			<HomeBlock
				title="Recommended Playlists"
				styles="pr-10"
				show-separator="true"
			>
				<div
					v-for:="playlist in playlists"
					class="mt-5 grid grid-cols-3 max-[1800px]:grid-cols-2 max-md:grid-cols-1 gap-3"
				>
					<PlaylistCard :playlist="playlist" />
					<PlaylistCard :playlist="playlist" />
					<PlaylistCard :playlist="playlist" />
				</div>
			</HomeBlock>

			<HomeBlock
				styles="pr-10"
				title="Recommended Songs"
			>
				<div
					class="mt-5 flex flex-col gap-2.5"
					v-if:="songs"
					v-for="song in songs"
				>
					<SongCard
						:key="song.path"
						:song="song"
					/>
					<Separator class="bg-neutral-800" />
				</div>
			</HomeBlock>
		</ul>
		<HomeData />
	</div>
</template>

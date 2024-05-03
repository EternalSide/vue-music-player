<script setup>
import {Home, ListMusic} from "lucide-vue-next";
import {ref} from "vue";
import {loadPlaylist} from "/src/usePlaylistApi";
import {songs} from "/src/lib/utils.js";

const links = ref([
	{
		label: "Home",
		icon: Home,
		href: "/",
	},
	{
		label: "Playlists",
		icon: ListMusic,
		href: "/playlists",
	},
]);

const playlists = ref([
	{
		label: "Linkin Park",
		image: "/src/assets/playlist-logo.jpg",
	},
]);
</script>

<template>
	<aside
		class="bg-black h-[91vh] flex flex-col max-lg:items-center fixed left-0 top-0 w-[300px] border-r border-neutral-800 pt-10 pl-2.5 pr-5 max-lg:px-5 max-lg:w-fit"
	>
		<RouterLink
			to="/"
			div
			class="flex items-center lg:px-6 mb-6 max-lg:pr-0"
		>
			<img
				class="rounded-full w-12 h-12 object-cover"
				src="/src/assets/vue-logo.webp"
			/>
			<div class="max-lg:hidden">
				<h1 class="font-bold text-xl">ue-music-player</h1>
			</div>
		</RouterLink>
		<div class="flex flex-col gap-0 max-lg:w-fit">
			<router-link
				:to="link.href"
				class="font-semibold text-xl hover:bg-neutral-900 lg:px-6 transition py-3.5 max-lg:px-3 rounded-md flex items-center lg:gap-3"
				v-for="link in links"
			>
				<component
					:is="link.icon"
					class="h-7 w-7"
				/>
				<p class="max-lg:hidden">{{ link.label }}</p>
			</router-link>
		</div>
		<div class="flex flex-col gap-1.5 mt-6 flex-1">
			<div
				@click="loadPlaylist('Linkin Park', songs)"
				class="flex gap-3 items-center cursor-pointer hover:bg-neutral-900 transition py-3.5 lg:px-6 max-lg:px-3 rounded-md"
				v-for="playlist in playlists"
			>
				<img
					class="rounded-md w-11 h-11"
					src="https://i.pinimg.com/736x/96/f6/b6/96f6b672d5a31dcadd89c16e55a9bc5c.jpg"
				/>
				<div class="max-lg:hidden">
					<h3 class="font-bold text-lg">{{ playlist.label }}</h3>
					<p class="font-bold text-base text-neutral-400">playlist</p>
				</div>
			</div>
		</div>
		<div
			class="text-center flex flex-col items-start justify-center lg:p-6 max-lg:pb-5 text-neutral-400 gap-1.5"
		>
			<div class="flex items-center gap-1.5 max-lg:flex-col">
				<a
					target="_blank"
					href="https://github.com/EternalSide/playa"
				>
					<img
						class="rounded-full w-7 h-7"
						src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"
					/>
				</a>
				<p class="max-lg:hidden text-sm">(c) vue-music-player</p>
			</div>
		</div>
	</aside>
</template>

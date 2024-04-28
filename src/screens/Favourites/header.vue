<script setup>
import Button from "@/components/ui/button/Button.vue";
</script>
<template>
	<div class="pl-10 flex items-center gap-5 max-lg:flex-col max-lg:items-start">
		<img
			class="w-64 h-64"
			src="https://cdns-images.dzcdn.net/images/cover/283b49c77f84c92c199671a023dc453d/500x500.jpg"
		/>
		<div class="flex flex-col items-between">
			<p class="text-neutral-400 text-xl">Playlist</p>
			<h3 class="text-5xl font-bold">Favourites</h3>
			<Button
				class="mt-10"
				variant="purple"
				>Listen
			</Button>
		</div>
	</div>
</template>

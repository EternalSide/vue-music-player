<script setup>
import Player from "./components/Player.vue";
import LeftSidebar from "./components/shared/LeftSidebar.vue";
import {RouterView} from "vue-router";
</script>

<template>
	<LeftSidebar />
	<div class="pl-[300px] max-lg:pl-[109px]">
		<RouterView />
	</div>
	<Player />
</template>

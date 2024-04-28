<script setup>
const props = defineProps(["title", "styles", "showSeparator"]);
import {Separator} from "@/components/ui/separator";
</script>

<template>
	<div
		:class="`${styles}`"
		class="pb-6 pl-10"
	>
		<h3 class="text-white text-xl font-semibold">{{ props.title }}:</h3>
		<slot />
	</div>
	<Separator
		v-if="showSeparator"
		class="mb-6 bg-neutral-800"
	/>
</template>

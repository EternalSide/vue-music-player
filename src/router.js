import {createWebHistory, createRouter} from "vue-router";
import Home from "@/screens/Home/Home.vue";
import Playlists from "@/screens/Playlists/Playlists.vue";
import Favourites from "./screens/Favourites/Favourites.vue";
import Youtube from "./screens/Youtube/Youtube.vue";

export const routes = [
	{path: "/", component: Home},
	{path: "/playlists", component: Playlists},
	{path: "/favourites", component: Favourites},
	{path: "/youtube", component: Youtube},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});

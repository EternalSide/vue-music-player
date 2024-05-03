import {createWebHistory, createRouter} from "vue-router";
import Home from "@/screens/Home/Home.vue";
import Playlists from "@/screens/Playlists/Playlists.vue";
import Favourites from "./screens/Favourites/Favourites.vue";

export const routes = [
	{path: "/", component: Home},
	{path: "/playlists", component: Playlists},
	{path: "/favourites", component: Favourites},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});

import {defineStore} from "pinia";

export const useHistory = defineStore("history", {
	state: () => ({
		songs: [],
		cache: {},
	}),
	actions: {
		add(newSong) {
			this.songs = [newSong, ...this.songs];
		},
	},
});

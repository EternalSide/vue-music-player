import {defineStore} from "pinia";

export const useHistory = defineStore("history", {
	state: () => ({
		songs: [],
	}),
	actions: {
		add(newSong) {
			this.songs = [newSong, ...this.songs];
		},
	},
});

import {defineStore} from "pinia";
import {ref} from "vue";
const audioRef = ref(null);

export const usePlaylist = defineStore("playlist", {
	state: () => ({
		name: "Not defined.",
		playlistId: null,
		audioRef: audioRef,
		currentSong: null,
		prevSong: null,
		nextSong: null,
		songs: null,
		song: {
			isPaused: true,
			isMuted: false,
			currentVolume: 1,
			lastVolumeValue: 1,
			progress: 0,
			songDuration: 0,
		},
		options: {
			sort: "path",
			order: "default",
		},
	}),
	getters: {
		getSongs() {
			return this.songs;
		},
	},
});

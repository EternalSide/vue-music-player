import {usePlaylist as usePlaylistImpl} from "./stores/usePlaylist";

/**
 * Current data of your playlist, player and current song.
 */
export const usePlaylist = () => {
	const playlist = usePlaylistImpl();

	return playlist;
};

/**
 * Use this function to initialize your playlist.
 * @param songs - your data from the API or just an array with the songs.
 * @param options - random order, repeat track, its all here if u want it. You also can change options later by setPlaylist() function.
 */
export const loadPlaylist = (name, songs, options) => {
	if (!songs || !Array.isArray(songs)) throw new Error();
	const isPaused = options?.isPaused ? options.isPaused : false;
	const isRandom = options?.order === "random";
	const currentSong = !isRandom
		? songs[0]
		: songs[Math.floor(Math.random() * songs.length)];

	const playlist = usePlaylistImpl();
	if (playlist.currentPlaying) return;

	playlist.$patch({
		currentSong,
		name,
		songs,
		song: {
			isPaused,
		},
	});
	if (options) {
		playlist.$patch({
			options,
		});
	}
};

export const loadSingleSong = (song) => {
	const playlist = usePlaylistImpl();
	if (playlist.currentPlaying) return;

	playlist.$patch({
		currentSong: song,
		nextSong: song,
		prevSong: song,
	});
};

/**
 * Change the data of your playlist, player state or current song.
 */
export const setPlaylist = (data) => {
	const playlist = usePlaylistImpl();

	playlist.$patch({
		data,
	});
};

export const handleHistory = (data) => {};

export const resetProgress = () => {
	const playlist = usePlaylistImpl();

	playlist.$patch({
		song: {
			progress: 0,
			songDuration: 0,
			isPaused: false,
		},
	});
};

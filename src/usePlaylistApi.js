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

	const playlist = usePlaylistImpl();
	if (playlist.currentPlaying) return;

	playlist.$patch({
		currentSong: songs[0],
		name,
		songs,
		nextSong: songs[1],
		prevSong: songs[songs.length - 1],
		song: {
			isPaused: options?.isPaused ? options.isPaused : false,
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

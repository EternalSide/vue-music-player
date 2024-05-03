import {clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const getPlayListOrder = (array, targetKey, targetValue) => {
	const index = array.findIndex((obj) => obj[targetKey] === targetValue);

	let prevSong = null;
	let nextSong = null;

	if (index > 0) {
		prevSong = array[index - 1];
	}

	if (index < array.length - 1) {
		nextSong = array[index + 1];
	}

	return {prevSong, nextSong};
};

export const songs = [
	{
		label: "Linkin Park",
		path: "/src/songs/1. Papercut.mp3",
		name: "Papercut",
		img: "https://i.pinimg.com/736x/96/f6/b6/96f6b672d5a31dcadd89c16e55a9bc5c.jpg",
	},
	{
		label: "Linkin Park",
		path: "/src/songs/2. One Step Closer.mp3",
		name: "One Step Closer",
		img: "https://i.pinimg.com/736x/96/f6/b6/96f6b672d5a31dcadd89c16e55a9bc5c.jpg",
	},
	{
		label: "Linkin Park",
		path: "/src/songs/3. With You.mp3",
		name: "With You",
		img: "https://i.pinimg.com/736x/96/f6/b6/96f6b672d5a31dcadd89c16e55a9bc5c.jpg",
	},
	{
		label: "Linkin Park",
		path: "/src/songs/4. Points of Authority.mp3",
		name: "Points of Authority",
		img: "https://i.pinimg.com/736x/96/f6/b6/96f6b672d5a31dcadd89c16e55a9bc5c.jpg",
	},
	{
		label: "Linkin Park",
		path: "/src/songs/5. Crawling.mp3",
		name: "Crawling",
		img: "https://i.pinimg.com/736x/96/f6/b6/96f6b672d5a31dcadd89c16e55a9bc5c.jpg",
	},
	{
		label: "Linkin Park",
		path: "/src/songs/6. Runaway.mp3",
		name: "Runaway",
		img: "https://i.pinimg.com/736x/96/f6/b6/96f6b672d5a31dcadd89c16e55a9bc5c.jpg",
	},
	{
		label: "Linkin Park",
		path: "/src/songs/7. By Myself.mp3",
		name: "By Myself",
		img: "https://i.pinimg.com/736x/96/f6/b6/96f6b672d5a31dcadd89c16e55a9bc5c.jpg",
	},
	{
		label: "Linkin Park",
		path: "/src/songs/8. In the End.mp3",
		name: "In the End",
		img: "https://i.pinimg.com/736x/96/f6/b6/96f6b672d5a31dcadd89c16e55a9bc5c.jpg",
	},
	{
		label: "Linkin Park",
		path: "/src/songs/9. A Place for My Head.mp3",
		name: "A Place for My Head",
		img: "https://i.pinimg.com/736x/96/f6/b6/96f6b672d5a31dcadd89c16e55a9bc5c.jpg",
	},
	{
		label: "Linkin Park",
		path: "/src/songs/10. Forgotten.mp3",
		name: "Forgotten",
		img: "https://i.pinimg.com/736x/96/f6/b6/96f6b672d5a31dcadd89c16e55a9bc5c.jpg",
	},
];

export const playlists = [
	{
		name: "Hybrid Theory",
		author: "Linkin Park",
		songs: songs,
		image:
			"https://i.pinimg.com/736x/96/f6/b6/96f6b672d5a31dcadd89c16e55a9bc5c.jpg",
		description: "casual money music",
	},
];

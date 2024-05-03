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
		path: "https://files.edgestore.dev/ae9dpdg4ic95yeqj/songs/_public/62543b17-1c05-4792-ba3f-98da881e05cf.mp3",
		name: "Papercut",
		img: "/src/assets/playlist-logo.jpg",
	},
	{
		label: "Linkin Park",
		path: "https://files.edgestore.dev/ae9dpdg4ic95yeqj/songs/_public/971e6599-e30b-46c8-907f-6e33e480b1ab.mp3",
		name: "One Step Closer",
		img: "/src/assets/playlist-logo.jpg",
	},
	{
		label: "Linkin Park",
		path: "https://files.edgestore.dev/ae9dpdg4ic95yeqj/songs/_public/b03172e1-160f-4c1f-a780-f17fb60f73d6.mp3",
		name: "With You",
		img: "/src/assets/playlist-logo.jpg",
	},
	{
		label: "Linkin Park",
		path: "https://files.edgestore.dev/ae9dpdg4ic95yeqj/songs/_public/e53b794b-df9c-4bf0-843f-59ca6a28c2c3.mp3",
		name: "Points of Authority",
		img: "/src/assets/playlist-logo.jpg",
	},
	{
		label: "Linkin Park",
		path: "https://files.edgestore.dev/ae9dpdg4ic95yeqj/songs/_public/c52c32ae-4d4f-4950-8b49-78e975f29dcd.mp3",
		name: "Crawling",
		img: "/src/assets/playlist-logo.jpg",
	},
	{
		label: "Linkin Park",
		path: "https://files.edgestore.dev/ae9dpdg4ic95yeqj/songs/_public/15cdafa6-fd43-486c-a4b2-ebf7419e7019.mp3",
		name: "Runaway",
		img: "/src/assets/playlist-logo.jpg",
	},
	{
		label: "Linkin Park",
		path: "https://files.edgestore.dev/ae9dpdg4ic95yeqj/songs/_public/2fcb544a-69fc-435a-bfc2-0a5bc19aa7ab.mp3",
		name: "By Myself",
		img: "/src/assets/playlist-logo.jpg",
	},
	{
		label: "Linkin Park",
		path: "https://files.edgestore.dev/ae9dpdg4ic95yeqj/songs/_public/776b1b68-3508-4ac4-b98a-3314a1fdde33.mp3",
		name: "In the End",
		img: "/src/assets/playlist-logo.jpg",
	},
	{
		label: "Linkin Park",
		path: "https://files.edgestore.dev/ae9dpdg4ic95yeqj/songs/_public/35db22b2-c919-42b2-9147-14db9dfda201.mp3",
		name: "A Place for My Head",
		img: "/src/assets/playlist-logo.jpg",
	},
	{
		label: "Linkin Park",
		path: "https://files.edgestore.dev/ae9dpdg4ic95yeqj/songs/_public/b99adb43-3203-4a15-b556-dd841cc33cef.mp3",
		name: "Forgotten",
		img: "/src/assets/playlist-logo.jpg",
	},
	{
		label: "Linkin Park",
		path: "https://files.edgestore.dev/ae9dpdg4ic95yeqj/songs/_public/64c5bd91-2ef5-4957-b965-e4948fdb497b.mp3",
		name: "Cure for the Itch",
		img: "/src/assets/playlist-logo.jpg",
	},
	{
		label: "Linkin Park",
		path: "https://files.edgestore.dev/ae9dpdg4ic95yeqj/songs/_public/86bbc8cd-4910-46ca-804f-a2fc608aed20.mp3",
		name: "Pushing Me Away",
		img: "/src/assets/playlist-logo.jpg",
	},
	{
		label: "Linkin Park",
		path: "https://files.edgestore.dev/ae9dpdg4ic95yeqj/songs/_public/4015987a-4f06-4079-93be-c5593d51aa24.mp3",
		name: "My December",
		img: "/src/assets/playlist-logo.jpg",
	},
	{
		label: "Linkin Park",
		path: "https://files.edgestore.dev/ae9dpdg4ic95yeqj/songs/_public/a2a03499-d367-49a7-9155-c73c0372e04a.mp3",
		name: "High Voltage",
		img: "/src/assets/playlist-logo.jpg",
	},
	{
		label: "Linkin Park",
		path: "https://files.edgestore.dev/ae9dpdg4ic95yeqj/songs/_public/c4323a20-f5ab-4d35-90ac-f221f572c412.mp3",
		name: "Papercut [Live at Yalding House, London, England, 1-12-2001 - BBC One]",
		img: "/src/assets/playlist-logo.jpg",
	},
];

export const playlists = [
	{
		name: "Hybrid Theory",
		author: "Linkin Park",
		songs: songs,
		image: "/src/assets/playlist-logo.jpg",
		description: "Linkin Park",
	},
];

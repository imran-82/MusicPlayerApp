const music = document.querySelector("audio");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
	{
		name: "track1",
		title: "True Love",
		artist: "Kanye West",
	},
	{
		name: "track2",
		title: "Broken Road",
		artist: "Kanye West",
	},
	{
		name: "track3",
		title: "Get Lost",
		artist: "Kanye West",
	},
	{
		name: "track4",
		title: "Too Easy",
		artist: "Kanye West",
	},
	{
		name: "track5",
		title: "Flowers",
		artist: "Kanye West",
	},
];

let isPlaying = false;

const playmusic = () => {
	music.play();
	isPlaying = true;
	play.classList.replace("fa-play", "fa-stop");
};

const pausemusic = () => {
	music.pause();
	isPlaying = false;
	play.classList.replace("fa-stop", "fa-play");
};

play.addEventListener("click", () => {
	if (isPlaying) {
		pausemusic();
	} else {
		playmusic();
	}
});

const loadsong = (songs) => {
	title.textContent = songs.title;
	artist.textContent = songs.artist;
	music.src = "songs/" + songs.name + ".mp3";
};

let songIndex = 0;

const nextSong = () => {
	songIndex = (songIndex + 1) % songs.length;
	loadsong(songs[songIndex]);
	playmusic();
};

const prevSong = () => {
	songIndex = (songIndex - 1 + songs.length) % songs.length;
	loadsong(songs[songIndex]);
	playmusic();
};
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

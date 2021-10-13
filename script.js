// alert("hello");

// initialise variables

var songIndex = 0;
let audioElement = new Audio("mp3/1.mp3");

let masterPlay = document.getElementById("masterPlay");

let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");

let songItems = Array.from(document.getElementsByClassName("songItem"));

let masterSongName = document.getElementById("masterSongName");

// console.log(songItems);

// array from because html collection hai tabhi foreach laga skte ho

// how to play song

// array of objects

let songs = [
  {
    songName: "Bandook Meri Laila",
    filePath: "mp3/1.mp3",
    coverPath: "covers/gentle.jpg",
  },
  {
    songName: "Bad Boy X Bad Girl",
    filePath: "mp3/2.mp3",
    coverPath: "covers/bad.jpg",
  },
  {
    songName: "Bom Diggy Diggy",
    filePath: "mp3/3.mp3",
    coverPath: "covers/sonu.jpg",
  },
  {
    songName: "Tere Naal Nachna",
    filePath: "mp3/5.mp3",
    coverPath: "covers/danceid.jpg",
  },
  {
    songName: "Illegal Weapon 4.0",
    filePath: "mp3/4.mp3",
    coverPath: "covers/street.jpg",
  },
  {
    songName: "Dua Leviatating",
    filePath: "mp3/6.mp3",
    coverPath: "covers/dua.jpeg",
  },
];

songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;

  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();

// handle play pause click

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();

    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    gif.style.opacity = 0;
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
  }
});

// end handle play pause click

// listen to events

// progress bar update
audioElement.addEventListener("timeupdate", () => {
  //   console.log("time update");

  // update seek bar

  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );

  myProgressBar.value = progress;

  //   console.log(progress);
});

// slider ke sath gaana change ho

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

// let songItemPlay = document.getElementsByClassName("songItemPlay");

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      // e kya hai? jispe click hua hai wo
      // console.log(e.target);

      makeAllPlays();

      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");

      audioElement.src = `mp3/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 5) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `mp3/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;

  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `mp3/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

console.log("welcome to spotify!")
// initializing the variables
let songindex = 0;
let = document.getElementById('mastersongname');
let albumart=document.getElementById('albumart1')
let audioElement = new Audio('Tur Kalleyan - Laal Singh Chaddha  Aamir  Kareena  Arijit, Shadab, Altamash  Pritam, Amitabh B.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs = [{ songName: "Tur kallliyan", filepath: "song/1.mp3", coverpath: "https://c.saavncdn.com/362/Tur-Kalleyan-From-Laal-Singh-Chaddha-Hindi-2022-20220714192124-500x500.jpg" },
{ songName: "Tum jo milo", filepath: "song/2.mp3", coverpath: "https://i.ytimg.com/vi/yX8ZqaXTTfk/mqdefault.jpg" },
{ songName: "tere liye", filepath: "song/3.mp3", coverpath: "https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/Prince-306x393.jpg" },
{ songName: "Tera Hone laga", filepath: "song/4.mp3", coverpath: "https://c.saavncdn.com/608/Tera-Hone-Laga-Hoon-Hindi-2021-20211028153034-500x500.jpg" },
{ songName: "Laboon ko", filepath: "song/5.mp3", coverpath: "https://i1.sndcdn.com/artworks-JBw14BLKparNuNzd-KtQc8w-t500x500.jpg" },
{ songName: "Kaise muje tum", filepath: "song/6.mp3", coverpath: "https://c.saavncdn.com/464/Ghajini-Hindi-2008-20221125182010-500x500.jpg" },
{ songName: "Chaleya", filepath: "song/7.mp3", coverpath: "https://c.saavncdn.com/026/Chaleya-From-Jawan-Hindi-2023-20230814014337-500x500.jpg" },
{ songName: "Ahista Ahista", filepath: "song/8.mp3", coverpath: "https://img.youtube.com/vi/YMchlSmMnPc/mqdefault.jpg" },
{ songName: "Guzarish", filepath: "song/9.mp3", coverpath: "https://upload.wikimedia.org/wikipedia/en/9/97/Ghajini_Hindi.jpg" },
{ songName: "Bheekha", filepath: "song/10", coverpath: "https://gumlet.assettype.com/filmcompanion%2F2023-06%2F0f28c3e1-a9a7-442d-a017-c00155d03f66%2FCover_1.jpg?format=auto" },
{ songName: "Left And Right ", filepath: "song/11.mp3", coverpath: "https://staticg.sportskeeda.com/editor/2022/08/1c12f-16601414069398-1920.jpg?w=840" },
{ songName: "Light Switch ", filepath: "song/12", coverpath: "https://upload.wikimedia.org/wikipedia/en/2/2a/Charlie_Puth_-_Light_Switch.png" },
{ songName: "Lipstick", filepath: "song/13.mp3", coverpath: "https://euro.dayfr.com/temp/resized/medium_2023-08-21-9c99f72028.jpg" },
{ songName: "Loser ", filepath: "song/14.mp3", coverpath: "https://i.ytimg.com/vi/s72NmSRGzZA/maxresdefault.jpg" },
{ songName: "Marks On Neck ", filepath: "song/15", coverpath: "https://i.ytimg.com/vi/Ibx6cg2vTMk/sddefault.jpg" },
{ songName: "No More Drama ", filepath: "song/16", coverpath: "https://i1.sndcdn.com/artworks-dOgnoyp3bqD4lxyr-3UQjaA-t500x500.jpg" },
{ songName: "Tears On Piano ", filepath: "song/17", coverpath: "https://i.ytimg.com/vi/kX6wgd9QUxw/sddefault.jpg" },
{ songName: "THAT'S NOT HOW", filepath: "song/18", coverpath: "https://i.ytimg.com/vi/cDrkaY_cgPg/maxresdefault.jpg" },
{ songName: "First Time For", filepath: "song/19", coverpath: "https://i.ytimg.com/vi/9mzSgnOxXtw/maxresdefault.jpg" },
{ songName: "Girlfriend ", filepath: "song/20", coverpath: "https://upload.wikimedia.org/wikipedia/en/a/ab/Charlie_Puth_-_Girlfriend.png" },
{ songName: "kehna Galat", filepath: "song/21", coverpath: "https://media.gettyimages.com/id/85054561/photo/photo-of-nusrat-fateh-ali-khan.jpg?s=612x612&w=gi&k=20&c=936VK5aSGkW0nVpl_L5Ag6VnwyfTvUF6ZZ3sExLR6Eo=" },
{ songName: "Sonchta hun", filepath: "song/22", coverpath: "https://i.pinimg.com/736x/cf/1c/5d/cf1c5dfb7bfd81037d954932ab4b4791.jpg" },
{ songName: "Akhiyan Udeek", filepath: "song/23", coverpath: "https://i.pinimg.com/564x/12/35/02/123502c9fb7f2a3da2ca4555a8fe2fab.jpg" },
{ songName: "Hai kahan ka", filepath: "song/24", coverpath: "https://e1.pxfuel.com/desktop-wallpaper/28/667/desktop-wallpaper-nusrat-fateh-ali-khan-thumbnail.jpg" },
]

songitems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})

// Handle play/pause click
masterplay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
  }
  else {
    audioElement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
  }
})
// Listen to events
audioElement.addEventListener('timeupdate', () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myprogressbar.value = progress;
  //   var l=audioElement.duration/60;
  // var fixedNum = l.toFixed(2);
  // console.log(fixedNum);
})
myprogressbar.addEventListener('change', () => {
  audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})
const makeAllplays = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  })
}

Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
  element.addEventListener('click', (e) => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      makeAllplays();
      songindex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `song/${songindex + 1}.mp3`;
      mastersongname.innerText = songs[songindex].songName;
      albumart.src=songs[songindex].coverpath;
      
      audioElement.currentTime = 0;
      audioElement.play();
      invisible.classList.remove("bottomNot");
      invisible.classList.add("bottom");
      gif.style.opacity = 1;
      masterplay.classList.remove("fa-circle-play");
      masterplay.classList.add("fa-circle-pause");
    }
    else {
      audioElement.pause();
      e.target.classList.remove('fa-circle-pause');
      e.target.classList.add('fa-circle-play');
      gif.style.opacity = 0;
      masterplay.classList.remove("fa-circle-pause");
      masterplay.classList.add("fa-circle-play");
    }

  })
})
document.getElementById("forward").addEventListener('click', () => {
  if (songindex >= 24) {
    songindex = 0;
  }
  else {
    songindex += 1;
  }
  audioElement.src = `song/${songindex + 1}.mp3`;
  mastersongname.innerText = songs[songindex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
   albumart.src=songs[songindex].coverpath;
  invisible.classList.remove("bottomNot");
  invisible.classList.add("bottom");
  gif.style.opacity = 1;
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
})
document.getElementById("previous").addEventListener('click', () => {
  if (songindex <= 0) {
    songindex = 0;
  }
  else {
    songindex -= 1;
  }
  audioElement.src = `song/${songindex + 1}.mp3`;
  mastersongname.innerText = songs[songindex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
   albumart.src=songs[songindex].coverpath;
  invisible.classList.remove("bottomNot");
  invisible.classList.add("bottom");
  gif.style.opacity = 1;
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
})
// updown work button
let invisible = document.getElementById("invisible");
let dc = document.getElementById("up");
dc.addEventListener('click', () => {
  invisible.classList.remove("bottom");
  invisible.classList.add("bottomNot");
})
// space bar play/pause
document.body.onkeyup = function(e) {
  if (e.key == " " ||
    e.code == "Space" ||
    e.keyCode == 32
  ) {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterplay.classList.remove('fa-circle-play');
      masterplay.classList.add('fa-circle-pause');
      gif.style.opacity = 1;
    }
    else {
      audioElement.pause();
      masterplay.classList.remove('fa-circle-pause');
      masterplay.classList.add('fa-circle-play');
      gif.style.opacity = 0;
    }

  }
}

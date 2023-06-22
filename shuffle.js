
//video and audio//

const videoSources = [
  'video1.mp4',
  'video2.mp4',
  'video3.mp4',
  'video4.mp4',
  'video5.mp4',
  'video6.mp4',
  'video7.mp4',
  'video8.mp4',
  'video9.mp4',
  'video10.mp4',
  'video11.mp4',
  'video12.mp4',
  'video13.mp4',
  'video14.mp4',
  'video17.mp4',
];

const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');
const shuffleBtn = document.getElementById('shuffle-videos-btn');

// Play the first three videos
playVideos([video1, video2, video3]);

// Shuffle the videos when the button is clicked
shuffleBtn.addEventListener('click', function() {
  shuffleVideos([video1, video2, video3]);
});

function playVideos(videos) {
  for (let i = 0; i < videos.length; i++) {
    videos[i].src = videoSources[i];
    videos[i].play();
  }
}

function shuffleVideos(videos) {
  // Get three random videos from the pool
  const randomVideos = getRandomVideos(3);
  
  // Replace the current videos with the new ones
  for (let i = 0; i < videos.length; i++) {
    videos[i].src = randomVideos[i];
    videos[i].play();
  }
}

function getRandomVideos(num) {
  // Get `num` random videos from the pool
  const shuffledSources = videoSources.sort(() => Math.random() - 0.5);
  return shuffledSources.slice(0, num);
}

//audio start 
const audioElements = document.getElementsByTagName("audio");
const playButtons = document.querySelectorAll(".play-btn");
const volumeSliders = document.querySelectorAll(".volume-slider");

// Add event listeners to play buttons
playButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const audioId = button.getAttribute("data-audio");
    const audio = document.getElementById(audioId);

    // Toggle the play/pause state of the audio element
    if (audio.paused) {
      audio.play();
      button.innerHTML = "Pause";
    } else {
      audio.pause();
      button.innerHTML = "Play";
    }
  });
});

// Add event listeners to volume sliders
volumeSliders.forEach((slider) => {
  slider.addEventListener("input", () => {
    const audioId = slider.parentElement.querySelector(".play-btn").getAttribute("data-audio");
    const audio = document.getElementById(audioId);
    const volume = slider.value;

    audio.volume = volume;
  });
});

// Add event listeners to audio elements for the "timeupdate" event
audioElements.forEach((audio) => {
  audio.addEventListener("timeupdate", () => {
    const audioId = audio.getAttribute("id");
    const button = document.querySelector(`.play-btn[data-audio="${audioId}"]`);

    // Check if the audio has ended
    if (audio.currentTime >= audio.duration) {
      button.innerHTML = "Play";
    }
  });
});


var progressBar = document.querySelector(".progress-bar");
var progress = document.querySelector(".progress");
var timePopup = progressBar.querySelector(".time-popup");
var progressSpan = progress.querySelector("span");

var progressBarWidth = progressBar.clientWidth;
var isDrag = false;
var initialClientX = 0;
var current = 0;
var currentWidth;

var handleChange = function (width) {
  var value = (width * 100) / progressBarWidth;
  currentWidth = width;
  if (value > 100) {
    value = 100;
  } else if (value < 0) {
    value = 0;
  }
  progress.style.width = `${value}%`;
  if (!isDrag) {
    // update currentTime
    audio.currentTime = (value / 100) * audio.duration;
  }
};

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    handleChange(e.offsetX);
    isDrag = true;
    initialClientX = e.clientX;
    current = e.offsetX;
  }
});
progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  isDrag = true;
  initialClientX = e.clientX;
});

document.addEventListener("mouseup", function (e) {
  if (isDrag) {
    isDrag = false;
    current = currentWidth;
    audio.currentTime = (currentWidth / progressBarWidth) * audio.duration;
  }
});
document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var moveWith = e.clientX - initialClientX + current;
    handleChange(moveWith);
  }
});

//xay dung player chuyen phat nhac
var audio = new Audio("./audio/A-Loi-Double2T-Masew.mp3");
var playBtn = document.querySelector(".playbtn");
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;
var pauseIcon = `<i class="fa-solid fa-pause"></i>`;
var playIcon = `<i class="fa-solid fa-play"></i>`;

var getTime = function (seconds) {
  //Tinh so phut
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseIcon;
  } else {
    audio.pause();
    this.innerHTML = playIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  if (isDrag) {
    e.stopPropagation();
  }
  currentTimeEl.innerText = getTime(audio.currentTime);
  var value = (audio.currentTime * 100) / audio.duration;
  progress.style.width = `${value}%`;
});

//chu thich thoi gian
progressBar.addEventListener("mousemove", function (e) {
  timePopup.style.opacity = 1;
  initialOffsetX = e.offsetX;
  timePopup.style.left = `${initialOffsetX}px`;
  var value = (e.offsetX / progressBarWidth) * audio.duration;
  timePopup.innerText = getTime(value);
});
progressBar.addEventListener("mouseleave", function () {
  timePopup.style.opacity = 0;
});
progressSpan.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});
// reset khi het
audio.addEventListener("ended", function () {
  audio.currentTime = 0;
  playBtn.innerHTML = playIcon;
});

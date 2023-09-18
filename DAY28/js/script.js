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
  // audio.currentTime = 0;
  // value = progressBarWidth;
  playBtn.innerHTML = playIcon;
  isDrag = false;
  initialClientX = 0;
  current = 0;
  currentWidth = 0;
});
//karaoke
var lyric = `{
  "err": 0,
  "msg": "Success",
  "data": {
    "sentences": [
      {
        "words": [
          {
            "startTime": 9790,
            "endTime": 10050,
            "data": "Tại"
          },
          {
            "startTime": 10050,
            "endTime": 10050,
            "data": "vì"
          },
          {
            "startTime": 10050,
            "endTime": 10330,
            "data": "thích"
          },
          {
            "startTime": 10330,
            "endTime": 10330,
            "data": "em"
          },
          {
            "startTime": 10330,
            "endTime": 10580,
            "data": "nhiều"
          },
          {
            "startTime": 10580,
            "endTime": 10860,
            "data": "quá"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 10860,
            "endTime": 10860,
            "data": "Nhưng"
          },
          {
            "startTime": 10860,
            "endTime": 11110,
            "data": "em"
          },
          {
            "startTime": 11110,
            "endTime": 11380,
            "data": "lại"
          },
          {
            "startTime": 11380,
            "endTime": 11380,
            "data": "nói"
          },
          {
            "startTime": 11380,
            "endTime": 11660,
            "data": "là"
          },
          {
            "startTime": 11660,
            "endTime": 11660,
            "data": "à"
          },
          {
            "startTime": 11660,
            "endTime": 12470,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 12470,
            "endTime": 12470,
            "data": "Cũng"
          },
          {
            "startTime": 12470,
            "endTime": 12740,
            "data": "định"
          },
          {
            "startTime": 12740,
            "endTime": 12990,
            "data": "solo"
          },
          {
            "startTime": 12990,
            "endTime": 12990,
            "data": "Hip"
          },
          {
            "startTime": 12990,
            "endTime": 13290,
            "data": "Hop"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 13290,
            "endTime": 13530,
            "data": "Cùng"
          },
          {
            "startTime": 13530,
            "endTime": 13810,
            "data": "với"
          },
          {
            "startTime": 13810,
            "endTime": 13810,
            "data": "trai"
          },
          {
            "startTime": 13810,
            "endTime": 14080,
            "data": "bản"
          },
          {
            "startTime": 14080,
            "endTime": 14340,
            "data": "nhưng"
          },
          {
            "startTime": 14340,
            "endTime": 14340,
            "data": "mà"
          },
          {
            "startTime": 14340,
            "endTime": 15130,
            "data": "thôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 15130,
            "endTime": 15130,
            "data": "Anh"
          },
          {
            "startTime": 15130,
            "endTime": 15390,
            "data": "gửi"
          },
          {
            "startTime": 15390,
            "endTime": 15660,
            "data": "vào"
          },
          {
            "startTime": 15660,
            "endTime": 15660,
            "data": "trong"
          },
          {
            "startTime": 15660,
            "endTime": 15920,
            "data": "câu"
          },
          {
            "startTime": 15920,
            "endTime": 16200,
            "data": "rap"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 16200,
            "endTime": 16200,
            "data": "Cho"
          },
          {
            "startTime": 16200,
            "endTime": 16470,
            "data": "em"
          },
          {
            "startTime": 16470,
            "endTime": 16470,
            "data": "dính"
          },
          {
            "startTime": 16470,
            "endTime": 16730,
            "data": "cả"
          },
          {
            "startTime": 16730,
            "endTime": 16990,
            "data": "thính"
          },
          {
            "startTime": 16990,
            "endTime": 16990,
            "data": "cả"
          },
          {
            "startTime": 16990,
            "endTime": 17530,
            "data": "mồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 17530,
            "endTime": 17780,
            "data": "Nhà"
          },
          {
            "startTime": 17780,
            "endTime": 17780,
            "data": "em"
          },
          {
            "startTime": 17780,
            "endTime": 18070,
            "data": "có"
          },
          {
            "startTime": 18070,
            "endTime": 18340,
            "data": "tới"
          },
          {
            "startTime": 18340,
            "endTime": 18340,
            "data": "mấy"
          },
          {
            "startTime": 18340,
            "endTime": 18600,
            "data": "quả"
          },
          {
            "startTime": 18600,
            "endTime": 18880,
            "data": "đồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 18880,
            "endTime": 18880,
            "data": "Ừ"
          },
          {
            "startTime": 18880,
            "endTime": 19130,
            "data": "thì"
          },
          {
            "startTime": 19130,
            "endTime": 19410,
            "data": "anh"
          },
          {
            "startTime": 19410,
            "endTime": 19410,
            "data": "cũng"
          },
          {
            "startTime": 19410,
            "endTime": 19670,
            "data": "tính"
          },
          {
            "startTime": 19670,
            "endTime": 19940,
            "data": "cả"
          },
          {
            "startTime": 19940,
            "endTime": 20430,
            "data": "rồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 20430,
            "endTime": 20680,
            "data": "Tại"
          },
          {
            "startTime": 20680,
            "endTime": 20680,
            "data": "vì"
          },
          {
            "startTime": 20680,
            "endTime": 20960,
            "data": "thích"
          },
          {
            "startTime": 20960,
            "endTime": 20960,
            "data": "em"
          },
          {
            "startTime": 20960,
            "endTime": 21230,
            "data": "nhiều"
          },
          {
            "startTime": 21230,
            "endTime": 21230,
            "data": "quá"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 21230,
            "endTime": 21500,
            "data": "Nhưng"
          },
          {
            "startTime": 21500,
            "endTime": 21760,
            "data": "em"
          },
          {
            "startTime": 21760,
            "endTime": 21760,
            "data": "lại"
          },
          {
            "startTime": 21760,
            "endTime": 22030,
            "data": "nói"
          },
          {
            "startTime": 22030,
            "endTime": 22030,
            "data": "là"
          },
          {
            "startTime": 22030,
            "endTime": 22300,
            "data": "à"
          },
          {
            "startTime": 22300,
            "endTime": 22830,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 22830,
            "endTime": 23090,
            "data": "Cũng"
          },
          {
            "startTime": 23090,
            "endTime": 23360,
            "data": "định"
          },
          {
            "startTime": 23360,
            "endTime": 23360,
            "data": "solo"
          },
          {
            "startTime": 23360,
            "endTime": 23620,
            "data": "Hip"
          },
          {
            "startTime": 23620,
            "endTime": 23890,
            "data": "Hop"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 23890,
            "endTime": 24160,
            "data": "Cùng"
          },
          {
            "startTime": 24160,
            "endTime": 24410,
            "data": "với"
          },
          {
            "startTime": 24410,
            "endTime": 24410,
            "data": "trai"
          },
          {
            "startTime": 24410,
            "endTime": 24690,
            "data": "bản"
          },
          {
            "startTime": 24690,
            "endTime": 24960,
            "data": "nhưng"
          },
          {
            "startTime": 24960,
            "endTime": 24960,
            "data": "mà"
          },
          {
            "startTime": 24960,
            "endTime": 25480,
            "data": "thôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 25480,
            "endTime": 25750,
            "data": "Anh"
          },
          {
            "startTime": 25750,
            "endTime": 26010,
            "data": "gửi"
          },
          {
            "startTime": 26010,
            "endTime": 26010,
            "data": "vào"
          },
          {
            "startTime": 26010,
            "endTime": 26290,
            "data": "trong"
          },
          {
            "startTime": 26290,
            "endTime": 26560,
            "data": "câu"
          },
          {
            "startTime": 26560,
            "endTime": 26820,
            "data": "rap"
          },
          {
            "startTime": 26820,
            "endTime": 26820,
            "data": "cho"
          },
          {
            "startTime": 26820,
            "endTime": 27070,
            "data": "em"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 27070,
            "endTime": 27070,
            "data": "Dính"
          },
          {
            "startTime": 27070,
            "endTime": 27340,
            "data": "cả"
          },
          {
            "startTime": 27340,
            "endTime": 27620,
            "data": "thính"
          },
          {
            "startTime": 27620,
            "endTime": 27620,
            "data": "cả"
          },
          {
            "startTime": 27620,
            "endTime": 28150,
            "data": "mồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 28150,
            "endTime": 28400,
            "data": "Nhà"
          },
          {
            "startTime": 28400,
            "endTime": 28400,
            "data": "em"
          },
          {
            "startTime": 28400,
            "endTime": 28680,
            "data": "có"
          },
          {
            "startTime": 28680,
            "endTime": 28680,
            "data": "tới"
          },
          {
            "startTime": 28680,
            "endTime": 28940,
            "data": "mấy"
          },
          {
            "startTime": 28940,
            "endTime": 29210,
            "data": "quả"
          },
          {
            "startTime": 29210,
            "endTime": 29470,
            "data": "đồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 29470,
            "endTime": 29470,
            "data": "Ừ"
          },
          {
            "startTime": 29470,
            "endTime": 29730,
            "data": "thì"
          },
          {
            "startTime": 29730,
            "endTime": 30000,
            "data": "anh"
          },
          {
            "startTime": 30000,
            "endTime": 30000,
            "data": "cũng"
          },
          {
            "startTime": 30000,
            "endTime": 30260,
            "data": "tính"
          },
          {
            "startTime": 30260,
            "endTime": 30530,
            "data": "cả"
          },
          {
            "startTime": 30530,
            "endTime": 30800,
            "data": "rồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 30800,
            "endTime": 31060,
            "data": "À"
          },
          {
            "startTime": 31060,
            "endTime": 31320,
            "data": "lôi"
          },
          {
            "startTime": 31320,
            "endTime": 31800,
            "data": "nó"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 31800,
            "endTime": 32070,
            "data": "Gặp"
          },
          {
            "startTime": 32070,
            "endTime": 32070,
            "data": "em"
          },
          {
            "startTime": 32070,
            "endTime": 32340,
            "data": "ở"
          },
          {
            "startTime": 32340,
            "endTime": 32340,
            "data": "thung"
          },
          {
            "startTime": 32340,
            "endTime": 32620,
            "data": "lũng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 32620,
            "endTime": 32890,
            "data": "Ném"
          },
          {
            "startTime": 32890,
            "endTime": 33150,
            "data": "quả"
          },
          {
            "startTime": 33150,
            "endTime": 33150,
            "data": "còn"
          },
          {
            "startTime": 33150,
            "endTime": 33420,
            "data": "lên"
          },
          {
            "startTime": 33420,
            "endTime": 33420,
            "data": "không"
          },
          {
            "startTime": 33420,
            "endTime": 34210,
            "data": "trung"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 34210,
            "endTime": 34210,
            "data": "Anh"
          },
          {
            "startTime": 34210,
            "endTime": 34470,
            "data": "bận"
          },
          {
            "startTime": 34470,
            "endTime": 34730,
            "data": "đi"
          },
          {
            "startTime": 34730,
            "endTime": 34730,
            "data": "tìm"
          },
          {
            "startTime": 34730,
            "endTime": 35010,
            "data": "cảm"
          },
          {
            "startTime": 35010,
            "endTime": 35270,
            "data": "hứng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 35270,
            "endTime": 35530,
            "data": "Trong"
          },
          {
            "startTime": 35530,
            "endTime": 35810,
            "data": "chuỗi"
          },
          {
            "startTime": 35810,
            "endTime": 35810,
            "data": "ngày"
          },
          {
            "startTime": 35810,
            "endTime": 36070,
            "data": "bị"
          },
          {
            "startTime": 36070,
            "endTime": 36340,
            "data": "mông"
          },
          {
            "startTime": 36340,
            "endTime": 36870,
            "data": "lung"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 36870,
            "endTime": 37130,
            "data": "Anh"
          },
          {
            "startTime": 37130,
            "endTime": 37390,
            "data": "cầm"
          },
          {
            "startTime": 37390,
            "endTime": 37390,
            "data": "trên"
          },
          {
            "startTime": 37390,
            "endTime": 37660,
            "data": "tay"
          },
          {
            "startTime": 37660,
            "endTime": 37940,
            "data": "cây"
          },
          {
            "startTime": 37940,
            "endTime": 38200,
            "data": "nỏ"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 38200,
            "endTime": 38200,
            "data": "Ngắm"
          },
          {
            "startTime": 38200,
            "endTime": 38470,
            "data": "vào"
          },
          {
            "startTime": 38470,
            "endTime": 38720,
            "data": "tâm"
          },
          {
            "startTime": 38720,
            "endTime": 38720,
            "data": "nhưng"
          },
          {
            "startTime": 38720,
            "endTime": 38990,
            "data": "không"
          },
          {
            "startTime": 38990,
            "endTime": 39470,
            "data": "trúng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 39470,
            "endTime": 39740,
            "data": "Nhưng"
          },
          {
            "startTime": 39740,
            "endTime": 39740,
            "data": "mà"
          },
          {
            "startTime": 39740,
            "endTime": 40000,
            "data": "lỡ"
          },
          {
            "startTime": 40000,
            "endTime": 40000,
            "data": "bị"
          },
          {
            "startTime": 40000,
            "endTime": 40260,
            "data": "em"
          },
          {
            "startTime": 40260,
            "endTime": 40540,
            "data": "gây"
          },
          {
            "startTime": 40540,
            "endTime": 40540,
            "data": "thương"
          },
          {
            "startTime": 40540,
            "endTime": 40800,
            "data": "nhớ"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 40800,
            "endTime": 41060,
            "data": "Bắn"
          },
          {
            "startTime": 41060,
            "endTime": 41060,
            "data": "vào"
          },
          {
            "startTime": 41060,
            "endTime": 41330,
            "data": "tim"
          },
          {
            "startTime": 41330,
            "endTime": 41330,
            "data": "mà"
          },
          {
            "startTime": 41330,
            "endTime": 41610,
            "data": "không"
          },
          {
            "startTime": 41610,
            "endTime": 42120,
            "data": "súng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 42120,
            "endTime": 42390,
            "data": "Trai"
          },
          {
            "startTime": 42390,
            "endTime": 42650,
            "data": "bản"
          },
          {
            "startTime": 42650,
            "endTime": 42920,
            "data": "em"
          },
          {
            "startTime": 42920,
            "endTime": 42920,
            "data": "chơi"
          },
          {
            "startTime": 42920,
            "endTime": 43200,
            "data": "đàn"
          },
          {
            "startTime": 43200,
            "endTime": 43460,
            "data": "tính"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 43460,
            "endTime": 43460,
            "data": "Còn"
          },
          {
            "startTime": 43460,
            "endTime": 43710,
            "data": "anh"
          },
          {
            "startTime": 43710,
            "endTime": 43710,
            "data": "thì"
          },
          {
            "startTime": 43710,
            "endTime": 44000,
            "data": "gảy"
          },
          {
            "startTime": 44000,
            "endTime": 44790,
            "data": "guitar"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 44790,
            "endTime": 45060,
            "data": "Anh"
          },
          {
            "startTime": 45060,
            "endTime": 45320,
            "data": "thì"
          },
          {
            "startTime": 45320,
            "endTime": 45320,
            "data": "không"
          },
          {
            "startTime": 45320,
            "endTime": 45580,
            "data": "biết"
          },
          {
            "startTime": 45580,
            "endTime": 45850,
            "data": "múa"
          },
          {
            "startTime": 45850,
            "endTime": 46020,
            "data": "khèn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 46020,
            "endTime": 46290,
            "data": "Nhưng"
          },
          {
            "startTime": 46290,
            "endTime": 46290,
            "data": "mà"
          },
          {
            "startTime": 46290,
            "endTime": 46560,
            "data": "giỏi"
          },
          {
            "startTime": 46560,
            "endTime": 46820,
            "data": "quẩy"
          },
          {
            "startTime": 46820,
            "endTime": 47630,
            "data": "Vina"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 47630,
            "endTime": 47880,
            "data": "Yêu"
          },
          {
            "startTime": 47880,
            "endTime": 47880,
            "data": "em"
          },
          {
            "startTime": 47880,
            "endTime": 48150,
            "data": "mấy"
          },
          {
            "startTime": 48150,
            "endTime": 48420,
            "data": "núi"
          },
          {
            "startTime": 48420,
            "endTime": 48420,
            "data": "cũng"
          },
          {
            "startTime": 48420,
            "endTime": 48670,
            "data": "trèo"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 48670,
            "endTime": 48950,
            "data": "Mặc"
          },
          {
            "startTime": 48950,
            "endTime": 48950,
            "data": "dù"
          },
          {
            "startTime": 48950,
            "endTime": 49210,
            "data": "không"
          },
          {
            "startTime": 49210,
            "endTime": 49480,
            "data": "giỏi"
          },
          {
            "startTime": 49480,
            "endTime": 49740,
            "data": "đi"
          },
          {
            "startTime": 49740,
            "endTime": 50010,
            "data": "xa"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 50010,
            "endTime": 50280,
            "data": "Anh"
          },
          {
            "startTime": 50280,
            "endTime": 50540,
            "data": "lại"
          },
          {
            "startTime": 50540,
            "endTime": 50540,
            "data": "còn"
          },
          {
            "startTime": 50540,
            "endTime": 50800,
            "data": "giỏi"
          },
          {
            "startTime": 50800,
            "endTime": 50800,
            "data": "cả"
          },
          {
            "startTime": 50800,
            "endTime": 51070,
            "data": "thi"
          },
          {
            "startTime": 51070,
            "endTime": 51330,
            "data": "ca"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 51330,
            "endTime": 51880,
            "data": "Biến"
          },
          {
            "startTime": 51880,
            "endTime": 51880,
            "data": "homestay"
          },
          {
            "startTime": 51880,
            "endTime": 52140,
            "data": "bản"
          },
          {
            "startTime": 52140,
            "endTime": 52410,
            "data": "thành"
          },
          {
            "startTime": 52410,
            "endTime": 52930,
            "data": "villa"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 52930,
            "endTime": 53180,
            "data": "Tấm"
          },
          {
            "startTime": 53180,
            "endTime": 53460,
            "data": "lòng"
          },
          {
            "startTime": 53460,
            "endTime": 53460,
            "data": "anh"
          },
          {
            "startTime": 53460,
            "endTime": 53720,
            "data": "không"
          },
          {
            "startTime": 53720,
            "endTime": 53720,
            "data": "phải"
          },
          {
            "startTime": 53720,
            "endTime": 53990,
            "data": "thú"
          },
          {
            "startTime": 53990,
            "endTime": 54270,
            "data": "dữ"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 54270,
            "endTime": 54270,
            "data": "Không"
          },
          {
            "startTime": 54270,
            "endTime": 54530,
            "data": "cần"
          },
          {
            "startTime": 54530,
            "endTime": 54530,
            "data": "mổ"
          },
          {
            "startTime": 54530,
            "endTime": 54800,
            "data": "bụng"
          },
          {
            "startTime": 54800,
            "endTime": 55060,
            "data": "thì"
          },
          {
            "startTime": 55060,
            "endTime": 55060,
            "data": "mới"
          },
          {
            "startTime": 55060,
            "endTime": 55340,
            "data": "được"
          },
          {
            "startTime": 55340,
            "endTime": 55600,
            "data": "xem"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 55600,
            "endTime": 55870,
            "data": "Mấy"
          },
          {
            "startTime": 55870,
            "endTime": 55870,
            "data": "anh"
          },
          {
            "startTime": 55870,
            "endTime": 56150,
            "data": "thanh"
          },
          {
            "startTime": 56150,
            "endTime": 56410,
            "data": "niên"
          },
          {
            "startTime": 56410,
            "endTime": 56410,
            "data": "trong"
          },
          {
            "startTime": 56410,
            "endTime": 56650,
            "data": "bản"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 56650,
            "endTime": 56940,
            "data": "Phải"
          },
          {
            "startTime": 56940,
            "endTime": 56940,
            "data": "biết"
          },
          {
            "startTime": 56940,
            "endTime": 57190,
            "data": "uống"
          },
          {
            "startTime": 57190,
            "endTime": 57450,
            "data": "rượu"
          },
          {
            "startTime": 57450,
            "endTime": 57450,
            "data": "mới"
          },
          {
            "startTime": 57450,
            "endTime": 57720,
            "data": "tán"
          },
          {
            "startTime": 57720,
            "endTime": 58000,
            "data": "được"
          },
          {
            "startTime": 58000,
            "endTime": 58260,
            "data": "em"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 58260,
            "endTime": 58530,
            "data": "Nhà"
          },
          {
            "startTime": 58530,
            "endTime": 58530,
            "data": "sàn"
          },
          {
            "startTime": 58530,
            "endTime": 58790,
            "data": "của"
          },
          {
            "startTime": 58790,
            "endTime": 59050,
            "data": "em"
          },
          {
            "startTime": 59050,
            "endTime": 59050,
            "data": "sẵn"
          },
          {
            "startTime": 59050,
            "endTime": 59330,
            "data": "bậc"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 59330,
            "endTime": 59580,
            "data": "Nhưng"
          },
          {
            "startTime": 59580,
            "endTime": 59860,
            "data": "nàng"
          },
          {
            "startTime": 59860,
            "endTime": 59860,
            "data": "đồng"
          },
          {
            "startTime": 59860,
            "endTime": 60110,
            "data": "ý"
          },
          {
            "startTime": 60110,
            "endTime": 60390,
            "data": "mới"
          },
          {
            "startTime": 60390,
            "endTime": 60390,
            "data": "có"
          },
          {
            "startTime": 60390,
            "endTime": 60640,
            "data": "đường"
          },
          {
            "startTime": 60640,
            "endTime": 60910,
            "data": "lên"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 60910,
            "endTime": 61180,
            "data": "Anh"
          },
          {
            "startTime": 61180,
            "endTime": 61180,
            "data": "thì"
          },
          {
            "startTime": 61180,
            "endTime": 61460,
            "data": "số"
          },
          {
            "startTime": 61460,
            "endTime": 61710,
            "data": "vốn"
          },
          {
            "startTime": 61710,
            "endTime": 61710,
            "data": "đen"
          },
          {
            "startTime": 61710,
            "endTime": 61980,
            "data": "đủi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 61980,
            "endTime": 62240,
            "data": "Không"
          },
          {
            "startTime": 62240,
            "endTime": 62240,
            "data": "biết"
          },
          {
            "startTime": 62240,
            "endTime": 62500,
            "data": "lần"
          },
          {
            "startTime": 62500,
            "endTime": 62770,
            "data": "này"
          },
          {
            "startTime": 62770,
            "endTime": 62770,
            "data": "liệu"
          },
          {
            "startTime": 62770,
            "endTime": 63050,
            "data": "có"
          },
          {
            "startTime": 63050,
            "endTime": 63050,
            "data": "được"
          },
          {
            "startTime": 63050,
            "endTime": 63580,
            "data": "hên"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 63580,
            "endTime": 63830,
            "data": "Ừ"
          },
          {
            "startTime": 63830,
            "endTime": 63830,
            "data": "thì"
          },
          {
            "startTime": 63830,
            "endTime": 64090,
            "data": "Noọng"
          },
          {
            "startTime": 64090,
            "endTime": 64640,
            "data": "ơi,"
          },
          {
            "startTime": 64640,
            "endTime": 64900,
            "data": "à"
          },
          {
            "startTime": 64900,
            "endTime": 65690,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 65690,
            "endTime": 65690,
            "data": "Hai"
          },
          {
            "startTime": 65690,
            "endTime": 65960,
            "data": "chúng"
          },
          {
            "startTime": 65960,
            "endTime": 66240,
            "data": "mình"
          },
          {
            "startTime": 66240,
            "endTime": 66240,
            "data": "thì"
          },
          {
            "startTime": 66240,
            "endTime": 66490,
            "data": "cùng"
          },
          {
            "startTime": 66490,
            "endTime": 66750,
            "data": "đẹp"
          },
          {
            "startTime": 66750,
            "endTime": 67290,
            "data": "nết"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 67290,
            "endTime": 67550,
            "data": "Đẹp"
          },
          {
            "startTime": 67550,
            "endTime": 67550,
            "data": "cả"
          },
          {
            "startTime": 67550,
            "endTime": 68370,
            "data": "đôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 68370,
            "endTime": 68370,
            "data": "Hội"
          },
          {
            "startTime": 68370,
            "endTime": 68630,
            "data": "trai"
          },
          {
            "startTime": 68630,
            "endTime": 68900,
            "data": "bản"
          },
          {
            "startTime": 68900,
            "endTime": 68900,
            "data": "để"
          },
          {
            "startTime": 68900,
            "endTime": 69160,
            "data": "anh"
          },
          {
            "startTime": 69160,
            "endTime": 69430,
            "data": "dẹp"
          },
          {
            "startTime": 69430,
            "endTime": 69960,
            "data": "hết"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 69960,
            "endTime": 69960,
            "data": "Chấp"
          },
          {
            "startTime": 69960,
            "endTime": 70220,
            "data": "cả"
          },
          {
            "startTime": 70220,
            "endTime": 70760,
            "data": "hội"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 70760,
            "endTime": 71010,
            "data": "Trồng"
          },
          {
            "startTime": 71010,
            "endTime": 71010,
            "data": "cây"
          },
          {
            "startTime": 71010,
            "endTime": 71290,
            "data": "kín"
          },
          {
            "startTime": 71290,
            "endTime": 71560,
            "data": "cả"
          },
          {
            "startTime": 71560,
            "endTime": 71560,
            "data": "quả"
          },
          {
            "startTime": 71560,
            "endTime": 71810,
            "data": "đồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 71810,
            "endTime": 72080,
            "data": "Xong"
          },
          {
            "startTime": 72080,
            "endTime": 72350,
            "data": "dắt"
          },
          {
            "startTime": 72350,
            "endTime": 72620,
            "data": "em"
          },
          {
            "startTime": 72620,
            "endTime": 72620,
            "data": "đi"
          },
          {
            "startTime": 72620,
            "endTime": 72890,
            "data": "về"
          },
          {
            "startTime": 72890,
            "endTime": 72890,
            "data": "nhà"
          },
          {
            "startTime": 72890,
            "endTime": 75890,
            "data": "thôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 76590,
            "endTime": 76850,
            "data": "Ơi"
          },
          {
            "startTime": 76850,
            "endTime": 77110,
            "data": "Noọng"
          },
          {
            "startTime": 77110,
            "endTime": 79250,
            "data": "ơi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 79250,
            "endTime": 79510,
            "data": "Thương"
          },
          {
            "startTime": 79510,
            "endTime": 79510,
            "data": "em"
          },
          {
            "startTime": 79510,
            "endTime": 79770,
            "data": "mấy"
          },
          {
            "startTime": 79770,
            "endTime": 80580,
            "data": "núi"
          },
          {
            "startTime": 80580,
            "endTime": 80850,
            "data": "cũng"
          },
          {
            "startTime": 80850,
            "endTime": 82170,
            "data": "trèo"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 82170,
            "endTime": 82430,
            "data": "Mấy"
          },
          {
            "startTime": 82430,
            "endTime": 82700,
            "data": "sông"
          },
          {
            "startTime": 82700,
            "endTime": 83230,
            "data": "cũng"
          },
          {
            "startTime": 83230,
            "endTime": 83490,
            "data": "lội"
          },
          {
            "startTime": 83490,
            "endTime": 83750,
            "data": "mấy"
          },
          {
            "startTime": 83750,
            "endTime": 84030,
            "data": "đèo"
          },
          {
            "startTime": 84030,
            "endTime": 84820,
            "data": "cũng"
          },
          {
            "startTime": 84820,
            "endTime": 86360,
            "data": "qua"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 86360,
            "endTime": 86630,
            "data": "Nhà"
          },
          {
            "startTime": 86630,
            "endTime": 87420,
            "data": "em"
          },
          {
            "startTime": 87420,
            "endTime": 87680,
            "data": "ở"
          },
          {
            "startTime": 87680,
            "endTime": 88230,
            "data": "ngay"
          },
          {
            "startTime": 88230,
            "endTime": 88760,
            "data": "lưng"
          },
          {
            "startTime": 88760,
            "endTime": 90410,
            "data": "đồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 90410,
            "endTime": 90660,
            "data": "Nếu"
          },
          {
            "startTime": 90660,
            "endTime": 90940,
            "data": "như"
          },
          {
            "startTime": 90940,
            "endTime": 91210,
            "data": "có"
          },
          {
            "startTime": 91210,
            "endTime": 92260,
            "data": "dịp"
          },
          {
            "startTime": 92260,
            "endTime": 92790,
            "data": "mời"
          },
          {
            "startTime": 92790,
            "endTime": 94400,
            "data": "chàng"
          },
          {
            "startTime": 94400,
            "endTime": 95460,
            "data": "tới"
          },
          {
            "startTime": 95460,
            "endTime": 95460,
            "data": "chơi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 95410,
            "endTime": 95670,
            "data": "Tại"
          },
          {
            "startTime": 95670,
            "endTime": 95670,
            "data": "vì"
          },
          {
            "startTime": 95670,
            "endTime": 95930,
            "data": "thích"
          },
          {
            "startTime": 95930,
            "endTime": 95930,
            "data": "em"
          },
          {
            "startTime": 95930,
            "endTime": 96190,
            "data": "nhiều"
          },
          {
            "startTime": 96190,
            "endTime": 96190,
            "data": "quá"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 96190,
            "endTime": 96450,
            "data": "Nhưng"
          },
          {
            "startTime": 96450,
            "endTime": 96450,
            "data": "em"
          },
          {
            "startTime": 96450,
            "endTime": 96750,
            "data": "lại"
          },
          {
            "startTime": 96750,
            "endTime": 97010,
            "data": "nói"
          },
          {
            "startTime": 97010,
            "endTime": 97010,
            "data": "là"
          },
          {
            "startTime": 97010,
            "endTime": 97280,
            "data": "à"
          },
          {
            "startTime": 97280,
            "endTime": 97800,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 97800,
            "endTime": 97800,
            "data": "Cũng"
          },
          {
            "startTime": 97800,
            "endTime": 98070,
            "data": "định"
          },
          {
            "startTime": 98070,
            "endTime": 98330,
            "data": "solo"
          },
          {
            "startTime": 98330,
            "endTime": 98330,
            "data": "Hip"
          },
          {
            "startTime": 98330,
            "endTime": 98600,
            "data": "Hop"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 98600,
            "endTime": 98880,
            "data": "Cùng"
          },
          {
            "startTime": 98880,
            "endTime": 98880,
            "data": "với"
          },
          {
            "startTime": 98880,
            "endTime": 99130,
            "data": "trai"
          },
          {
            "startTime": 99130,
            "endTime": 99400,
            "data": "bản"
          },
          {
            "startTime": 99400,
            "endTime": 99400,
            "data": "nhưng"
          },
          {
            "startTime": 99400,
            "endTime": 99660,
            "data": "mà"
          },
          {
            "startTime": 99660,
            "endTime": 100190,
            "data": "thôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 100190,
            "endTime": 100470,
            "data": "Anh"
          },
          {
            "startTime": 100470,
            "endTime": 100730,
            "data": "gửi"
          },
          {
            "startTime": 100730,
            "endTime": 100730,
            "data": "vào"
          },
          {
            "startTime": 100730,
            "endTime": 100990,
            "data": "trong"
          },
          {
            "startTime": 100990,
            "endTime": 101260,
            "data": "câu"
          },
          {
            "startTime": 101260,
            "endTime": 101260,
            "data": "rap"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 101260,
            "endTime": 101540,
            "data": "Cho"
          },
          {
            "startTime": 101540,
            "endTime": 101810,
            "data": "em"
          },
          {
            "startTime": 101810,
            "endTime": 101810,
            "data": "dính"
          },
          {
            "startTime": 101810,
            "endTime": 102070,
            "data": "cả"
          },
          {
            "startTime": 102070,
            "endTime": 102340,
            "data": "thính"
          },
          {
            "startTime": 102340,
            "endTime": 102340,
            "data": "cả"
          },
          {
            "startTime": 102340,
            "endTime": 102860,
            "data": "mồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 102860,
            "endTime": 103130,
            "data": "Nhà"
          },
          {
            "startTime": 103130,
            "endTime": 103130,
            "data": "em"
          },
          {
            "startTime": 103130,
            "endTime": 103410,
            "data": "có"
          },
          {
            "startTime": 103410,
            "endTime": 103670,
            "data": "tới"
          },
          {
            "startTime": 103670,
            "endTime": 103670,
            "data": "mấy"
          },
          {
            "startTime": 103670,
            "endTime": 103940,
            "data": "quả"
          },
          {
            "startTime": 103940,
            "endTime": 104200,
            "data": "đồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 104200,
            "endTime": 104200,
            "data": "Ừ"
          },
          {
            "startTime": 104200,
            "endTime": 104450,
            "data": "thì"
          },
          {
            "startTime": 104450,
            "endTime": 104730,
            "data": "anh"
          },
          {
            "startTime": 104730,
            "endTime": 104730,
            "data": "cũng"
          },
          {
            "startTime": 104730,
            "endTime": 105010,
            "data": "tính"
          },
          {
            "startTime": 105010,
            "endTime": 105010,
            "data": "cả"
          },
          {
            "startTime": 105010,
            "endTime": 105520,
            "data": "rồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 105520,
            "endTime": 105790,
            "data": "Tại"
          },
          {
            "startTime": 105790,
            "endTime": 105790,
            "data": "vì"
          },
          {
            "startTime": 105790,
            "endTime": 106050,
            "data": "thích"
          },
          {
            "startTime": 106050,
            "endTime": 106320,
            "data": "em"
          },
          {
            "startTime": 106320,
            "endTime": 106320,
            "data": "nhiều"
          },
          {
            "startTime": 106320,
            "endTime": 106610,
            "data": "quá"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 106610,
            "endTime": 106880,
            "data": "Nhưng"
          },
          {
            "startTime": 106880,
            "endTime": 106880,
            "data": "em"
          },
          {
            "startTime": 106880,
            "endTime": 107140,
            "data": "lại"
          },
          {
            "startTime": 107140,
            "endTime": 107400,
            "data": "nói"
          },
          {
            "startTime": 107400,
            "endTime": 107400,
            "data": "là"
          },
          {
            "startTime": 107400,
            "endTime": 107670,
            "data": "à"
          },
          {
            "startTime": 107670,
            "endTime": 108190,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 108190,
            "endTime": 108190,
            "data": "Cũng"
          },
          {
            "startTime": 108190,
            "endTime": 108480,
            "data": "định"
          },
          {
            "startTime": 108480,
            "endTime": 108750,
            "data": "solo"
          },
          {
            "startTime": 108750,
            "endTime": 109010,
            "data": "Hip"
          },
          {
            "startTime": 109010,
            "endTime": 109270,
            "data": "Hop"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 109270,
            "endTime": 109540,
            "data": "Cùng"
          },
          {
            "startTime": 109540,
            "endTime": 109540,
            "data": "với"
          },
          {
            "startTime": 109540,
            "endTime": 109800,
            "data": "trai"
          },
          {
            "startTime": 109800,
            "endTime": 110080,
            "data": "bản"
          },
          {
            "startTime": 110080,
            "endTime": 110080,
            "data": "nhưng"
          },
          {
            "startTime": 110080,
            "endTime": 110340,
            "data": "mà"
          },
          {
            "startTime": 110340,
            "endTime": 110870,
            "data": "thôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 110870,
            "endTime": 111140,
            "data": "Anh"
          },
          {
            "startTime": 111140,
            "endTime": 111400,
            "data": "gửi"
          },
          {
            "startTime": 111400,
            "endTime": 111400,
            "data": "vào"
          },
          {
            "startTime": 111400,
            "endTime": 111650,
            "data": "trong"
          },
          {
            "startTime": 111650,
            "endTime": 111940,
            "data": "câu"
          },
          {
            "startTime": 111940,
            "endTime": 111940,
            "data": "rap"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 111940,
            "endTime": 112190,
            "data": "Cho"
          },
          {
            "startTime": 112190,
            "endTime": 112460,
            "data": "em"
          },
          {
            "startTime": 112460,
            "endTime": 112460,
            "data": "dính"
          },
          {
            "startTime": 112460,
            "endTime": 112720,
            "data": "cả"
          },
          {
            "startTime": 112720,
            "endTime": 112990,
            "data": "thính"
          },
          {
            "startTime": 112990,
            "endTime": 112990,
            "data": "cả"
          },
          {
            "startTime": 112990,
            "endTime": 113530,
            "data": "mồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 113530,
            "endTime": 113530,
            "data": "Nhà"
          },
          {
            "startTime": 113530,
            "endTime": 113800,
            "data": "em"
          },
          {
            "startTime": 113800,
            "endTime": 113800,
            "data": "có"
          },
          {
            "startTime": 113800,
            "endTime": 114050,
            "data": "tới"
          },
          {
            "startTime": 114050,
            "endTime": 114320,
            "data": "mấy"
          },
          {
            "startTime": 114320,
            "endTime": 114320,
            "data": "quả"
          },
          {
            "startTime": 114320,
            "endTime": 114600,
            "data": "đồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 114600,
            "endTime": 114850,
            "data": "Ừ"
          },
          {
            "startTime": 114850,
            "endTime": 114850,
            "data": "thì"
          },
          {
            "startTime": 114850,
            "endTime": 115120,
            "data": "anh"
          },
          {
            "startTime": 115120,
            "endTime": 115390,
            "data": "cũng"
          },
          {
            "startTime": 115390,
            "endTime": 115390,
            "data": "tính"
          },
          {
            "startTime": 115390,
            "endTime": 115650,
            "data": "cả"
          },
          {
            "startTime": 115650,
            "endTime": 116140,
            "data": "rồi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 116140,
            "endTime": 116660,
            "data": "À"
          },
          {
            "startTime": 116660,
            "endTime": 119660,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 128100,
            "endTime": 128100,
            "data": "Một"
          },
          {
            "startTime": 128100,
            "endTime": 128360,
            "data": "hai"
          },
          {
            "startTime": 128360,
            "endTime": 128620,
            "data": "ba"
          },
          {
            "startTime": 128620,
            "endTime": 128890,
            "data": "yeh"
          },
          {
            "startTime": 128890,
            "endTime": 129150,
            "data": "nơng"
          },
          {
            "startTime": 129150,
            "endTime": 129420,
            "data": "thoong"
          },
          {
            "startTime": 129420,
            "endTime": 130230,
            "data": "tham"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 130230,
            "endTime": 130500,
            "data": "Đây"
          },
          {
            "startTime": 130500,
            "endTime": 130780,
            "data": "là"
          },
          {
            "startTime": 130780,
            "endTime": 130780,
            "data": "người"
          },
          {
            "startTime": 130780,
            "endTime": 131040,
            "data": "miền"
          },
          {
            "startTime": 131040,
            "endTime": 131310,
            "data": "núi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 131310,
            "endTime": 131580,
            "data": "Phía"
          },
          {
            "startTime": 131580,
            "endTime": 131840,
            "data": "Bắc"
          },
          {
            "startTime": 131840,
            "endTime": 132100,
            "data": "Việt"
          },
          {
            "startTime": 132100,
            "endTime": 133280,
            "data": "Nam"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 133280,
            "endTime": 133550,
            "data": "Hiên"
          },
          {
            "startTime": 133550,
            "endTime": 134070,
            "data": "ngang"
          },
          {
            "startTime": 134070,
            "endTime": 134340,
            "data": "không"
          },
          {
            "startTime": 134340,
            "endTime": 134620,
            "data": "thích"
          },
          {
            "startTime": 134620,
            "endTime": 134880,
            "data": "luồn"
          },
          {
            "startTime": 134880,
            "endTime": 136140,
            "data": "cúi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 136140,
            "endTime": 136930,
            "data": "Flexing"
          },
          {
            "startTime": 136930,
            "endTime": 137200,
            "data": "theo"
          },
          {
            "startTime": 137200,
            "endTime": 137460,
            "data": "kiểu"
          },
          {
            "startTime": 137460,
            "endTime": 137460,
            "data": "miền"
          },
          {
            "startTime": 137460,
            "endTime": 138530,
            "data": "núi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 138530,
            "endTime": 138790,
            "data": "Ta"
          },
          {
            "startTime": 138790,
            "endTime": 138790,
            "data": "chơi"
          },
          {
            "startTime": 138790,
            "endTime": 139060,
            "data": "nhạc"
          },
          {
            "startTime": 139060,
            "endTime": 139330,
            "data": "trap"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 139330,
            "endTime": 139590,
            "data": "Hip"
          },
          {
            "startTime": 139590,
            "endTime": 140120,
            "data": "Hop"
          },
          {
            "startTime": 140120,
            "endTime": 140120,
            "data": "trên"
          },
          {
            "startTime": 140120,
            "endTime": 140390,
            "data": "bản"
          },
          {
            "startTime": 140390,
            "endTime": 140920,
            "data": "làng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 140920,
            "endTime": 141190,
            "data": "Bản"
          },
          {
            "startTime": 141190,
            "endTime": 141460,
            "data": "này"
          },
          {
            "startTime": 141460,
            "endTime": 141460,
            "data": "là"
          },
          {
            "startTime": 141460,
            "endTime": 141720,
            "data": "bản"
          },
          {
            "startTime": 141720,
            "endTime": 141980,
            "data": "chất"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 141980,
            "endTime": 142250,
            "data": "Biến"
          },
          {
            "startTime": 142250,
            "endTime": 142510,
            "data": "từ"
          },
          {
            "startTime": 142510,
            "endTime": 142770,
            "data": "đất"
          },
          {
            "startTime": 142770,
            "endTime": 142770,
            "data": "thành"
          },
          {
            "startTime": 142770,
            "endTime": 143040,
            "data": "bản"
          },
          {
            "startTime": 143040,
            "endTime": 143840,
            "data": "vàng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 143840,
            "endTime": 143840,
            "data": "Từ"
          },
          {
            "startTime": 143840,
            "endTime": 144100,
            "data": "những"
          },
          {
            "startTime": 144100,
            "endTime": 144380,
            "data": "ngày"
          },
          {
            "startTime": 144380,
            "endTime": 144380,
            "data": "khó"
          },
          {
            "startTime": 144380,
            "endTime": 144640,
            "data": "khăn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 144640,
            "endTime": 144910,
            "data": "Các"
          },
          {
            "startTime": 144910,
            "endTime": 145170,
            "data": "dân"
          },
          {
            "startTime": 145170,
            "endTime": 145170,
            "data": "tộc"
          },
          {
            "startTime": 145170,
            "endTime": 145430,
            "data": "còn"
          },
          {
            "startTime": 145430,
            "endTime": 145700,
            "data": "tản"
          },
          {
            "startTime": 145700,
            "endTime": 146230,
            "data": "mạn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 146230,
            "endTime": 146230,
            "data": "Đến"
          },
          {
            "startTime": 146230,
            "endTime": 146500,
            "data": "ngày"
          },
          {
            "startTime": 146500,
            "endTime": 146760,
            "data": "chung"
          },
          {
            "startTime": 146760,
            "endTime": 146760,
            "data": "tay"
          },
          {
            "startTime": 146760,
            "endTime": 147020,
            "data": "cùng"
          },
          {
            "startTime": 147020,
            "endTime": 147020,
            "data": "làm"
          },
          {
            "startTime": 147020,
            "endTime": 147300,
            "data": "kinh"
          },
          {
            "startTime": 147300,
            "endTime": 147570,
            "data": "tế"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 147570,
            "endTime": 147570,
            "data": "Tiền"
          },
          {
            "startTime": 147570,
            "endTime": 147830,
            "data": "chất"
          },
          {
            "startTime": 147830,
            "endTime": 148090,
            "data": "đống"
          },
          {
            "startTime": 148090,
            "endTime": 148090,
            "data": "như"
          },
          {
            "startTime": 148090,
            "endTime": 148350,
            "data": "tải"
          },
          {
            "startTime": 148350,
            "endTime": 148890,
            "data": "hàng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 148890,
            "endTime": 149170,
            "data": "Bàn"
          },
          {
            "startTime": 149170,
            "endTime": 149430,
            "data": "tay"
          },
          {
            "startTime": 149430,
            "endTime": 149680,
            "data": "trắng"
          },
          {
            "startTime": 149680,
            "endTime": 150230,
            "data": "từ"
          },
          {
            "startTime": 150230,
            "endTime": 150230,
            "data": "bàn"
          },
          {
            "startTime": 150230,
            "endTime": 150500,
            "data": "tay"
          },
          {
            "startTime": 150500,
            "endTime": 151040,
            "data": "trắng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 151040,
            "endTime": 151040,
            "data": "Cần"
          },
          {
            "startTime": 151040,
            "endTime": 151300,
            "data": "cù"
          },
          {
            "startTime": 151300,
            "endTime": 151560,
            "data": "chịu"
          },
          {
            "startTime": 151560,
            "endTime": 151560,
            "data": "khó"
          },
          {
            "startTime": 151560,
            "endTime": 151830,
            "data": "không"
          },
          {
            "startTime": 151830,
            "endTime": 151830,
            "data": "nhờ"
          },
          {
            "startTime": 151830,
            "endTime": 152090,
            "data": "may"
          },
          {
            "startTime": 152090,
            "endTime": 152620,
            "data": "mắn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 152620,
            "endTime": 152620,
            "data": "Không"
          },
          {
            "startTime": 152620,
            "endTime": 152900,
            "data": "nhờ"
          },
          {
            "startTime": 152900,
            "endTime": 153160,
            "data": "may"
          },
          {
            "startTime": 153160,
            "endTime": 153420,
            "data": "mắn"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 153420,
            "endTime": 153690,
            "data": "Trải"
          },
          {
            "startTime": 153690,
            "endTime": 153690,
            "data": "qua"
          },
          {
            "startTime": 153690,
            "endTime": 153950,
            "data": "khó"
          },
          {
            "startTime": 153950,
            "endTime": 153950,
            "data": "khăn"
          },
          {
            "startTime": 153950,
            "endTime": 154220,
            "data": "một"
          },
          {
            "startTime": 154220,
            "endTime": 154220,
            "data": "mưa"
          },
          {
            "startTime": 154220,
            "endTime": 154500,
            "data": "hai"
          },
          {
            "startTime": 154500,
            "endTime": 155040,
            "data": "nắng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 155040,
            "endTime": 155310,
            "data": "Một"
          },
          {
            "startTime": 155310,
            "endTime": 155570,
            "data": "mưa"
          },
          {
            "startTime": 155570,
            "endTime": 155570,
            "data": "hai"
          },
          {
            "startTime": 155570,
            "endTime": 156100,
            "data": "nắng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 156100,
            "endTime": 156360,
            "data": "Người"
          },
          {
            "startTime": 156360,
            "endTime": 156360,
            "data": "biết"
          },
          {
            "startTime": 156360,
            "endTime": 156610,
            "data": "khiêm"
          },
          {
            "startTime": 156610,
            "endTime": 156890,
            "data": "tốn"
          },
          {
            "startTime": 156890,
            "endTime": 156890,
            "data": "là"
          },
          {
            "startTime": 156890,
            "endTime": 157160,
            "data": "người"
          },
          {
            "startTime": 157160,
            "endTime": 157160,
            "data": "hay"
          },
          {
            "startTime": 157160,
            "endTime": 159660,
            "data": "thắng"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 159660,
            "endTime": 159940,
            "data": "À"
          },
          {
            "startTime": 159940,
            "endTime": 160730,
            "data": "lôi"
          },
          {
            "startTime": 160730,
            "endTime": 161010,
            "data": "à"
          },
          {
            "startTime": 161010,
            "endTime": 161790,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 161790,
            "endTime": 161790,
            "data": "Người"
          },
          {
            "startTime": 161790,
            "endTime": 162050,
            "data": "miền"
          },
          {
            "startTime": 162050,
            "endTime": 162050,
            "data": "núi"
          },
          {
            "startTime": 162050,
            "endTime": 162430,
            "data": "chất"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 162430,
            "endTime": 162690,
            "data": "Nói"
          },
          {
            "startTime": 162690,
            "endTime": 162960,
            "data": "à"
          },
          {
            "startTime": 162960,
            "endTime": 163230,
            "data": "lôi"
          },
          {
            "startTime": 163230,
            "endTime": 163500,
            "data": "à"
          },
          {
            "startTime": 163500,
            "endTime": 164250,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 164250,
            "endTime": 164510,
            "data": "Hiền"
          },
          {
            "startTime": 164510,
            "endTime": 164770,
            "data": "lành"
          },
          {
            "startTime": 164770,
            "endTime": 164770,
            "data": "nhưng"
          },
          {
            "startTime": 164770,
            "endTime": 165030,
            "data": "chiến"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 165030,
            "endTime": 165310,
            "data": "Như"
          },
          {
            "startTime": 165310,
            "endTime": 165310,
            "data": "gà"
          },
          {
            "startTime": 165310,
            "endTime": 165830,
            "data": "chọi"
          },
          {
            "startTime": 165830,
            "endTime": 166110,
            "data": "gà"
          },
          {
            "startTime": 166110,
            "endTime": 166830,
            "data": "chọi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 166830,
            "endTime": 167090,
            "data": "Ở"
          },
          {
            "startTime": 167090,
            "endTime": 167090,
            "data": "đây"
          },
          {
            "startTime": 167090,
            "endTime": 167360,
            "data": "hay"
          },
          {
            "startTime": 167360,
            "endTime": 167360,
            "data": "nói"
          },
          {
            "startTime": 167360,
            "endTime": 167620,
            "data": "là"
          },
          {
            "startTime": 167620,
            "endTime": 167890,
            "data": "à"
          },
          {
            "startTime": 167890,
            "endTime": 168170,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 168170,
            "endTime": 168170,
            "data": "Mọi"
          },
          {
            "startTime": 168170,
            "endTime": 168420,
            "data": "người"
          },
          {
            "startTime": 168420,
            "endTime": 168690,
            "data": "thường"
          },
          {
            "startTime": 168690,
            "endTime": 168690,
            "data": "nói"
          },
          {
            "startTime": 168690,
            "endTime": 168960,
            "data": "là"
          },
          {
            "startTime": 168960,
            "endTime": 168960,
            "data": "à"
          },
          {
            "startTime": 168960,
            "endTime": 170520,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 170520,
            "endTime": 170790,
            "data": "À"
          },
          {
            "startTime": 170790,
            "endTime": 171320,
            "data": "lôi"
          },
          {
            "startTime": 171320,
            "endTime": 171590,
            "data": "à"
          },
          {
            "startTime": 171590,
            "endTime": 172120,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 172120,
            "endTime": 172380,
            "data": "Người"
          },
          {
            "startTime": 172380,
            "endTime": 172650,
            "data": "miền"
          },
          {
            "startTime": 172650,
            "endTime": 172650,
            "data": "núi"
          },
          {
            "startTime": 172650,
            "endTime": 172900,
            "data": "chất"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 172900,
            "endTime": 173170,
            "data": "Nói"
          },
          {
            "startTime": 173170,
            "endTime": 173170,
            "data": "à"
          },
          {
            "startTime": 173170,
            "endTime": 173970,
            "data": "lôi"
          },
          {
            "startTime": 173970,
            "endTime": 173970,
            "data": "à"
          },
          {
            "startTime": 173970,
            "endTime": 174790,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 174790,
            "endTime": 175050,
            "data": "Hiền"
          },
          {
            "startTime": 175050,
            "endTime": 175320,
            "data": "lành"
          },
          {
            "startTime": 175320,
            "endTime": 175320,
            "data": "nhưng"
          },
          {
            "startTime": 175320,
            "endTime": 175580,
            "data": "chiến"
          },
          {
            "startTime": 175580,
            "endTime": 175580,
            "data": "như"
          },
          {
            "startTime": 175580,
            "endTime": 175850,
            "data": "gà"
          },
          {
            "startTime": 175850,
            "endTime": 177570,
            "data": "chọi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 177570,
            "endTime": 177820,
            "data": "Ở"
          },
          {
            "startTime": 177820,
            "endTime": 178080,
            "data": "đây"
          },
          {
            "startTime": 178080,
            "endTime": 178080,
            "data": "hay"
          },
          {
            "startTime": 178080,
            "endTime": 178350,
            "data": "nói"
          },
          {
            "startTime": 178350,
            "endTime": 178350,
            "data": "là"
          },
          {
            "startTime": 178350,
            "endTime": 178610,
            "data": "à"
          },
          {
            "startTime": 178610,
            "endTime": 178840,
            "data": "lôi"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 178840,
            "endTime": 178840,
            "data": "Mọi"
          },
          {
            "startTime": 178840,
            "endTime": 179100,
            "data": "người"
          },
          {
            "startTime": 179100,
            "endTime": 179100,
            "data": "thường"
          },
          {
            "startTime": 179100,
            "endTime": 179360,
            "data": "nói"
          }
        ]
      },
      {
        "words": [
          {
            "startTime": 179360,
            "endTime": 179360,
            "data": "Là"
          },
          {
            "startTime": 179360,
            "endTime": 179630,
            "data": "à"
          },
          {
            "startTime": 179630,
            "endTime": 180690,
            "data": "lôi"
          },
          {
            "startTime": 180690,
            "endTime": 180950,
            "data": "à"
          },
          {
            "startTime": 180950,
            "endTime": 181950,
            "data": "lôi"
          }
        ]
      }
    ],
    "file": "https://static-zmp3.zmdcdn.me/lyrics/1/0/b/c/10bc422578d37a1fa7f7506584f88e2b.lrc",
    "enabledVideoBG": true,
    "defaultIBGUrls": [
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/b/6/d/2b6d42c84a31bdf884ba2400a993ec44.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/6/5/9/3659c15496eccc463d55660ad1fc0a4a.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/0/b/8/30b8a653a0416eba61f08a92e6f994cc.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/9/e/e/29ee66c582128a583d38cfc7a6ef37bd.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/b/1/7/cb17ce4585b0a65377787b06006744d7.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/3/c/2/43c23c9ef853539504cf96a70aecf231.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/6/6/4/f664360fa6303d2ccf31d773821e1bb4.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/0/0/9/a0091e927022e64f5b3352eb03007d10.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/c/9/7/3c97a9e39977ec349309f230ec0042ed.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/c/d/2/3cd27fa7e14f206234c0366e6ca0f076.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/9/2/d/1/92d1d10e51f52480ff524b1d368141ea.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/8/b/a/18ba461bddaa78421ffafa0b11a2afc6.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/8/3/c/e83c1224eec3ab7e09d42a439943fe30.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/3/f/8/e3f8293e94fb9817a6e0425bd5a097c1.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/4/0/5/040563d78ea9153bfc6278abda9631c5.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/7/5/2/6/752633adadc9df0b71ac57290c5e7f3c.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/b/8/6/1b86f887c0258258de826d4e35d4889f.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/b/d/4/cbd489c9790e544cf8995abcb5eb44e5.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/0/2/3/c023c6f3c26008662a1bd7c11b6530e2.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/4/a/2/f4a2a0dd740498451c427fec611e6edf.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/f/d/d/bfdd6a9aca52b4a4b745a80a292caeaf.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/e/c/e/5ece70b2dc27ee42180e9144e7697d39.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/9/6/6/3966a6edfb9810d50617ed59a1d7ea9f.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/8/d/b/a8dbf25d04e3a0f4df24f568ccebae2c.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/7/4/8/d/748da7bbaf9c31b24bf3be9995cbb979.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/0/7/7/f077e99b212e3b9a2afa16f479f680c2.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/5/5/2/2552084b67f1fc9496763b0e2a367b7a.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/3/e/8/33e8a476aee500a846d3b86868e80b05.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/e/8/f/8e8fd5d34183107f5be3025d9320121c.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/6/3/9/8639b3b6bd0c0e286175dd8519952d43.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/b/4/5/db45316e6d6789b72ab2e55570be19b7.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/7/1/9/4/719488ac45e5d18e8985f6cd5ee3fe52.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/d/e/a/cdeabb747cfd947916d1f14482372fe8.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/7/8/f/6/78f6cf444ef070a38924351b1a70a89b.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/c/a/b/acab3cf9839e05ab2eb0719a329fcd5e.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/c/f/00cf8bd1fe53f225bb8f493441126e6f.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/d/b/1/cdb11a946962f59be1aea9f688117d51.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/1/9/0/8190df4138926efe9247bf060ea96169.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/7/d/8/e/7d8ec16dd557a7c5130ad4f651b39fce.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/0/d/2/c0d2f71e5fcd6e4c6efc59a61c0c6654.jpg"
    ],
    "BGMode": 0
  },
  "timestamp": 1695006613896
}`;

var lyric = JSON.parse(lyric);
const karaokeBtn = document.querySelector(".karaoke-btn button");
const karaoke = document.querySelector(".karaoke");
const closeBtn = karaoke.querySelector(".close-btn");
const karaokeLyric = karaoke.querySelector(".karaoke-lyric");
const nameSong = karaokeLyric.querySelector(".name-song");
const firstLyric = karaokeLyric.querySelector(".first-lyric");
const secondLyric = karaokeLyric.querySelector(".second-lyric");

// Hiển thị và ẩn bảng lyric karaoke
karaokeBtn.addEventListener("click", function () {
  karaoke.classList.toggle("show");
});
closeBtn.addEventListener("click", function () {
  if (karaoke.classList.contains("show")) karaoke.classList.remove("show");
});

// Lấy ra mảng chứa các đoạn lyric trong bài hát
let sentences = lyric.data.sentences;

// Trước khi xử lý, cần ghép các từ trong một câu lại với nhau
// Lấy beginTime và endTime của câu đó
// Đưa cả 3 vào một object
// Đưa object đó vào một mảng mới là newSentences
let newSentences = [];
for (let i = 0; i < sentences.length; i++) {
  let wordArray = sentences[i].words;
  let string = "";
  for (let j = 0; j < wordArray.length; j++) {
    if (j === wordArray.length - 1) {
      string += wordArray[j].data;
      newSentences.push({
        sentence: string,
        beginTime: wordArray[0].startTime / 1000,
        endTime: wordArray[wordArray.length - 1].endTime / 1000,
      });
      break;
    }
    string += wordArray[j].data + " ";
  }
}

// Giờ chúng ta làm việc với mảng newSentences
// Giải phóng mảng sentences
// Bắt đầu phát nhạc (Sự kiện timeupdate)
// Kiểm tra thời gian nằm trong khoảng từ bắt đầu đến kết thúc thì hiển thị
sentences = [];
audio.addEventListener("timeupdate", function () {
  let runningTime = audio.currentTime;
  let tempArr = [];
  for (let i = 0; i < newSentences.length; i += 2) {
    if (newSentences[i + 1]) {
      if (
        audio.currentTime >= newSentences[i].beginTime &&
        audio.currentTime <= newSentences[i + 1].endTime
      )
        tempArr.push(newSentences[i].sentence, newSentences[i + 1].sentence);
    } else if (!newSentences[i + 1]) {
      if (
        audio.currentTime >= newSentences[i].beginTime &&
        audio.currentTime <= newSentences[i].endTime
      )
        tempArr.push(newSentences[i].sentence);
    }
  }

  if (tempArr.length > 0) {
    nameSong.innerHTML = ``;
    firstLyric.innerText = tempArr[0];
    if (tempArr[1]) secondLyric.innerText = tempArr[1];
    else secondLyric.innerText = "";
  } else {
    firstLyric.innerText = "";
    secondLyric.innerText = "";
    nameSong.innerHTML = ` <p> À Lôi - Double2T, Masew</p>`;
  }
});
console.log(newSentences);

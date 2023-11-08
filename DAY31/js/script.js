var timer = document.querySelector(".timer");
var counter = timer.querySelector(".counter");
var action = timer.querySelector(".action");
var btn = action.querySelector(".btn");
var count = 60;
var timer = 1000;
const interval = 1000;
btn.disabled = true;

var handleCountDown = function (currentTime) {
  if (timer <= currentTime) {
    count--;
    counter.innerText = count;
    timer = currentTime + interval;
  }
  if (count === 0) {
    btn.disabled = false;
    // btn.removeAttribute("disabled");
    return;
  } else {
    requestAnimationFrame(handleCountDown);
  }
};
handleCountDown();
btn.addEventListener("click", function () {
  window.location.href =
    "https://fullstack-nodejs.fullstack.edu.vn/?id=4278f92b-967f-42a5-aef7-161e2a59b37d";
});

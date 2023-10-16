import { client } from "./client.js";
// client.setUrl("https://lxwgm3-8080.csb.app");
// const getUsers = async () => {
//   const { data } = await client.get(`/quiz`);
//   console.log(data);
// };
// getUsers();

const startButton = document.querySelector(".quizizzGame__start--button");
var count = 5;
var timer = 1000;
const interval = 1000;

startButton.addEventListener("click", () => {
  handleCountDown();
});
const handleCountDown = function (currentTime) {
  if (timer <= currentTime) {
    count--;
    startButton.innerText = count;
    timer = currentTime + interval;
  }
  if (count === 0) {
    startButton.innerText = "GO!";
    return;
  } else {
    requestAnimationFrame(handleCountDown);
  }
};

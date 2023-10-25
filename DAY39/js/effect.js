export const AddPostSchedule = function () {
  const postBtn = document.querySelector("#post-option");
  postBtn.classList.add("btn-info");
  postBtn.classList.remove("btn-warning");
};

export const RemovePostSchedule = function () {
  const postBtn = document.querySelector("#post-option");
  postBtn.classList.remove("btn-info");
  postBtn.classList.add("btn-warning");
};
export const showLoading = () => {
  document.getElementById("loading").style.display = "block";
};
export const hideLoading = () => {
  document.getElementById("loading").style.display = "none";
};
export const changeTimeBlog = (check) => {
  let minutes = Math.floor((check / (1000 * 60)) % 60);
  let hours = Math.floor((check / (1000 * 60 * 60)) % 24);
  let days = Math.floor((check / (1000 * 60 * 60 * 24)) % 30);
  if (days > 0 && days < 31) {
    return `${days} ngày`;
  } else if (days == 0 && hours > 0) {
    return ` ${hours} giờ` + (minutes > 0 ? ` ${minutes} phút` : "");
  } else if (days == 0 && hours == 0 && minutes > 0) {
    return `${minutes} phút`;
  } else if (days == 0 && hours == 0 && minutes == 0) {
    return `vài giây`;
  } else {
    return false;
  }
};
export const changeTimeSchedule = (today, schedule) => {
  const remaining = schedule - today;
  let minutes = Math.floor((remaining / (1000 * 60)) % 60);
  let hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  let days = Math.floor((remaining / (1000 * 60 * 60 * 24)) % 30);
  let years = Math.floor((remaining / (1000 * 60 * 60 * 24 * 30)) % 365);

  return (
    (years > 0 ? `${years} năm ` : "") +
    (days > 0 ? `${days} ngày ` : "") +
    (hours > 0 ? `${hours} giờ ` : "") +
    (minutes > 0 ? `${minutes} phút ` : "")
  );
};

var list = document.querySelector(".list");
var topPic = ["Nhập môn lập trình web", "Ngôn ngữ HTML", "Ngôn ngữ CSS"];
var content = [
  {
    module: [
      "Nhập môn lập trình web - Phần 1",
      "Nhập môn lập trình web - Phần 2",
      "Nhập môn lập trình web - Phần 3",
      "Nhập môn lập trình web - Phần 4",
      "Nhập môn lập trình web - Phần 5",
      "Nhập môn lập trình web - Phần 6",
      "Nhập môn lập trình web - Phần 7",
      "Nhập môn lập trình web - Phần 8",
      "Nhập môn lập trình web - Phần 9",
      "Nhập môn lập trình web - Phần 10",
    ],
  },
  {
    module: [
      "Nhập môn lập trình web - Phần 11",
      "Nhập môn lập trình web - Phần 12",
      "Nhập môn lập trình web - Phần 13",
      "Nhập môn lập trình web - Phần 14",
      "Nhập môn lập trình web - Phần 15",
      "Nhập môn lập trình web - Phần 16",
      "Nhập môn lập trình web - Phần 17",
      "Nhập môn lập trình web - Phần 18",
      "Nhập môn lập trình web - Phần 19",
      "Nhập môn lập trình web - Phần 20",
    ],
  },
  {
    module: [
      "Nhập môn lập trình web - Phần 21",
      "Nhập môn lập trình web - Phần 22",
      "Nhập môn lập trình web - Phần 23",
      "Nhập môn lập trình web - Phần 24",
      "Nhập môn lập trình web - Phần 25",
      "Nhập môn lập trình web - Phần 26",
      "Nhập môn lập trình web - Phần 27",
      "Nhập môn lập trình web - Phần 28",
      "Nhập môn lập trình web - Phần 29",
      "Nhập môn lập trình web - Phần 30",
    ],
  },
];
var indexRenderLesson = 0;
const renderList = function () {
  topPic.forEach(function (topic, indexTopic) {
    var topPicContent = `<div class="active list-item"  draggable="true">
            Module: ${indexTopic + 1}:
            <span>${topic}</span>
          </div>`;
    list.insertAdjacentHTML("beforeend", topPicContent);
    content[indexTopic].module.forEach(function (child) {
      var childContent = `<div class="list-item" draggable="true">
            Bài: ${++indexRenderLesson}:
            <span>${child}</span>
          </div>`;
      list.insertAdjacentHTML("beforeend", childContent);
    });
  });
};
renderList();

var listItem = list.querySelectorAll(".list-item");
listItem.forEach(function (item) {
  item.addEventListener("dragstart", function () {
    item.classList.toggle("dragging");
  });
  item.addEventListener("dragend", function () {
    item.classList.toggle("dragging");
  });
});

list.addEventListener("dragover", function (e) {
  var itemDragging = document.querySelector(".list-item.dragging");
  var listNotDragging = document.querySelectorAll(".list-item:not(.dragging)");
  var nodeElementNext = Array.from(listNotDragging).find(function (
    itemNotDragging
  ) {
    return e.pageY <= itemNotDragging.offsetTop + itemDragging.offsetHeight / 2;
  });
  list.insertBefore(itemDragging, nodeElementNext);
});
list.addEventListener("dragend", function (e) {
  var topPicChange = document.querySelectorAll(".active.list-item");
  topPicChange.forEach(function (child, index) {
    var topPicChild = child.querySelector("span");
    child.innerHTML = `Module: ${++index}:
    <span>${topPicChild.innerText}</span>`;
  });

  var contentChange = document.querySelectorAll(".list-item:not(.active)");
  contentChange.forEach(function (child, index) {
    var contentChild = child.querySelector("span");
    child.innerHTML = `Bài: ${++index}:
    <span>${contentChild.innerText}</span>`;
  });
});

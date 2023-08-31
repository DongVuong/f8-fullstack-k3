var input = document.querySelector(".todo-input");
var form = document.querySelector(".write-tasks");
var todos = document.querySelector(".todos");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var value = input.value.trim();
  if (value) {
    addElement({
      text: value,
    });
  }
  input.value = "";
});
function addElement(content) {
  var li = document.createElement("li");
  li.innerHTML = `
    <span>${content.text}</span>
    <div class="icon">
      <i class="fa-regular fa-pen-to-square" id = "pen"></i>
      <i class="fa-solid fa-trash" id = "trash"></i>
    </div>
    `;
  //  hoan thanh cong viec
  li.querySelector("span").addEventListener("click", function () {
    this.parentElement.classList.toggle("completed");
  });

  //   xoa cong viec
  li.querySelector("#trash").addEventListener("click", function () {
    this.parentElement.parentElement.remove();
  });

  // edit
  li.querySelector("#pen").addEventListener("click", function () {
    // Ẩn task hiện tại
    this.parentElement.parentElement.style.display = "none";

    // Clone form đã khai báo
    var editForm = form.cloneNode(true);

    // Điều chỉnh giá trị của input
    var editInput = editForm.querySelector(".todo-input");
    editInput.value = content.text;

    // Lắng nghe sự kiện submit cho form sửa
    editForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var newValue = editInput.value.trim();
      if (newValue) {
        content.text = newValue;
        li.querySelector("span").textContent = newValue;

        // Ẩn form và hiển thị lại task
        editForm.style.display = "none";
        li.style.display = "";
      }
    });

    // Thêm form sửa vào trước phần tử li hiện tại
    li.parentElement.insertBefore(editForm, li);
  });

  todos.appendChild(li);
}

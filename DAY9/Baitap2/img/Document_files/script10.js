//event.object

//event.target la gi?

var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
btn.addEventListener("click", function (e) {
  //   console.log(this);
  //   console.log(e.target);
  content.innerHTML = `<button class ="remove">Xoa</button>`;
});
content.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove")) {
    e.target.remove();
  }
});

//event.preventDefault();ngan hanh dong mac dinh cua the html
var link = document.querySelector(".link");
link.addEventListener("click", function (e) {
  e.preventDefault();
});

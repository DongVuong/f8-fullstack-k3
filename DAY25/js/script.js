var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
var nextBtn = carousel.querySelector(".next");
var prevBtn = carousel.querySelector(".prev");
var carouselDots = carousel.querySelector(".dots");
var index = 0;
var htmlDots = "";
//lay kick thuoc cua 1 item

var itemWidth = carouselInner.clientWidth; //lay chieu rong cua 1 element
// console.log(itemWidth);

// lay danh sach tat ca items

var items = carouselInner.children;

//tinh tong kich thuoc cua cac item

var totalWidth = items.length * itemWidth;
// console.log(totalWidth);

//cap nhat css cho carousel inner
carouselInner.style.width = `${totalWidth}px`;
var position = 0;

nextBtn.addEventListener("click", function () {
  if (Math.abs(position) < totalWidth - itemWidth) {
    position -= itemWidth;
    carouselInner.style.translate = `${position}px`;
    index++;
    console.log(index);
    moveDots();
  }
});

prevBtn.addEventListener("click", function () {
  if (Math.abs(position) > 0) {
    position += itemWidth;
    carouselInner.style.translate = `${position}px`;
    index--;
    console.log(index);
    moveDots();
  }
});
//dots
if (items.length) {
  Array.from(items).forEach(function (item, index) {
    htmlDots += `<span class="dot" data-index="${index}"></span>`;
    carouselDots.innerHTML = htmlDots;
  });
  carouselDots.firstChild.classList.add("active");
  var dots = carouselDots.querySelectorAll(".dot");
}

function moveDots() {
  dots.forEach(function (dot) {
    dot.classList.remove("active");
  });
  dots[index].classList.add("active");
}

dots.forEach(function (dot) {
  dot.addEventListener("click", function () {
    index = parseInt(this.getAttribute("data-index"));
    // console.log(index);
    position = -index * itemWidth;
    carouselInner.style.translate = `${position}px`;
    moveDots();
  });
});

//keo tha

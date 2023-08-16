var content =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

content = content.replaceAll(" ", "</span> <span>");

content = `<span>${content}</span>`;

console.log(content);

var index = 0;
setInterval(function () {
  var char = content.charAt(index);
  var charNext = content.charAt(index + 1);

  if (char === ">" && charNext !== " ") {
    var html =
      content.slice(0, index) + ` class="highlight"` + content.slice(index);
    document.body.innerHTML = html;
  }

  index++;

  if (index === content.length) {
    index = 0;
  }
}, 50);

document.write(content);

const $ = (tag) => document.querySelector(tag);
const saveContent = $(".content").innerText.trim();
let content = saveContent.split(" ");
let i = 0;
function resetContent() {
  $(".content").innerHTML = saveContent;
  i = 0;
  content = saveContent.split(" ");
}
function highlightNextWord() {
  if (i >= content.length) {
    resetContent();
  } else {
    for (let j = 0; j < i; j++) {
      content[j] = content[j]
        .replace('<span class="highlight">', "")
        .replace("</span>", "");
    }
    const span = document.createElement("span");
    span.className = "highlight";
    span.innerText = content[i];
    content[i] = span.outerHTML;
    $(".content").innerHTML = content.join(" ");
    i++;
  }
}
setInterval(highlightNextWord, 500);

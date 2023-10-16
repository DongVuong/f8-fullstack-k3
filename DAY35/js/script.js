import { client } from "./client.js";
client.setUrl("https://lxwgm3-8080.csb.app");
let isLoading = false;
const showLoading = () => {
  document.getElementById("loading").style.display = "block";
};
const hideLoading = () => {
  document.getElementById("loading").style.display = "none";
};
const createPostElement = (post) => {
  const postElement = document.createElement("article");
  postElement.classList.add(".post");
  postElement.innerHTML = `<h2>${post.title}</h2> <p>${post.content}</p>
  <div><img src="${post.image}" alt="image" /></div>`;
  return postElement;
};

const appendPost = (data) => {
  const postList = document.getElementById("post-list");
  data.forEach((post) => {
    const postElement = createPostElement(post);
    postList.appendChild(postElement);
  });
};

const fetchData = async () => {
  try {
    const { response, data } = await client.get(`/post`);
    if (!response.ok) {
      throw new Error("network Error");
    }
    if (data.length === 0) {
      throw new Error("data empty");
      return;
    }
    appendPost(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    hideLoading();
    isLoading = false;
  }
};
const fetchPosts = () => {
  if (isLoading) {
    return;
  }

  isLoading = true;
  showLoading();

  setTimeout(fetchData, 100);
};

fetchPosts();

window.onscroll = function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    fetchPosts();
  }
};

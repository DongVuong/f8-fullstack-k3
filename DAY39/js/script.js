import { client } from "./client.js";
import { requestRefresh } from "./token.js";
import { Default, register, login, renderLoginContent } from "./function.js";
import {
  youtube,
  telephone,
  email,
  linkWebHttps,
  linkWebNonHttps,
} from "./regex.js";
client.setUrl("https://api-auth-two.vercel.app");
let currentPage = 1;
let isFetching = false;
let hasMore = true;
let timeUp = null;
let remaining = null;
let waitingTime = null;
const AddPostSchedule = function () {
  const postBtn = document.querySelector("#post-option");
  postBtn.classList.add("btn-info");
  postBtn.classList.remove("btn-warning");
};
const RemovePostSchedule = function () {
  const postBtn = document.querySelector("#post-option");
  postBtn.classList.remove("btn-info");
  postBtn.classList.add("btn-warning");
};
const changeTimeBlog = (check) => {
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
const changeTimeSchedule = (today, schedule) => {
  remaining = schedule - today;
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
const showLoading = () => {
  document.getElementById("loading").style.display = "block";
};
const hideLoading = () => {
  document.getElementById("loading").style.display = "none";
};
const fetchData = async function () {
  showLoading();
  const list = document.querySelector(".block-list");
  isFetching = true;
  try {
    const { response, data: _data } = await client.get(
      `/blogs?page=${currentPage}`
    );
    currentPage++;
    const data = _data.data;
    const stripHtml = (html) => {
      html = html.split("\n");

      html = html.filter((element) => {
        if (element) {
          return true;
        }
        return false;
      });
      // console.log(html);
      html = html.map((element) => {
        element = element.split(" ");
        element = element.filter((elementChild) => {
          if (elementChild) {
            return true;
          }
          return false;
        });
        element = element.map((child) => {
          if (youtube.test(child)) {
            const url = child.replace(
              /(.*\/(watch\?v=)*)/,
              "https://www.youtube.com/embed/"
            );
            console.log(url);
            child = `<iframe
            width="560"
            height="315"
            src="${url}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>`;
            // child = `<iframe width="560" height="315" src="${child}" title="YouTube video player" value ="1"></iframe>`;
          } else {
            child = child.replace(
              telephone,
              `<a href="tel:$1" target="_blank" class="telephoneNumber">$1</a>`
            );
            child = child.replace(
              linkWebHttps,
              `<a href="$1" target="_blank" class="link">$1</a>`
            );
            child = child.replace(
              email,
              `<a href="mailto:$1" target="_blank" class="email">$1</a>`
            );
            child = child.replace(
              linkWebNonHttps,
              `<a href="https://$1" target="_blank" class="link">$1</a>`
            );
          }
          return child;
        });
        element = element.join(" ");
        return element;
      });
      html = html.join("</br>");
      return html;
    };
    isFetching = false;
    if (data === undefined) {
      hasMore = false;
      hideLoading();
      return;
    }
    for (let post of data) {
      const div = document.createElement("div");
      const separate = document.createElement("hr");
      const { createdAt } = post;
      const date = new Date(createdAt);
      const today = new Date();
      const check = today.getTime() - date.getTime();
      if (changeTimeBlog(check)) {
        timeUp = changeTimeBlog(check);
      } else {
        if (today.getMonth() - date.getMonth() < 12) {
          timeUp = `${today.getMonth() - date.getMonth()} tháng`;
        } else {
          timeUp = `${today.getFullYear() - date.getFullYear()} năm`;
        }
      }
      const dateString = `${date.getDate()} - ${
        date.getMonth() + 1
      } - ${date.getFullYear()}`;
      const HoursString = `${date.getHours()} giờ ${
        date.getMinutes() < 10
          ? "0" + date.getMinutes() + " phút"
          : date.getMinutes() + " phút"
      }`;
      div.innerHTML = `
      <div class="container">
          <div class="row">
          <div class="col-3">
          <div>${dateString}</div>
          <div>${HoursString}</div>
          </div>
          <div class = "col-9">
          <h2>
          <a class="profileLink" href="#!">${post.userId.name}</a></h2>
          <h4>${post.title}</h4>
          <p>${stripHtml(post.content)}</p>
          <p class="date">
          ${timeUp} trước</p>
          </div>
          </div>
          </div>`;
      list.appendChild(separate);
      list.appendChild(div);
    }
    hideLoading();
    window.addEventListener("scroll", () => {
      if (isFetching || !hasMore) {
        return;
      } else if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        fetchData();
      }
    });
  } catch (e) {
    console.log(e.message);
    hideLoading();
    return;
  }
};
const renderDefault = () => {
  root.innerHTML = Default();
  currentPage = 1;
  fetchData();
};
const renderRegister = () => {
  root.innerHTML = register();
  const login = document.querySelector(".login-button");
  login.addEventListener("click", function (e) {
    e.preventDefault;
    renderLogin();
    app.eventLogin();
  });
  const defaultButton = document.querySelector(".default");
  defaultButton.addEventListener("click", function (e) {
    e.preventDefault();
    app.render();
  });
};
const renderLogin = () => {
  root.innerHTML = login();
  const register = document.querySelector(".register-button");
  register.addEventListener("click", function (e) {
    e.preventDefault;
    renderRegister();
    app.eventRegister();
  });
  const defaultButton = document.querySelector(".default");
  defaultButton.addEventListener("click", function (e) {
    e.preventDefault();
    app.render();
  });
};
const app = {
  render: function () {
    const root = document.querySelector("#root");
    if (this.isLogin()) {
      root.innerHTML = renderLoginContent();
      currentPage = 1;
      fetchData();
      const profileName = document.querySelector(".profile .name");
      this.getProfile(profileName);
      this.eventLogout();
      this.eventPost();
    } else {
      renderDefault();
      const btn = root.querySelector("button");
      btn.addEventListener("click", function () {
        renderLogin();
        app.eventLogin();
      });
    }
  },
  isLogin: function () {
    if (localStorage.getItem("login_tokens")) {
      return true;
    }
    return false;
  },
  handleLogin: async function (data, msg) {
    msg.innerText = "";
    this.addLoading();
    const { data: tokens, response } = await client.post("/auth/login", data);
    this.removeLoading();
    if (!response.ok) {
      msg.innerText = `${tokens.message}`;
    } else {
      //neu thanh cong thi luu token vao storage
      //local storage: luu vinh vien
      //session storage: luu theo phien
      localStorage.setItem(`login_tokens`, JSON.stringify(tokens));
      this.render();
    }
  },
  handleRegister: async function (data, msg) {
    msg.innerText = "";
    this.addLoadingRegister();
    const { data: tokens, response } = await client.post(
      "/auth/register",
      data
    );
    this.removeLoadingRegister();
    if (!response.ok) {
      msg.innerText = `${tokens.message}`;
    } else {
      this.render();
    }
  },
  getToken: function () {
    let loginTokens = localStorage.getItem(`login_tokens`);
    loginTokens = JSON.parse(loginTokens);
    const { data: _data } = loginTokens;
    if (_data.accessToken === undefined) {
      const { token } = _data;
      const { accessToken, refreshToken } = token;
      return { accessToken, refreshToken };
    } else {
      const { accessToken, refreshToken } = _data;
      return { accessToken, refreshToken };
    }
  },
  getProfile: async function (el) {
    if (this.isLogin()) {
      const { accessToken, refreshToken } = this.getToken();
      client.setToken(accessToken);
      const { response, data } = await client.get("/users/profile");
      if (response.ok) {
        el.innerText = data.data.name;
      } else {
        const newToken = await requestRefresh(refreshToken);
        localStorage.removeItem("login_tokens");
        if (!newToken) {
          // xu ly logout
          this.handleLogout();
        } else {
          //cap nhat token moi vao local storage
          // console.log(newToken);
          localStorage.setItem(`login_tokens`, JSON.stringify(newToken));
        }
        this.render();
      }
    }
  },
  addLoading: function () {
    const form = document.querySelector(".login");
    const btn = form.querySelector(".btn");
    btn.innerHTML = `<span class="spinner-border spinner-border-sm"></span>Loading`;
    btn.disabled = true;
  },
  removeLoading: function () {
    const form = document.querySelector(".login");
    const btn = form.querySelector(".btn");
    btn.innerHTML = `Đăng nhập`;
    btn.disabled = false;
  },
  addLoadingRegister: function () {
    const form = document.querySelector(".register");
    const btn = form.querySelector(".btn");
    btn.innerHTML = `<span class="spinner-border spinner-border-sm"></span>Loading`;
    btn.disabled = true;
  },
  removeLoadingRegister: function () {
    const form = document.querySelector(".register");
    const btn = form.querySelector(".btn");
    btn.innerHTML = `Đăng kí`;
    btn.disabled = false;
  },
  addLoadingPost: function () {
    const form = document.querySelector(".post");
    const btn = form.querySelector(".btn");
    btn.innerHTML = `<span class="spinner-border spinner-border-sm"></span>Loading`;
    btn.disabled = true;
  },
  removeLoadingPost: function () {
    const form = document.querySelector(".post");
    const btn = form.querySelector(".btn");
    btn.innerHTML = `Đăng bài`;
    btn.disabled = false;
  },
  eventLogin: function () {
    const form = document.querySelector(".login");
    const msg = document.querySelector(".msg");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailEl = e.target.querySelector(".email");
      const passwordEl = e.target.querySelector(".password");
      const email = emailEl.value;
      const password = passwordEl.value;
      this.handleLogin({ email, password }, msg);
    });
  },
  eventRegister: function () {
    const form = document.querySelector(".register");
    const msg = document.querySelector(".msg");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameEl = e.target.querySelector(".name");
      const emailEl = e.target.querySelector(".email");
      const passwordEl = e.target.querySelector(".password");
      const name = nameEl.value;
      const email = emailEl.value;
      const password = passwordEl.value;
      // console.log({ name, email, password });
      this.handleRegister({ name, email, password }, msg);
    });
  },
  handleLogout: async function (data) {
    const { data: tokens, response } = await client.post("/auth/logout", data);
    localStorage.removeItem("login_tokens");
    // console.log(tokens);
    // console.log(response);
    this.render();
  },
  eventLogout: function () {
    const logout = document.querySelector(".profile .logout");
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      let loginTokens = localStorage.getItem(`login_tokens`);
      loginTokens = JSON.parse(loginTokens);
      const { data: _data } = loginTokens;
      const { accessToken, refreshToken } = _data;
      this.handleLogout({ accessToken, refreshToken });
    });
  },
  handlePost: async function (data, timePost, msg) {
    if (msg.classList.contains("text-success")) {
      msg.classList.add("text-danger");
      msg.classList.remove("text-success");
    }
    msg.innerText = "";
    app.addLoadingPost();
    if (timePost === "") {
      const { data: tokens, response } = await client.post("/blogs", data);
      if (!response.ok && response.status === 400) {
        msg.innerText = "Mời nhập tiêu đề và nội dung cần post";
        app.removeLoadingPost();
      } else if (!response.ok && response.status === 401) {
        msg.innerText = "refresh token";
        const { refreshToken } = this.getToken();
        const newToken = await requestRefresh(refreshToken);
        if (!newToken) {
          // xu ly logout
          this.handleLogout();
        } else {
          //cap nhat token moi vao local storage
          localStorage.setItem(`login_tokens`, JSON.stringify(newToken));
          const { accessToken } = this.getToken();
          client.setToken(accessToken);
          this.handlePost(data, timePost, msg);
          app.removeLoadingPost();
        }
      } else {
        msg.classList.remove("text-danger");
        msg.classList.add("text-success");
        msg.innerText = "Post bài thành công! Đang làm mới";
        setTimeout(() => {
          app.removeLoadingPost();
          app.render();
        }, 2000);
      }
    } else {
      const { refreshToken } = this.getToken();
      const newToken = await requestRefresh(refreshToken);
      if (!newToken) {
        // xu ly logout
        this.handleLogout();
      } else {
        //cap nhat token moi vao local storage
        localStorage.setItem(`login_tokens`, JSON.stringify(newToken));
        const { accessToken } = this.getToken();
        client.setToken(accessToken);
      }
      const { title, content } = data;
      const postBtn = document.querySelector("#post-option");
      if (!title || !content) {
        msg.innerText = "Mời nhập tiêu đề và nội dung cần post";
        app.removeLoadingPost();
        postBtn.innerText = `Đặt lịch`;
      } else {
        const today = new Date();
        const schedule = new Date(timePost);
        if (today > schedule) {
          msg.innerText =
            "Thời gian đã trôi qua, vui lòng chọn thời gian phù hợp";
          app.removeLoadingPost();
          postBtn.innerText = `Đặt lịch`;
        } else if (+today + 300000 > +schedule) {
          msg.innerText = "Đặt hẹn đăng bài trước tối thiểu 5 phút";
          app.removeLoadingPost();
          postBtn.innerText = `Đặt lịch`;
        } else {
          msg.classList.remove("text-danger");
          msg.classList.add("text-success");
          waitingTime = changeTimeSchedule(today, schedule);
          msg.innerText = `Bai viết sẽ được đăng sau ${waitingTime}`;
          setTimeout(() => {
            RemovePostSchedule();
            app.removeLoadingPost();
            app.render();
          }, 2000);
        }
      }
    }
  },
  eventPost: function () {
    const post = document.querySelector(".post");
    const titleEl = post.querySelector("#title");
    const contentEl = post.querySelector("#content");
    const timeEl = post.querySelector("#date");
    const postBtn = post.querySelector("#post-option");
    const msg = document.querySelector(".msgTwo");
    timeEl.addEventListener("change", function () {
      AddPostSchedule();
      postBtn.innerText = `Đặt lịch`;
      if (!timeEl.value == "") {
      } else {
        RemovePostSchedule();
        postBtn.innerText = `Đăng bài`;
        msg.innerText = "";
      }
    });
    post.addEventListener("submit", function (e) {
      e.preventDefault();
      const title = titleEl.value;
      const content = contentEl.value;
      const timePost = timeEl.value;
      app.handlePost({ title, content }, timePost, msg);
    });
  },
};

app.render();

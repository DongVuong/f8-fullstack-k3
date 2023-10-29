import Navigo from "navigo";
const rootElm = document.querySelector("#app");
// const Base = new Navigo("/");
const Base = new Navigo(
  "https://github.com/DongVuong/f8-fullstack-k3/tree/main/DAY40/Project01-vite-js"
);
window.navigate = (data) => Base.navigate(data);

export const router = (pathList = [], DefaultLayout) => {
  pathList.forEach(function ({ path, component }) {
    Base.on(path, function (data) {
      rootElm.innerHTML = DefaultLayout
        ? DefaultLayout(component(data))
        : component(data);
    });
  });

  Base.resolve();
};

const F8 = {
  component: function (name, options = { data: () => {}, template: "" }) {
    class Component extends HTMLElement {
      constructor() {
        super();
        this.state = options.data();
        this.nodeTexts = [];
        this.computedHTML = options.template;
        this.templateNode = document.createElement("template");
      }
      handleReRender(code) {}
    }
    customElements.define(name, Component);
  },
};

F8.component("counter-app", {
  data: () => ({
    count: 0,
    title: "Counter App",
  }),
  template: `
           <h1 >{{ title }}</h1>
           <h2 > Đã Đếm: {{ count }} lần</h2>
           <button v-on="click:decrement">-</button>
           <button v-on="click:increment">+</button>
           <button v-on="dblclick:changeTitle">Change title</button>
      `,
});

F8.component("header-component", {
  template: `<h1>HEADER</h1>`,
});

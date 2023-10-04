/**
 * @typedef {Object} ComponentOptions
 * @property {() => Object} data - Hàm trả về dữ liệu mặc định của component
 * @property {string} template - Chuỗi HTML template
 */

/**
 * Module F8 chứa phương thức create để tạo ra một custom element.
 * @namespace F8
 */
const F8 = {
  /**
   * Phương thức create tạo ra một custom element.
   * @param {string} componentName - Tên của component
   * @param {ComponentOptions} [options] - Các tuỳ chọn cho component
   * @param {function} [options.data] - Hàm trả về dữ liệu mặc định của component
   * @param {string} [options.template] - Chuỗi HTML template
   */
  create: function (componentName, options = { data: () => {}, template: '' }) {
    /**
     * @class Component
     * @extends HTMLElement
     */
    class Component extends HTMLElement {
      /**
       * Khởi tạo component.
       */
      constructor() {
        super();
        /** @type {Object} */
        this.state = options.data();
        /** @type {NodeList[]} */
        this.nodeTexts = [];
        /** @type {string} */
        this.computedHTML = options.template;
        /** @type {HTMLTemplateElement} */
        this.templateNode = document.createElement('template');
      }

      /**
       * Xử lý việc render lại component.
       * @param {string} code - Mã code
       */
      handleReRender(code) {
        // Lặp qua this.state, lấy các key đã thay đổi dựa theo "code"
        Object.keys(this.state).forEach((key) => {
          // cộng chuỗi để thành key của nodeTexts với key giống của nodeTexts
          const elementState = null; /*code...*/
          // Nếu có một key giống với elementState => key của nodeTexts cần thay đổi
          if (elementState.startsWith('element-' + key)) {
            // Xử lý chuỗi để cắt ra key của nodeTexts cần thiết
            const positionKey = null; /*code...*/
            const dataNodeElements = null; /*code...*/
            // Cập nhật tất cả nodeText liên quan dựa theo value của state
            this.nodeTexts[dataNodeElements].forEach((element) => {
              element.textContent = null /*code...*/;
            });
          }
        });
      }

      /**
       * Xử lý sự kiện thay đổi.
       * @param {HTMLElement} element - Phần tử HTML
       * @param {string} event - Tên sự kiện
       * @param {string} code - Mã code
       */
        handleChange(element, event, code) {
        //   lấy ra các đoạn code cắt theo dấy ';' để lấy được nhiều đoạn code
        const codes = null; /*code...*/
        // Element, gán sự kiện
        element.addEventListener(event, () => {
          codes.forEach((code) => {
            code = code.trim();
            // Nối chuỗi với this.state để cập nhật lại state
            const newCode = null; /*code...*/
            // sử dụng hàm eval để chạy đoạn code bằng String
            eval(newCode);
            // Xử lý việc render lại component bằng đoạn code viết trong giá trị attr
            this.handleReRender(code);
          });
        });
      }

      /**
       * Thêm sự kiện cho các phần tử con.
       */
      addElementEvent() {
        // Lấy tất cả phần tử con
        Array.from(this.templateNode.children).forEach((child) => {
          // Lặp qua tất cả element, tìm thuộc tính
          [...child.attributes].forEach((attribute) => {
            // Tìm xem phần tử con nào có thuộc tính bắt đầu bằng "v-on"
            if (attribute.name.startsWith('v-on')) {
              // Sử dụng regex cắt ra các phần cần thiết
              const regex = /v-on:(\w+)="(\w+.*?)"/;
              // [0]: Toàn bộ định dạng, [1]: event, [2]: value(code)
              const nodeAttr = null; /*code...*/
              // Định dạng bên HTML
              const match = nodeAttr.match(regex);
              // Lấy ra mảng match
              if (match) {
                // Gọi hàm this.handleChange để thêm các sự kiện change
                this.handleChange(child, match[1], match[2]);
              }
            }
          });
        });
      }

      /**
       * Khởi tạo giá trị ban đầu.
       * @param {string} value - Giá trị
       */
      initialGetValue(value) {
        // regex để lấy ra state key
        const regex = new RegExp(`{{${value}}}`, 'gi');
        const match = this.computedHTML.match(regex);

        // Lặp qua các mẫu tìm thấy
        match?.forEach((cutRegex) => {
          Array.from(this.templateNode.children).forEach((child) => {
            if (child.innerHTML.includes(cutRegex)) {
              // Tách các phần từ HTML theo regex
              const parts = null; /*code...*/
              const fragment = document.createDocumentFragment();

              // Lặp qua các phần tử đã tách
              parts.forEach((text, index) => {
                fragment.appendChild(document.createTextNode(text));
                if (index < parts.length - 1) {
                  // Tạo nút text và thêm vào fragment với giá trị là key của state
                  const variableNode = null; /*code...*/
                  // Cập nhật trạng thái, ghi các nodeText vào this.nodeTexts để xử lý re-render
                  if (!this.nodeTexts['element-' + value]) {
                    this.nodeTexts['element-' + value] = null /*code...*/;
                  } else {
                    this.nodeTexts['element-' + value].push(variableNode);
                  }
                  fragment.appendChild(variableNode);
                }
              });
              // Xóa nội dung ban đầu của child và thêm fragment vào
              child.innerHTML = '';
              child.appendChild(fragment);
            }
          });
        });
      }

      /**
       * Được gọi khi component được kết nối vào DOM.
       */
      connectedCallback() {
        // Xử lý innerHTML vào thẻ template
          this.templateNode.innerHTML = null /*code...*/;
        // Clone template, đưa lại vào templateNode để sử dụng
        this.templateNode = null /*code...*/;
        // Xử lý lại templateNode để thay thế định dạng {{variable}}
        Object.keys(this.state).forEach((key) => this.initialGetValue(key));
        // Gọi hàm render để hiển thị
        this.render();
      }

      /**
       * Render component.
       */
      render() {
        // Xử lý các element của templateNode, thêm sự kiện
        this.addElementEvent();
        // append vào customElement
        this.appendChild(this.templateNode);
      }
    }
    // Khai báo, đăng ký tên và hàm tạo
    customElements.define(componentName, Component);
  },
};

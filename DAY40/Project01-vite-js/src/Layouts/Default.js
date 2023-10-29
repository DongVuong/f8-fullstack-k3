import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export const DefaultLayout = (body) => {
  return `
  <header class="mb-3">
        <div class="container">
          <h1><a href="/" data-navigo>HEADER</a></h1>
        </div>
      </header>
      <main>
        <div class="container">
          <div class="row">
            <div class="col-3">
              <h2>Menu</h2>
              <ul>
                <li><a href="/" data-navigo>HOME</a></li>
                <li><a href="/about" data-navigo>ABOUT</a></li>
                <li><a href="/products" data-navigo>PRODUCTS</a></li>
              </ul>
            </div>
            <div class="col-9">${body}</div>
          </div>
        </div>
      </main>
      <footer class="mt-3">
        <div class="container">
          <h2>FOOTER CONTENT</h2>
        </div>
      </footer>
  `;
};

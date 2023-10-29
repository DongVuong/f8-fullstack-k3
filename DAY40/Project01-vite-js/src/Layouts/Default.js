export const DefaultLayout = (body) => {
  return `
  <header class="mb-3">
        <div class="container">
          <h2><a href="/" data-navigo>HEADER</a></h2>
        </div>
      </header>
      <main>
        <div class="container">
          <div class="row">
            <div class="col-6">
              <h2>Menu</h2>
              <ul>
                <li><a href="/" data-navigo>HOME</a></li>
                <li><a href="/about" data-navigo>ABOUT</a></li>
                <li><a href="/products" data-navigo>PRODUCTS</a></li>
              </ul>
            </div>
            <div class="col-6">${body}</div>
          </div>
        </div>
      </main>
      <footer class="mt-12">
        <div class="container">
          <h2>FOOTER</h2>
        </div>
      </footer>
  `;
};

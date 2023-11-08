export const ProductDetail = ({ data }) => {
  let { id } = data;
  id = id.replace(/(<([^>]+)>)/gi, "");
  return `
  <h2>Product Details: Product ${id}</h2>
  <button class="btn btn-primary btn-lg" onClick="navigate('/products')">BACK</button>`;
};

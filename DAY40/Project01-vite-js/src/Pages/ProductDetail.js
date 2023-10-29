export const ProductDetail = ({ data }) => {
  const { id } = data;
  return `
  <h2>Product Details: Product ${id}</h2>
  <button class="btn btn-primary btn-lg" onClick="navigate('/products')">BACK</button>`;
};

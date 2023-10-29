export const ProductDetail = ({ data }) => {
  const { id } = data;
  return `
  <h2>Product Details:${id}</h2>
  <button onClick="navigate('/products')">BACK</button>`;
};

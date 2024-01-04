import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const param = useParams();
  return <div>ProductDetail:{param.id}</div>;
}

export default ProductDetail;

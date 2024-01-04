import React from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/cam-on", { replace: true });
  };
  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={handleCheckout}>Dat hang</button>
    </div>
  );
}

export default Checkout;

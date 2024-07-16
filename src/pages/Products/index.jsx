import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [productID, setProductID] = useState(1);

  const handleNext = () => {
    setProductID(productID + 1);
  };

  const handlePrev = () => {
    if (productID === 1) return;
    setProductID(productID - 1);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + productID)
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [productID]);

  console.log(productID);
  return (
    <div>
      <h2>Products</h2>
      <div>
        <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>next</button>
      </div>
      {/* <button onClick={handleClick}> fetch products </button> */}
      {isLoading ? <span>Loading...</span> : JSON.stringify(products)}
    </div>
  );
}

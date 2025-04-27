import { useEffect, useState } from "react";
import "../load-more-data/styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }

      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProducts(0);
  }, [count]);

  useEffect(() => {
    if (products && products.length === 194) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((items) => (
              <div key={items.id} className="product">
                <img src={items.thumbnail} alt={items.title} />
              </div>
            ))
          : null}
      </div>

      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached 194 products</p> : null}
      </div>
    </div>
  );
}

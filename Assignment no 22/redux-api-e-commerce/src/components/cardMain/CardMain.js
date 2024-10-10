import React, { useState } from "react";
import CardComponent from "../card/Card";
import "../cardMain/cardMain.css";
import { fetchProducts } from "../../store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import From from "../form/From";

function CardMain() {
  const [limit, setLimit] = useState(8)
  const products = useSelector((state) => state.productSlice.products);
  console.log(products);
  const [editProduct, setEditProduct] = useState(null)
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchProducts())
  };
  const loadMore = () => {
    setLimit(prev => prev + 4)
  }
  return (
    <>
      <div id="products" className="text-center" style={{marginTop: 50, marginBottom: 50}}>
      <button  onClick={handleClick} type="button" className="btn btn-success ">
        Get Products
      </button>
      </div>
      <From editProduct={editProduct} setEditProduct={setEditProduct} />

      <div className="container">
        <div className="row">
          {products.slice(0, limit).map((product) => {
            return (
              <>
              <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
                <CardComponent
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  setEditProduct={setEditProduct}
                />
              </div>
              </>
            );
          })}
        </div>
      </div>
      {limit < products.length && ( // Only show Load More if there are more products
        <div className="text-center" style={{ marginTop: 20, marginBottom: 50 }}>
          <button onClick={loadMore} type="button" className="btn btn-secondary">
            Load More
          </button>
        </div>
      )}
    </>
  );
}

export default CardMain;

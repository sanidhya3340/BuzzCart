import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../components/Products/Product";
import ReactLoading from "react-loading";
// import {productData} from '../components/Products/ProductData'

//actions
import { getProducts as listProducts } from "../redux/actions/productActions";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="mx-16 my-12">
      <p className="lg:text-3xl md:text-2xl text-xl font-bold">
        Latest Poducts
      </p>
      <div className="grid gap-4 md:grid-cols-2 mt-8 lg:grid-cols-3">
        {loading ? (
          // <p>Loading..</p>
          <ReactLoading
            type={'balls'}
            color='#03fc4e'
            height={"20%"}
            width={"20%"}
          />
        ) : error ? (
          <p>{error}</p>
        ) : (
          products.map((product, key) => (
            <Product
              key={key}
              productId={product._id}
              name={product.name}
              imgUrl={product.imageUrl}
              description={product.description}
              price={product.price}
              countInStock
            />
          ))
        )}
      </div>
    </div>
  );
}

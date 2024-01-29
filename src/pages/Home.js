import React from "react";
import Product from "../components/Product";
import useProductApi from "../hooks/useProductApi";
import Loader from "../components/Loader";

const Home = () => {
  const { products, loading } = useProductApi();

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          {loading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
              {filteredProducts.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;

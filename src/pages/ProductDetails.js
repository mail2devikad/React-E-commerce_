import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]); 

  const {image,title,price}=product;
  const {addToCart} = useContext(CartContext);

  //fetch product
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <div className="flex items-center justify-center my-16">
      <div className="w-[300px] border-2 border-slate-600 text-center ">
        <div className="px-16 pb-5">
        <img className='h-[250px] ' src={image} alt=''/>
        </div>
        <div className="border-t">
          <p className="pt-5">{product.title}</p>
          <p className="text-lg font-medium py-5">Price: ${product.price}</p>
          <button onClick={()=>addToCart(product,id) }
          className="rounded-sm bg-slate-600 text-white font-medium px-2 py-3 mb-5">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slice/cartSlice";
import { addToLikedProducts } from "../Redux/Slice/favouritesSlice";
import { products } from "../utils/constants";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...data,
        quantity: 1,
      })
    );
    alert("Successfully added to cart!");
  };
  const handleAddtoFav = () => {
    dispatch(addToLikedProducts(data)); // Dispatch addToFavorites action with product data
    alert("Added to favorites successfully!");
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((data) => (
          <div key={data.id} className="bg-white p-4 shadow-md">
            <div className="mb-4">
              <img src={data.imageUrl} alt="" className="w-full h-auto" />
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">{data.name}</p>
              <p className="text-gray-600 italic">{data.author}</p>
              <p className="mt-2 text-gray-800">Rs.{data.price}</p>
              <div className="mt-4">
                <button onClick={handleAddToCart} className="font-semibold bg-black text-white w-fit p-3 rounded-[26px] tracking-wide my-3">
                  Add to Cart
                </button><br />
                <button onClick={handleAddtoFav} className="font-semibold bg-orange-400 text-white w-fit p-3 rounded-[26px] tracking-wide my-3">
                  Favorite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;

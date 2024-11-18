/* eslint-disable react/prop-types */
import { useState } from "react";
import useUserData from "../Hooks/useUserData";
import axios from "axios";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const userData = useUserData();
  const userEmail = userData?.email;

  const handleWishlist = async () => {
    if (!userEmail) {
      console.error("User not logged in!");
      return;
    }

    const wishlistData = {
      email: userEmail,
      productId: product._id,
      productTitle: product.title,
      productImage: product.image,
      productPrice: product.price,
      productCategory: product.category,  
      productDescription: product.description, 
      productBrand: product.brand,  
      productStock: product.stock,  
    };
    

    try {
      const res = await axios.post(
        `http://localhost:4000/wishlists/${userEmail}`,
        wishlistData
      );

      if (res.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product added to wishlist!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: res.data.message || "Error adding to wishlist!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error(
        "Error adding to wishlist:",
        error.response?.data?.message || error.message
      );
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error adding to wishlist!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="max-w-[400px] mx-auto bg-white shadow-lg rounded-lg border hover:shadow-xl transition duration-300">
      <figure>
        <img
          className="h-72 w-full object-cover rounded-t-lg"
          src={product.image}
          alt={`${product.title} image`}
        />
      </figure>
      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-800 truncate">
          {product.title}
        </h2>
        <p className="text-sm text-gray-500">{product.brand}</p>
        <p className="text-md font-medium text-green-600">
          {product.stock} in stock
        </p>
        <p className="text-sm text-gray-500 capitalize">{product.category}</p>
        <p className="text-xl font-bold text-blue-600">${product.price}</p>
        <p className="text-gray-700 text-sm mt-3">
          {showFullDescription
            ? product.description
            : `${product.description.slice(0, 90)}...`}
          <button
            onClick={toggleDescription}
            className="text-blue-600 hover:underline ml-1"
          >
            {showFullDescription ? "Show Less" : "See All"}
          </button>
        </p>
        <div className="mt-5">
          <button
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={handleWishlist}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

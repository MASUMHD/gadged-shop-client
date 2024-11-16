import { useEffect, useState } from "react";
import FilterBar from "../Components/Products/FilterBar";
import SearchBar from "../Components/SearchBar";
import SortByPrice from "../Components/SortByPrice";
import axios from "axios";
import Loading from "./Loading";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch products from API
  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      axios.get(`http://localhost:4000/all-products`).then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
      });
    };
    fetch();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="my-8 text-2xl font-semibold text-center">All Products</h1>

      {/* search and sort */}
      <div className="flex justify-between items-center w-full mb-6">
        <SearchBar />
        <SortByPrice />
      </div>
      {/* content */}
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <FilterBar />
        </div>
        {/* products */}
        <div className="col-span-10">
          {loading ? (
            <Loading />
          ) : (
            <>
              {products.length === 0 ? (
                <div className="w-full h-full flex items-center justify-center">
                  <h1 className="text-3xl text-center font-bold">
                    No products found
                  </h1>
                </div>
              ) : (
                <div className="min-h-screen grid grid-cols-3 gap-2">
                    {
                        products.map((product) =>(
                            <ProductCard key={product.objectId} product={product}/>   
                        ))
                    }
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;

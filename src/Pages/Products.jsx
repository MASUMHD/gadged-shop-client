import { useEffect, useState } from "react";
import FilterBar from "../Components/Products/FilterBar";
import SearchBar from "../Components/SearchBar";
import SortByPrice from "../Components/SortByPrice";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(false);

  // fetch products from API
  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      axios.get(`http://localhost:4000/all-products`).then((res) => {
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
            
        </div>
      </div>
    </div>
  );
};

export default Products;

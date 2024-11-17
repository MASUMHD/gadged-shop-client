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
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  // console.log(brand, category, search, sort);

  // fetch products from API
  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      axios.get(`http://localhost:4000/all-products?title=${search}&sort=${sort}&brand=${brand}&category=${category}`).then((res) => {
        // console.log(res.data);
        setProducts(res.data);
        setLoading(false);
      });
    };
    fetch();
  }, [search, sort, brand, category]);

  // search for products
  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.search.value);
    e.target.search.value = '';
  }

  // reset all 
  const handleReset = () => {
    setSearch("");
    setSort("asc");
    setBrand("");
    setCategory("");
    window.location.reload();
  };

  return (
    <div className="container mx-auto">
      <h1 className="my-8 text-2xl font-semibold text-center">All Products</h1>

      {/* search and sort */}
      <div className="flex justify-between items-center w-full mb-6">
        <SearchBar handleSearch={handleSearch} />
        <SortByPrice  setSort={setSort}/>
      </div>
      {/* content */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <FilterBar  setBrand={setBrand} setCategory={setCategory} handleReset={handleReset}/>
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
                            <div key={product.objectId} className='mb-8'>
                              <ProductCard  product={product}/>
                            </div>   
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

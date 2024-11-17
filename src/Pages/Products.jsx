import { useEffect, useState } from "react";
import FilterBar from "../Components/Products/FilterBar";
import SearchBar from "../Components/SearchBar";
import SortByPrice from "../Components/SortByPrice";
import axios from "axios";
import Loading from "./Loading";
import ProductCard from "../Components/ProductCard";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqBrand, setUniqBrand] = useState([]);
  const [uniqCategory, setUniqCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // fetch products from API
  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      axios
        .get(
          `http://localhost:4000/all-products?title=${search}&page=${page}&limit=${9}&sort=${sort}&brand=${brand}&category=${category}`
        )
        .then((res) => {
          console.log(res.data);
          setProducts(res.data.products);
          setUniqBrand(res.data.brands);
          setUniqCategory(res.data.categories);
          setTotalPages(Math.ceil(res.data.totalProducts / 9));
          setLoading(false);
        });
    };
    fetch();
  }, [search, sort, brand, category, page]);

  // search for products
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
    setPage(1);
  };

  // reset all filters
  const handleReset = () => {
    setSearch("");
    setSort("asc");
    setBrand("");
    setCategory("");
    window.location.reload();
    setPage(1); 
  };

  // pagination
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="my-8 text-2xl font-semibold text-center">All Products</h1>

      {/* search and sort */}
      <div className="flex justify-between items-center w-full mb-6">
        <SearchBar handleSearch={handleSearch} />
        <SortByPrice setSort={setSort} />
      </div>

      {/* content */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <FilterBar
            setBrand={setBrand}
            setCategory={setCategory}
            handleReset={handleReset}
            uniqBrand={uniqBrand}
            uniqCategory={uniqCategory}
          />
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
                  {products.map((product) => (
                    <div key={product.objectId} className="mb-8">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* pagination */}
          <div className=" flex justify-center items-center my-8">
            <button className="btn mr-4 p-4 border rounded-full border-black hover:bg-gray-300" onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}  
              >
              <FaArrowCircleLeft />
            </button>
            <p>
              Page {page} of {totalPages}{" "}
            </p>
            <button className="btn ml-4 p-4 border rounded-full border-black hover:bg-gray-300" onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}>
              <FaArrowCircleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

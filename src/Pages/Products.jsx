import FilterBar from "../Components/Products/FilterBar";
import SearchBar from "../Components/SearchBar";
import SortByPrice from "../Components/SortByPrice";

const Products = () => {
  return (
    <div className="container mx-auto">
      <h1 className="my-8 text-2xl font-semibold text-center">All Products</h1>

      {/* search and sort */}
      <div className="flex justify-between items-center w-full mb-6">
        <SearchBar/>
        <SortByPrice/>
      </div>
      {/* content */}
      <div className="grid grid-cols-12">
        <div className="col-span-2"><FilterBar/></div>
        <div className="col-span-10">Products</div>
      </div>
    </div>
  );
};

export default Products;

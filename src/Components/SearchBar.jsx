import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (
        <form className="flex items-center gap-[2px]">
            <input type="text" placeholder="Search Products" name='search' className="max-w-md p-[11px] rounded-l-md  border border-black"/>
            <button className="btn rounded-l-none rounded-r-md btn-outline bg-gray-200"><FaSearch className="w-5 h-5" /></button>
        </form>
    );
};

export default SearchBar;
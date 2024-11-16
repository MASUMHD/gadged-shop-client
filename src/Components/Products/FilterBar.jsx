import { GrPowerReset } from "react-icons/gr";
import { TbFilter } from "react-icons/tb";

const FilterBar = () => {
  return (
    <div className="bg-base-200 p-4 h-full min-h-screen rounded-t-md">
      <div className="flex items-center gap-2 justify-center mt-5">
        <TbFilter size={24} />
        <h2 className="text-xl font-bold">Filters</h2>
      </div>

      <div className="mt-5 flex flex-col gap-2 items-center">
        <div className="w-full">
          <select className="p-[11px]  w-full border border-black rounded-md">
            <option disabled selected>
              Brand
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div className="w-full">
        <select className="p-[11px]  w-full border border-black rounded-md">
            <option disabled selected>
              Category
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
      </div>
      <button className="btn btn-outline w-full flex text-xl items-center gap-2 mt-5"><p>Reset</p> <GrPowerReset /></button>
    </div>
  );
};

export default FilterBar;

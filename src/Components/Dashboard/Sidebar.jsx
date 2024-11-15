import { BiLogOut } from "react-icons/bi";
import { GrOverview } from "react-icons/gr";
import { IoAddCircleOutline, IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import userUserData from "../../Hooks/userUserData";
import { MdOutlineInventory2 } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";

const sellerRoutes = [
  {
    id: 1,
    route: "/dashboard/my-product",
    title: "My Product",
    icon: <MdOutlineInventory2 />,
  },
  {
    id: 2,
    route: "/dashboard/add-product",
    title: "Add Product",
    icon: <IoAddCircleOutline />,
  },
];
const Sidebar = () => {
  const userData = userUserData();
  const { logout} = useAuth();

  return (
    <div className="bg-gray-200 border-r-2 border-black min-h-screen px-8 py-16">
      <h1 className="text-3xl font-bold mb-8">Gadget Shop</h1>
      <ul className="flex flex-col gap-2">
        <li className="p-2 border border-black rounded-md text-base font-bold  hover:bg-gray-300">
          <NavLink to="/dashboard/overview" className="flex gap-2 items-center">
            <GrOverview />
            <p>Overview</p>
          </NavLink>
        </li>
        {userData?.role === "seller" &&
          sellerRoutes.map((route) => (
            <li
              key={route.id}
              className="p-2 border border-black rounded-md text-base font-bold  hover:bg-gray-300"
            >
              <NavLink to={route.route} className="flex gap-2 items-center">
                <>{route.icon}</>
                <p>{route.title}</p>
              </NavLink>
            </li>
          ))}
        <li className="p-2 border border-black rounded-md text-base font-bold  hover:bg-gray-300">
          <NavLink to="/" className="flex gap-2 items-center">
            <IoHomeOutline />
            <p>Home</p>
          </NavLink>
        </li>
        <li className="p-2 border border-black rounded-md text-base font-bold  hover:bg-gray-300">
          <NavLink onClick={() => logout()} to="/dashboard/overview" className="flex gap-2 items-center">
            <BiLogOut />
            <p>Log Out</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

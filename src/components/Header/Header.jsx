import { HomeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="py-5 space-y-5">
        <button>
          <Link to={"/"} className="flex hover:text-red-500 hover:transition-all hover:duration-300">
            <HomeIcon className="h-4 my-auto mr-1" />Beranda
          </Link>
        </button>
        <h1 className="text-5xl font-semibold text-black">Restaurants</h1>
        <p className="w-full md:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
          veritatis odit aperiam ipsam iure. Sapiente, alias? Praesentium
          inventore ex totam?
        </p>
      </div>
    </>
  );
};

export default Header;

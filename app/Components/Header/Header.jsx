import Link from "next/link";
import ManuItem from "../ManuItem/ManuItem";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 lg:mt-8">
      <div className="flex gap-4">
        <ManuItem title="home" address="/" Icon={AiFillHome}></ManuItem>
        <ManuItem title="about" address="/about" Icon={BsInfoCircleFill}></ManuItem>
      </div>
      <Link href="/">
        <span className="text-2xl mr-2 font-extrabold bg-amber-500 px-2 py-1 rounded-lg">IMDb</span>
        <span className="text-xl hidden sm:inline">Clone</span>
      </Link>
    </div>
  );
};

export default Header;
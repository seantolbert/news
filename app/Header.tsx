import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";

function Header() {
  return (
    <header className=" flex flex-col gap-10 p-10 items-center">
      <div className="flex items-center justify-between w-full">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            The{" "}
            <span className="underline decoration-6 decoration-slate-300">
              News
            </span>
          </h1>
        </Link>

        <div className="flex items-center justify-end space-x-2">
          
          <DarkModeButton />

          <button className="hidden md:inline lowercase tracking-widest text-gray-400 px-4 py-3 shadow-[13px_13px_26px_#c7c7c7,-13px_-13px_26px_#ffffff] bg-white rounded-xl lg:px-8 focus:shadow-none transition-shadow duration-200 ease-in-out">
            Subscribe Now
          </button>
        </div>
      </div>

      <NavLinks />

      <SearchBox />
    </header>
  );
}
export default Header;

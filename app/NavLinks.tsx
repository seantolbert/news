"use client";

import { usePathname } from "next/navigation";
import { categories } from "@/constants";
import NavLink from "./NavLink";

function NavLinks() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() == path;
  };

  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 md:text-sm gap-4 max-w-6xl mx-auto border-1 pb-10">
      {categories.map((category) => (
        <NavLink key={category} category={category} isActive={isActive(category)} />
      ))}
    </nav>
  );
}
export default NavLinks;

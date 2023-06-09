import Link from "next/link";

type Props = {
  category: string;
  isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
  return (
    <Link
      href={`/news/${category}`}
      className={`navlink ${
        isActive &&
        "underline decoration-gray-300 underline-offset-4 font-bold text-lg"
      }`}
    >
      {category}
    </Link>
  );
}
export default NavLink;

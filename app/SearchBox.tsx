"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");

  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/search?term=${input}`);
    console.log(input);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl flex justify-between w-full items-center px-5 "
    >
      <input
        type="text"
        placeholder="Search Keywords..."
        className="flex-1 h-14 sounded-sm placeholder-gray-200 outline-none bg-transparent dark:text-gray-400"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        disabled={!input}
        className="disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
export default SearchBox;

"use client";

import { useRouter } from "next/navigation";

type Props = {
  article: Article;
};

function ReadMoreButton({ article }: Props) {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${queryString}`;
    console.log(url);
    router.push(url)
  };

  return <button onClick={handleClick} className="bg-gray-200 dark:bg-gray-700 h-10 rounded-b-lg hover:bg-gray-400">Read More</button>;
}
export default ReadMoreButton;

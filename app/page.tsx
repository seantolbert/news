import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import NewsList from "./NewsList";
import { response } from "@/response";

async function HomePage() {
  // fetch the news data

  const news: NewsResponse = response || await fetchNews(categories.join(","));
  // const news: NewsResponse =  await fetchNews(categories.join(","));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
export default HomePage;

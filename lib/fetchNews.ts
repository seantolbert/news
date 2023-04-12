import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {

  // graphql query

  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "us"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          image
          description
          country
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  // fetch function with next 13 caching

  const response = await fetch(
    "https://neresheim.stepzen.net/api/newbie-orangutan/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_PUBLIC_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  // console.log(
  //   "LOADING NEW DATA FROM API for category >>> ",
  //   category,
  //   keywords
  // );

  const newsResponse = await response.json()

  // sort function by images vs no image

  const news = sortNewsByImage(newsResponse.data.myQuery)

  // return res

  return news

};
export default fetchNews;
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=8cdc718ee14bde218ab9bbd4172551ff&countries=us&limit=100&offset=0&sort=published_desc"

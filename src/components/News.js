import React, { useContext, useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { AppContext } from "./context/context";

function News() {
  const { category, search } = useContext(AppContext);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  const api_url = "https://newsapplicationbackend-production.up.railway.app/";
  const defUrl = "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/05/breaking-news-1621477618-1621902360.jpg";

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError("");

      let url = `${api_url}getNews`;
      console.log("Keyword: " + search + " Category: " + category)
      if (search.length !== 0) {
        url = `${api_url}getNews/keyword/${encodeURIComponent(search)}`;
      } else if (category.length !== 0) {
        url = `${api_url}getNews/category/${category}`;
      }
      console.log(url);
      try {
        const resp = await fetch(url, { method: "GET", headers: { Accept: "application/json" } });
        if (!resp.ok) throw new Error("Failed to fetch news");

        let json = await resp.json();
        console.log("API Response:", json);

        if (json.status === "ok") {
          if (search.length !== 0) {
            const data = JSON.parse(json.news);
            console.log(data);
            json = data;
          }
          const newsList = json.data || json.news || [];
          setArticles(newsList);

          if (newsList.length === 0) {
            setError("No articles found!");
          }
        } else {
          setError("No articles found!");
          setArticles([]);
        }
      } catch (error) {
        setError("Api limit reached for today. Sorry we are done for the day. For continued service please choose our premium plans");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [search, category]);

  return (
    <div className="container my-3">
      <h2>NewsMonger - Top Headlines</h2>
      {isLoading && <Spinner />}
      {!isLoading && error && <p className="text-danger">{error}</p>}
      <div className="row my-4">
        {!isLoading && articles.length > 0 &&
          articles.map((element) =>
            element.title !== "[Removed]" ? (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title || "..."}
                  description={element.description || "..."}
                  date={element.published || element.published_at}
                  imageUrl={element.image !== "None" && element.image !== null ? element.image : defUrl}
                  Url={element.url}
                  author={element.author || "Unknown"}
                />
              </div>
            ) : null
          )}
      </div>
    </div>
  );
}

export default News;
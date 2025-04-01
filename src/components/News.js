import React, { useContext, useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { AppContext } from "./context/context";

function News() {
  const { category, keyword } = useContext(AppContext);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  const defUrl = "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/05/breaking-news-1621477618-1621902360.jpg";

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError("");

      let url = "http://localhost:8082/getNews";
      console.log("Keyword: "+keyword+" Category: "+category)
      if (keyword.length!==0) {
        url = `http://localhost:8082/getNews/keyword/${encodeURIComponent(keyword)}`;
      } else if (category.length!==0) {
        url = `http://localhost:8082/getNews/category/${category}`;
      }
      console.log(url);
      try {
        const resp = await fetch(url, { method: "GET", headers: { Accept: "application/json" } });
        if (!resp.ok) throw new Error("Failed to fetch news");
        
        const json = await resp.json();
        console.log("API Response:", json);

        if (json.status === "ok") {
          setArticles(json.data || json.news || []);
        } else {
          setError("No articles found!");
          setArticles([]);
        }
      } catch (error) {
        setError("Error fetching news. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [keyword, category]);

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
                  date={element.published}
                  imageUrl={element.image!=="None"? element.image:defUrl}
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
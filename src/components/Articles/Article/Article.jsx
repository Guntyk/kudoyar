import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { articles } from "../../../data";
import "./Article.css";

export default function Article() {
  const [article, setArticle] = useState(null);
  const { articleId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    setArticle(
      ...articles.filter((article) => Number(article.id) === Number(articleId))
    );
  }, []);

  return (
    <>
      {article ? (
        <>
          <div
            className="article-background"
            style={{
              background: `rgba(0, 0, 0, 0.3)url(${article.img}) no-repeat 50% / cover`,
            }}
          ></div>
          <article className="article-details">
            <div className="article-detail-title-wrapper">
              <div className="container">
                <h1 className="article-detail-title title">{article.title}</h1>
              </div>
            </div>
            <div className="article-detail-text">
              <div className="container">
                <p className="text">{article.text}</p>
              </div>
            </div>
          </article>
        </>
      ) : (
        <div className="loader-wrapper">
          <div className="lds-dual-ring"></div>
        </div>
      )}
    </>
  );
}

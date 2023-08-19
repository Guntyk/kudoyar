import Button from "../../common/Button/Button";
import { useHistory } from "react-router-dom";
import { articles } from "../../data";
import "./Articles.css";

export default function Articles() {
  const { push } = useHistory();
  return (
    <div className="articles-background" id="articles">
      <div className="container">
        <section className="articles">
          <h2 className="sec-title">Статті</h2>
          <div className="articles-wrapper">
            {articles.map((article) => (
              <article
                className="article bordered"
                key={article.text.slice(0, 50)}
              >
                <div className="img-wrapper">
                  {article.img ? (
                    <img
                      src={article.img}
                      alt="Обкладинка статті"
                      className="article-img"
                    />
                  ) : null}
                </div>
                <span className="article-title subtitle">{article.title}</span>
                <p className="article-text text">{article.text}</p>
                <Button
                  className="article-button"
                  articleBtn
                  onClick={() => {
                    push(`/articles/${article.id}`);
                  }}
                />
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

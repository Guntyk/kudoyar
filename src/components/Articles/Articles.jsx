import Button from "../../common/Button/Button";
import { articles } from "../../data";
import "./Articles.css";

export default function Articles() {
  return (
    <div className="articles-background" id="articles">
      <div className="container">
        <section className="articles">
          <h2 className="sec-title">Статті</h2>
          <div className="articles-wrapper">
            {articles.map((article) => (
              <div className="article border" key={article.text.slice(0, 50)}>
                <div className="img-wrapper"></div>
                <span className="article-title subtitle">{article.title}</span>
                <p className="article-text text">{article.text}</p>
                <Button className="article-btn" articleBtn />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

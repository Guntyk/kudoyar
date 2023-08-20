import Button from "../../common/Button/Button";
import photo from "../../materials/photo-1.webp";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <h1 className="title">Юрист. Консультант з купівлі нерухомості</h1>
          <a href="/#contacts">
            <Button
              className="order-button"
              buttonText="Замовити консультацію"
            />
          </a>
          <img src={photo} alt="Фотографія Івана Кудояра" className="photo-1" />
        </div>
      </div>
    </section>
  );
}

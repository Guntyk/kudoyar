import Button from "../../common/Button/Button";
import photo from "../../materials/photo-1.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <h1 className="title">Юрист. Консультант з купівлі нерухомості</h1>
          <Button className="order-btn" buttonText="Замовити консультацію" />
          <img src={photo} alt="Фотографія Івана Кудояра" className="photo-1" />
        </div>
      </div>
    </section>
  );
}

import photo from "../../materials/photo-2.png";
import "./Contacts.css";

export default function Contacts() {
  return (
    <div className="contacts-background" id="contacts">
      <div className="container">
        <section className="contacts">
          <h2 className="sec-title">Контакти</h2>
          <div className="contacts-box border">
            <span className="sec-title name">Іван Кудояр</span>
            <ul>
              <li className="contact">
                <span className="naming">Сторінка фейсбук</span>
                <a
                  href="https://facebook.com/kudoyriv"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="subtitle linked"
                >
                  kudoyriv
                </a>
              </li>
              <li className="contact">
                <span className="naming">Пошта</span>
                <a
                  href="mailto:kudoyar.ivan@gmail.com"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="subtitle linked"
                >
                  kudoyar.ivan@gmail.com
                </a>
              </li>
              <li className="contact">
                <span className="naming">Номер телефону</span>
                <a href="tel:+380505925383" className="subtitle linked">
                  +380 50 592 5383
                </a>
              </li>
            </ul>
          </div>
          <img src={photo} className="contacts-photo" alt="Фотографія Івана Кудояра" />
        </section>
      </div>
    </div>
  );
}

import logo from "../../materials/logo-black.png";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer-background">
      <div className="container">
        <footer className="footer">
          <div className="wrapper">
            <a href="/" className="logo-link">
              <img src={logo} alt="Логотип 'Кудояр'" className="logo-img" />
              <span className="logo">Кудояр</span>
            </a>
            <div className="rights">
              © Kudoyar Всі права захищені{" "}
              {year === 2023 ? "2023" : `2023 - ${year}`}
            </div>
          </div>
          <nav className="wrapper">
            <ul className="nav-links">
              <li>
                <a href="#services" className="linked footer-link">
                  Послуги
                </a>
              </li>
              <li>
                <a href="#articles" className="linked footer-link">
                  Статті
                </a>
              </li>
              <li>
                <a href="#testimonials" className="linked footer-link">
                  Відгуки
                </a>
              </li>
              <li>
                <a href="#contacts" className="linked footer-link">
                  Контакти
                </a>
              </li>
            </ul>
          </nav>
          <ul className="wrapper">
            <li>
              <span>Facebook: </span>
              <a
                href="https://facebook.com/kudoyriv"
                rel="noreferrer noopener"
                target="_blank"
                className="linked footer-link"
              >
                kudoyriv
              </a>
            </li>
            <li>
              <span>Пошта: </span>
              <a
                href="mailto:kudoyar.ivan@gmail.com"
                rel="noreferrer noopener"
                target="_blank"
                className="linked footer-link"
              >
                kudoyar.ivan@gmail.com
              </a>
            </li>
            <li>
              <span>Іван: </span>
              <a href="tel:+380505925383" className="linked footer-link">
                +380 50 592 5383
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

import logo from "../../materials/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="container">
      <header className="header">
        <a href="/" className="logo-link">
          <img src={logo} alt="Логотип 'Кудояр'" className="logo-img" />
          <span className="logo">Кудояр</span>
        </a>
        <nav>
          <ul className="text links">
            <li>
              <a href="#services" className="linked">
                Послуги
              </a>
            </li>
            <li>
              <a href="#articles" className="linked">
                Статті
              </a>
            </li>
            <li>
              <a href="#testimonials" className="linked">
                Відгуки
              </a>
            </li>
            <li>
              <a href="#contacts" className="linked">
                Контакти
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

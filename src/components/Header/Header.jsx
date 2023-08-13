import logo from "../../materials/logo.png";
import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="container">
      <header className="header">
        <a href="/" className="logo-link">
          <img src={logo} alt="Логотип 'Кудояр'" className="logo-img" />
          <span className="logo">Кудояр</span>
        </a>

        <nav className={`menu ${isActive ? "active" : ""}`}>
          <ul className="text links">
            <li>
              <a
                href="#services"
                className="linked"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                Послуги
              </a>
            </li>
            <li>
              <a
                href="#articles"
                className="linked"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                Статті
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="linked"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                Відгуки
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                className="linked"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                Контакти
              </a>
            </li>
          </ul>
        </nav>
        <div
          onClick={() => {
            setIsActive(false);
          }}
          className={`overlay ${isActive ? "active" : ""}`}
        ></div>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`burger ${isActive ? "active" : ""}`}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
      </header>
    </div>
  );
}

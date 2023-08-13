import "./Services.css";

export default function Services() {
  return (
    <>
      <div className="container" id="services">
        <h2 className="sec-title services-title">Мої послуги</h2>
      </div>
      <section className="services">
        <div className="container">
          <div className="services-content">
            <div className="services-wrapper">
              <div className="service">
                <h3 className="subtitle">
                  Консультація при купівлі нерухомості на первинному, вторинному
                  ринку
                </h3>
                <div className="service-box border text">
                  <span>
                    Оцінка ризиків, пов'язаних з: <br />
                  </span>
                  <ul className="list">
                    <li>Правом власності продавця на нерухоме майно</li>
                    <li>Судовою історією всіх учасників угоди та їх родичів</li>
                    <li>
                      Дефектами та достовірністю правовстанавліваючих документів
                    </li>
                    <li>
                      Невідповідністю дозвільних, технічних та фінансових
                      документів
                    </li>
                    <li>
                      Оформленням попереднього, та основного договору
                      купівлі-продажу
                    </li>
                  </ul>
                </div>
              </div>
              <div className="service">
                <h3 className="subtitle">
                  Супровід угод на первинному, вторинному ринку нерухомості
                </h3>
                <div className="service-box border text">
                  <span>
                    Що входить у послугу:
                    <br />
                  </span>
                  <ul className="list">
                    <li>
                      Консультація та оцінка ризиків при купівлі нерухомості
                    </li>
                    <li>
                      Ведення переговорів при узгодженні умов договору
                      купівлі-продажу
                    </li>
                    <li>
                      Формування правової та технічної документації необхідної
                      для угоди
                    </li>
                    <li>
                      Допомога клієнту при проведенні взаєморозрахунків та
                      сплаті податків
                    </li>
                    <li>Гарантована безпека від Кудояра Івана Вікторовича</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

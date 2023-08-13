import "./Stats.css";

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-wrapper">
          <div className="text-wrapper">
            <h2 className="sec-title">
              Зі мною купувати нерухомість вигідно та надійно
            </h2>
            <p className="text-b">
              Наразі 4% квартир у Києві продається за підробленими документами,
              близько 12% квартир продаються з порушенням чиїхось прав (банків,
              партнерів, подружжя, дітей, забудовника). І лише 84% квартир Києва
              є абсолютно безпечними для покупця. На жаль нотаріус і ріелтор не
              завжди можуть докопатися до істини, та виявити темні плями в
              історії нерухомості. Юрист, консультант при покупці нерухомості
              допоможе Вам розкрити приховані дефекти та безпечно оформити
              угоду.
            </p>
          </div>
          <div className="statistics">
            <div className="statistic-box border">
              <span className="sec-title">30 років</span>
              <p className="text-b">На ринку нерухомості</p>
            </div>
            <div className="statistic-box border">
              <span className="sec-title">400 000 000 грн</span>
              <p className="text-b">Грошей клієнтів збережено</p>
            </div>
            <div className="statistic-box border">
              <span className="sec-title">1470</span>
              <p className="text-b">Проведено оцінок ризиків за 10 років</p>
            </div>
            <div className="statistic-box border">
              <span className="sec-title">від 1% до 10%</span>
              <p className="text-b">Економія грошей замовника</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

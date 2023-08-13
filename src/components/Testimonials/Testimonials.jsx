import Button from "../../common/Button/Button";
import { testimonials } from "../../data";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <div className="testimonials-background" id="testimonials">
      <div className="container">
        <section className="testimonials">
          <h2 className="sec-title">Відгуки клієнтів</h2>
          <div className="testimonials-wrapper">
            {testimonials.length !== 0 &&
              testimonials.map((customer) => (
                <div
                  className={`testimonial border ${
                    customer.text.length > 300 ? "" : "short"
                  }`}
                  key={customer.text.slice(0, 50)}
                >
                  <span className="naming">{customer.name}</span>
                  <p className="customer-text">{customer.text}</p>
                  {customer.text.length > 300 && <Button className="customer-btn" articleBtn />}
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}

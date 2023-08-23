import Testimonial from "./Testimonial/Testimonial";
import Button from "../../common/Button/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { testimonials } from "../../data";
import { useState } from "react";
import "./Testimonials.css";

export default function Testimonials() {
  const [modal, setModal] = useState("");
  const testimonialsArr = testimonials.reverse();
  return (
    <>
      <div className="testimonials-background" id="testimonials">
        <div className="container">
          <section className="testimonials">
            <h2 className="sec-title">Відгуки клієнтів</h2>
            <div className="testimonials-wrapper">
              {testimonialsArr.length !== 0 &&
                testimonialsArr.map((customer) => (
                  <div
                    className={`testimonial bordered ${
                      customer.text.length > 300 ? "" : "short"
                    }`}
                    key={customer.text.slice(0, 50)}
                  >
                    <span className="naming">{customer.name}</span>
                    <p className="customer-text">{customer.text}</p>
                    {customer.text.length > 300 && (
                      <Button
                        className="customer-button"
                        onClick={() => setModal(customer.name)}
                        articleBtn
                      />
                    )}
                    {modal ? (
                      <Testimonial
                        customer={customer}
                        modal={modal}
                        setModal={setModal}
                      />
                    ) : null}
                  </div>
                ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

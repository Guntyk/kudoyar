import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";

export default function Testimonial({ customer, modal, setModal }) {
  return (
    <>
      {customer.name === modal ? (
        <Modal isOpen={modal} toggle={() => setModal(false)}>
          <ModalHeader>
            <span className="subtitle">{customer.name}</span>
          </ModalHeader>
          <ModalBody>
            <p className="text">{customer.text}</p>
          </ModalBody>
        </Modal>
      ) : null}
    </>
  );
}

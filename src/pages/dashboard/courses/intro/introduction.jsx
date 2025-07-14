import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./intro.css";
import ControlledCarousel from "./carousel";
const Introduction = ({ show, onHide, slides }) => {
  return (
    <Modal show={show} fullscreen={true} onHide={onHide}>
      <Modal.Header className="solana-modal" closeButton>
        <Modal.Title>Lesson</Modal.Title>
      </Modal.Header>
      <Modal.Body className="solana-content">
        <ControlledCarousel slides={slides} />
      </Modal.Body>
      <Modal.Footer className="solana-footer">
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Introduction;

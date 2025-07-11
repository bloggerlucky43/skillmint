import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "./intro.css";
import ControlledCarousel from "./carousel";
const Introduction = ({ show, onHide }) => {
  return (
    <Modal show={show} fullscreen={true} onHide={onHide}>
      <Modal.Header className="solana-modal" closeButton>
        <Modal.Title>Introduction to Solana</Modal.Title>
      </Modal.Header>
      <Modal.Body className="solana-content">
        <p>
          <ControlledCarousel />
        </p>
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

import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="bi-menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="bi bi-list"
          viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        style={{ backgroundColor: "#080c1d", color: "white", width: "80%" }}>
        <Offcanvas.Header>
          <button
            type="button"
            className="btn-close"
            style={{
              filter: "invert(1)", // make it white
              position: "absolute",
              top: "1rem",
              right: "1rem",
            }}
            onClick={handleClose}
            aria-label="Close"
          />
          <Offcanvas.Title className="sm-logo" onClick={handleClick}>
            <img
              src="/images/SM-removebg-preview.png"
              alt="logo"
              loading="lazy"
            />
            <h1>SkillMint</h1>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="drop-list">
            <div className="drop-section">
              <h2>Learn</h2>
              <Link to="/en/dashboard">Courses</Link>
              <Link to="/en/learn/course">Minis</Link>
              <hr />
            </div>
            <div className="drop-section">
              <h2>Opportunities</h2>
              <Link>Earn</Link>
              <Link>Open Source</Link>
              <hr />
            </div>
            <div className="drop-section">
              <h2>Community</h2>
              <Link>Leaderboard</Link>
              <Link>Discord</Link>
              <Link>My Profile</Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;

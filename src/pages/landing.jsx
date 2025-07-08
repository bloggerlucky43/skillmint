import { useRef } from "react";
import { Link } from "react-router-dom";
import Headline from "./sections/headline";
import MainSection from "./sections/mainsection";
import Section from "./sections/section";
import Faq from "./sections/faq";
import { useState } from "react";

const Landing = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const featureRef = useRef(null);
  const faqRef=useRef(null)

  const handleOpen = () => setShowDrawer(true);
  const handleClose = () => setShowDrawer(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const scrollToSection = (ref, e) => {
    e.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page">
      <div className="general-container">
        <div className="nav">
          <div className="logo">
            <img
              src="/images/SM-removebg-preview.png"
              alt="logo"
              loading="lazy"
            />
            <h1>SkillMint</h1>
          </div>
          <div className="links">
            <ul>
              <li>
                <a
                  href='#'
                  onClick={(e) => scrollToSection(featureRef, e)}>
                  Features
                </a>
              </li>
              <li>
                <Link to="/en/dashboard">Courses</Link>
              </li>
              <li>
                <Link to="/en/leaderboard">LeaderBoard</Link>
              </li>
              <li>
                <Link to="/en/profile">Profile</Link>
              </li>
              <li>
                <a href="#"
                 onClick={(e) => scrollToSection(faqRef, e)}
                >Faq</a>
              </li>
            </ul>
          </div>

          <div className="buttons">
            <button id="login" onClick={handleOpenModal}>
              Login
            </button>
            <button id="register" onClick={handleOpen}>
              Registration
            </button>
          </div>
        </div>

        <div className="subheadline">
          <Headline />
        </div>
        <div>
          <Section ref={featureRef} />
        </div>
        <div className="main-section">
          <MainSection sectionRef={featureRef} />
        </div>

        {/* Faq section */}
        <div>
          <Faq questionRef={faqRef}/>
        </div>
      </div>

      {showModal && (
        <div>
          {/* Overlay */}
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            onClick={handleCloseModal}></div>

          {/* Slide-in Drawer */}
          <div className="position-fixed top-0 end-0 bg-dark text-white h-100 shadow form-bg">
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom border-secondary">
              <h5 className="mb-0">Sign in</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={handleCloseModal}></button>
            </div>

            <div className="p-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="signupEmail" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control bg-secondary text-white"
                    id="signupEmail"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="signupPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control bg-secondary text-white"
                    id="signupPassword"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn w-100 text-white fw-bold"
                  style={{
                    backgroundColor: "#0a0f24",
                  }}>
                  Log In
                </button>
              </form>

              <p className="mt-4 text-center text-light">
                Forgot Password?{" "}
                <Link to="#" className="text-info text-decoration-none">
                  Click here
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}

      {showDrawer && (
        <div>
          {/* Overlay */}
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            onClick={handleClose}></div>

          {/* Slide-in Drawer */}
          <div className="position-fixed top-0 end-0 bg-dark text-white h-100 shadow form-bg">
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom border-secondary">
              <h5 className="mb-0">Sign Up</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={handleClose}></button>
            </div>

            <div className="p-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="signupEmail" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control bg-secondary text-white"
                    id="signupEmail"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="signupPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control bg-secondary text-white"
                    id="signupPassword"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="signupConfirm" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control bg-secondary text-white"
                    id="signupConfirm"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn w-100 text-white fw-bold"
                  style={{
                    backgroundColor: "#0a0f24",
                  }}>
                  Sign Up
                </button>
              </form>

              <p className="mt-4 text-center text-light">
                Already have an account?{" "}
                <Link to="#" className="text-info text-decoration-none">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;

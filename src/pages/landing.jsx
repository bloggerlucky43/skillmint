import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Headline from "./sections/headline";
import MainSection from "./sections/mainsection";
import Section from "./sections/section";
import Faq from "./sections/faq";
import { useState } from "react";
import Sidebar from "./sections/offcanvas";

const bApp = import.meta.env.VITE_PUBLIC_API_URL_LIVE;
console.log("bApp value:", bApp);
console.log("ENV Check:", import.meta.env.VITE_PUBLIC_API_URL_LIVE);

const Landing = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const featureRef = useRef(null);
  const faqRef = useRef(null);
  const navRef = useRef(null);

  const handleOpen = () => setShowDrawer(true);
  const handleClose = () => setShowDrawer(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const scrollToSection = (ref, e) => {
    e.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password) {
      alert("Please fill in all the fields");
      setLoading(false);
      return;
    }

    if (password.trim() !== confirmPassword.trim()) {
      setLoading(false);
      setMessage("Password mismatch");
      return;
    }

    try {
      const res = await fetch(`${bApp}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, confirmPassword }),
      });

      const data = await res.json();
      // console.log(data);

      if (res.ok) {
        alert("Sign up successful");
        setMessage(data.message);
        setShowModal(true);
        setShowDrawer(false);
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password) {
      alert("Please fill in all the fields");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${bApp}/api/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setMessage(data.message);
        navigate("/en/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="general-container">
        <div className="nav">
          <div className="side-bar">
            <Sidebar />
          </div>
          <div className="logo" onClick={handleClick}>
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
                <a href="#" onClick={(e) => scrollToSection(featureRef, e)}>
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
                <a href="#" onClick={(e) => scrollToSection(faqRef, e)}>
                  Faq
                </a>
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
          <Headline mainref={navRef} />
        </div>
        <div>
          <Section />
        </div>
        <div className="main-section">
          <MainSection sectionRef={featureRef} />
        </div>

        {/* Faq section */}
        <div>
          <Faq questionRef={faqRef} />
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
              <form onSubmit={handleSubmitLogin}>
                <div className="mb-3">
                  <label htmlFor="signupEmail" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control bg-secondary text-white"
                    id="signupEmail"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn w-100 text-white fw-bold"
                  style={{
                    backgroundColor: "#0a0f24",
                  }}
                  disabled={loading}>
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"></span>
                      Authenticating...
                    </>
                  ) : (
                    "Log In"
                  )}
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
              <form onSubmit={handleSubmitSignUp}>
                <div className="mb-3">
                  <label htmlFor="signupEmail" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control bg-secondary text-white"
                    id="signupEmail"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <p style={{ color: "red" }}>{message}</p>

                <button
                  type="submit"
                  className="btn w-100 text-white fw-bold"
                  style={{
                    backgroundColor: "#0a0f24",
                  }}
                  disabled={loading}>
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"></span>
                      Signing up...
                    </>
                  ) : (
                    "Sign up"
                  )}
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

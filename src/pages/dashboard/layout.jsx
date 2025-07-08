import { Link, useNavigate } from "react-router-dom";
const Layout = () => {
  const navigate = useNavigate();

  const clickFunction = () => {
    navigate("/");
  };
  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <div className="dashboard-nav">
          <div className="dashboard-logo">
            <img
              src="/images/SM-removebg-preview.png"
              alt="logo"
              loading="lazy"
            />
            <h1 onClick={clickFunction}>SkillMint</h1>
          </div>

          <div className="dashboard-links">
            <Link to="/en/dashboard">Courses</Link>
            <Link to="/en/learn/course">My Learning</Link>
            <Link>LeaderBoard</Link>
            <Link>Tasks</Link>
            <Link to="/en/profile">Profile</Link>
          </div>

          <div className="dashboard-svgs">
            <div className="subsvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-chat-left"
                viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              </svg>
            </div>
            <div className="subsvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-bell"
                viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
              </svg>
            </div>
            <div className="subsvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-award"
                viewBox="0 0 16 16">
                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
              </svg>
            </div>
            <div className="subsvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-lightning-charge"
                viewBox="0 0 16 16">
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z" />
              </svg>
            </div>
          </div>
          <div className="dashboard-profile">
            <h3>FA</h3>
          </div>
        </div>
      </div>
    </div>
    // <>
    //   <div className="side-bar">
    //     <div className="side-bar-container">
    //       <div className="side-logo">
    //         <img src="/images/SM-removebg-preview.png" alt="" />
    //       </div>

    //       <div className="side-bar-navs">
    //         <Link>Dashboard</Link>
    //         <Link>Courses</Link>
    //         <Link>Tasks</Link>
    //         <Link>Profile</Link>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default Layout;

import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Headline = ({ mainRef, handleOpen }) => {
  return (
    <>
      <div className="sub-head-container" ref={mainRef}>
        <div className="sub-container mx-3">
          <h1>
            Learn Web3. <br />
            Earn Rewards. <br /> Build the Future.
          </h1>
          <p>
            SkillMint is a Web3 learn-to-earn platform where you complete tasks,
            master blockchain skills, and earn real tokens & NFTs.
          </p>
          <div className="btn-started">
            <button onClick={handleOpen}>
              <Link>Get Started</Link>
            </button>
            <button id="whitepaper">
              <Link>View WhitePaper</Link>
            </button>
          </div>
        </div>
        <div className="animation">
          <DotLottieReact
            src="https://lottie.host/d8db98ad-05d2-4277-b6ba-668203253507/FYYEkPGdhS.lottie"
            loop
            autoplay
            background="transparent"
            className="hero-animation"
          />
        </div>
      </div>
    </>
  );
};

export default Headline;

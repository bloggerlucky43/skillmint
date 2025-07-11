import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

function ControlledCarousel({ onSubmit }) {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      title: "What is Solana?",
      text: "Solana is a high-performance blockchain that supports fast, low-cost transactions. It's designed to handle thousands of transactions per second, making it suitable for scalable apps like DeFi, NFTs, and games.",
    },
    {
      title: "Why Solana over other blockchains?",
      text: "Unlike Ethereum, which suffers from high gas fees and congestion, Solana uses a unique Proof of History (PoH) system, combined with Proof of Stake (PoS), allowing for faster consensus and cheaper transactions",
    },
    {
      title: "Developer Environment Setup",
      text: "",
    },
  ];

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const handleNext = () => {
    if (index < slides.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(); // custom action from parent
    } else {
      alert("Introduction completed!");
    }
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={() => {}}
      indicators={false}
      interval={null}>
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "300px", padding: "2rem" }}>
            <h3>{slide.title}</h3>
            <p>{slide.text}</p>

            <div className="mt-4 d-flex gap-3">
              {index > 0 && (
                <Button variant="secondary" onClick={handlePrev}>
                  Prev
                </Button>
              )}
              {index < slides.length - 1 ? (
                <Button variant="primary" onClick={handleNext}>
                  Next
                </Button>
              ) : (
                <Button variant="success" onClick={handleSubmit}>
                  Submit
                </Button>
              )}
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;

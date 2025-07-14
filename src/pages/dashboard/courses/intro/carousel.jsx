import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

function ControlledCarousel({ slides = [], onSubmit }) {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const handleNext = () => index < slides.length - 1 && setIndex(index + 1);

  const handleSubmit = () => {
    onSubmit ? onSubmit() : alert("Lesson completed!");
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

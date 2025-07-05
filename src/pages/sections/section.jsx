const images = [
  "/images/bnb-removebg-preview.png",
  "/images/starknet-removebg-preview.png",
  "/images/avalance-removebg-preview.png",
  "/images/solana-removebg-preview.png",
  "/images/polygon-removebg-preview.png",
];

const Section = () => {
  return (
    <div className="section-container">
      <h1>Proudly sponsored by...</h1>
      <div className="marquee-container">
        <div className="marquee">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`img-${index}`} />
          ))}
          {/* Repeat for smooth infinite loop */}
          {images.map((src, index) => (
            <img key={`clone-${index}`} src={src} alt={`img-${index}`} />
          ))}
          {/* Repeat for loop */}
          {images.map((src, index) => (
            <img key={`clone-${index}`} src={src} alt={`img-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;

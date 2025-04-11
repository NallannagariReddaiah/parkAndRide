import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/customCarousel.css";

const CustomCarousel = () => {
  const images = [
    "/images/eq0ctP2iTrmgnwwLyIgppw.webp",
    "/images/Su51uDkTQ8-XRZeiLGtMOw.webp",
    "/images/sv0LnemOSWmcEvmJJ7qWPA.jpeg",
  ];

  return (
    <div className="custom-carousel-container">
      <Carousel>
        {images.map((src, idx) => (
          <Carousel.Item key={idx}>
            <img
              src={src}
              alt={`Slide ${idx}`}
              className="d-block w-100"
              style={{ height: '85vh', objectFit: 'cover', borderRadius: '20px' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;

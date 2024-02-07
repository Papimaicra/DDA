import Carousel from "react-bootstrap/Carousel";
import FirstImage from "./CarouselImages/FirstImage";
import SecondImage from "./CarouselImages/SecondImage";
import ThirdImage from "./CarouselImages/ThirdImage";

const CarouselHonda = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <FirstImage text="First slide" />
          <Carousel.Caption>
            <h3>Motos de ultima generacion</h3>
            <p>Motos de calidad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <SecondImage text="Second slide" />
          <Carousel.Caption>
            <h3>Motos de calidad</h3>
            <p>Nuestras motos honda mas vendidas en el mundo.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ThirdImage text="Third slide" />
          <Carousel.Caption>
            <h3>nuevos colores</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselHonda;

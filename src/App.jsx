import CarouselHonda from "./components/CarouselHonda";
import CarForm from "./components/CarsForm";
import CarList from "./components/ListCars";
import NavbarMenu from "./components/Navbar";

function App() {
  return (
    <>
      <NavbarMenu />
      <CarouselHonda />
      <div className="container">
        <h1>Añade un carro Mami</h1>
        <CarForm />
        <CarList />
      </div>
    </>
  );
}

export default App;

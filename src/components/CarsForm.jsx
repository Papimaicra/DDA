import { useState } from "react";

const CarForm = () => {
  //valores iniciales
  const [car, setCar] = useState({
    name: "",
    model: "",
    brand: "",
    color: "",
    image: null,
  });
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener los datos existentes del localStorage o inicializar un array vacío
    const existingCars = JSON.parse(localStorage.getItem("cars")) || [];

    // Agregar el nuevo auto al array
    const newCar = { ...car, image: URL.createObjectURL(imageFile) };
    const newCars = [...existingCars, newCar];

    // Guardar el array actualizado en el localStorage
    localStorage.setItem("cars", JSON.stringify(newCars));

    // Limpiar el formulario
    setCar({ name: "", model: "", brand: "", color: "", image: null });
    setImageFile(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={car.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Modelo:</label>
        <input
          type="text"
          className="form-control"
          name="model"
          value={car.model}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Marca:</label>
        <input
          type="text"
          className="form-control"
          name="brand"
          value={car.brand}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Color:</label>
        <input
          type="text"
          className="form-control"
          name="color"
          value={car.color}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Imagen:</label>
        <input
          type="file"
          className="form-control"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar Carro
      </button>
    </form>
  );
};

export default CarForm;

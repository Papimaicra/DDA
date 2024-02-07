import React,{useState,useEffect} from "react";

const ListCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const storedCars = JSON.parse(localStorage.getItem('cars')) || [];
    setCars(storedCars);
  }, []);

  return (
    <div>
      <h2>Listado de Carros</h2>
      {cars.length === 0 ? (
        <p>No hay carros registrados.</p>
      ) : (
        <ul>
          {cars.map((car) => (
            <li key={car.id}>
              <div>
                <h5>{car.name}</h5>
                <p>
                  <strong>Modelo:</strong> {car.model} | <strong>Marca:</strong> {car.brand} |{' '}
                  <strong>Color:</strong> {car.color}
                </p>
              </div>
              <div>
                <img
                  src={car.image}
                  alt={car.name}
                  style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover' }}
                />
              </div>
              {/* Puedes agregar aquí cualquier otro contenido o acciones relacionadas con cada carro */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListCars;

import { useState, useEffect } from 'react';

const Vehicle = ({ id }) => {
  const [vehicle, setVehicle] = useState({});

  // useEffect...
  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = async (vehicleId) => {
    try {
      const response = await fetch(
        'http://localhost:5002/vehicles/' + vehicleId
      );
      if (response.ok) {
        const result = await response.json();
        setVehicle(result);
      }
      // Bör ha felhantering här också...
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Vehicle - {id}</h2>
      <div>
        <span>Årsmodell </span>
        <span>{vehicle.modelYear}</span>
      </div>
    </>
  );
};
export default Vehicle;

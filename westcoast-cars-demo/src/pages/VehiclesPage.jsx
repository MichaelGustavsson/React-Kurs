import { useEffect, useState } from 'react';
import Vehicle from '../components/Vehicle';

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState(null);
  const [vehicleId, setVehicleId] = useState(0);

  // useEffect för att hämta information/data utifrån
  // t ex REST API...
  useEffect(() => {
    // get data...
    // fetch('http://localhost:5001/vehicles').then((response) =>
    //   response.json().then((result) => setVehicles(result))
    // );

    fetchData();
    // clean up...
  }, []); //Depencies, alltså en lista med beroende

  const fetchData = () => {
    try {
      fetch('http://localhost:5001/vehicles').then((response) =>
        response
          .json()
          .then((result) => setVehicles(result))
          .catch((error) => console.log('Det blev fel:', error))
      );
    } catch (error) {
      console.log(error);
    }
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5001/vehicles');
  //     console.log(response);

  //     if (response.ok) {
  //       const result = await response.json();
  //       setVehicles(result);
  //     } else if (response.status === 404) {
  //       console.log('Vi kan inte hitta resursen du söker');
  //     } else {
  //       console.log(response.ok, response.statusText);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <h1>Galleri</h1>
      <ul>
        {vehicles &&
          vehicles.map((vehicle) => (
            <li key={vehicle.id} onClick={() => setVehicleId(vehicle.id)}>
              {vehicle.manufacturer} - {vehicle.model}
            </li>
          ))}
      </ul>
      <Vehicle id={vehicleId} />
    </>
  );
};
export default VehiclesPage;

import { useState, useEffect } from 'react';
import Card from './ui/Card';
import InfoLabel from './ui/InfoLabel';
import InfoText from './ui/InfoText';

const Vehicle = ({ id }) => {
  const [vehicle, setVehicle] = useState(null);

  // useEffect...
  // useLayoutEffect...
  useEffect(() => {
    const fetchData = async (vehicleId) => {
      try {
        if (id === 0) return;

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
    fetchData(id);
  }, [id]);

  return (
    <>
      {vehicle && (
        <Card>
          <h2>Information</h2>
          <InfoLabel caption='Årsmodell' text={vehicle.modelYear} />
          <InfoLabel caption='Antal Km' text={vehicle.mileage} />
          <InfoLabel caption='Pris' text={vehicle.value} />
          <InfoText caption='Beskrivning' text={vehicle.description} />
        </Card>
      )}
    </>
  );
};

export default Vehicle;

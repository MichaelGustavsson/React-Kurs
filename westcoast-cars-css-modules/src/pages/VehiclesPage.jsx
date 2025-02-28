import { useEffect, useState } from 'react';
import Vehicle from '../components/Vehicle';
import PageTitle from '../components/ui/PageTitle';
import GridList from '../components/GridList';

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState(null);
  const [vehicleId, setVehicleId] = useState(0);

  useEffect(() => {
    fetchData();
    // clean up...
  }, []);

  const fetchData = () => {
    try {
      fetch('http://localhost:5002/vehicles').then((response) =>
        response
          .json()
          .then((result) => setVehicles(result))
          .catch((error) => console.log('Det blev fel:', error))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectVehicle = (vehicleId) => {
    setVehicleId(vehicleId);
  };

  return (
    <main>
      <PageTitle title='Vårt Galleri' />
      <GridList vehicles={vehicles} onSelect={handleSelectVehicle} />
      <Vehicle id={vehicleId} />
    </main>
  );
};
export default VehiclesPage;

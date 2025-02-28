import classes from './gridlist.module.css';
import Card from './ui/Card';
import Image from './ui/Image';

const GridList = ({ vehicles, onSelect }) => {
  return (
    <ul className={classes['grid-list']}>
      {vehicles &&
        vehicles.map((vehicle) => (
          <Card key={vehicle.id}>
            <li onClick={() => onSelect(vehicle.id)}>
              <h3>
                {vehicle.manufacturer} - {vehicle.model}
              </h3>
              <Image
                imageUrl={`/images/${vehicle.imageUrl}`}
                alt={vehicle.model}
              />
            </li>
          </Card>
        ))}
    </ul>
  );
};
export default GridList;

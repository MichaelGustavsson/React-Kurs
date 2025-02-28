import classes from './image.module.css';

const Image = ({ imageUrl, alt }) => {
  return <img className={classes.image} src={imageUrl} alt={alt} />;
};

export default Image;

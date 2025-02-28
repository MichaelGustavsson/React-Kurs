import classes from './infolabel.module.css';

const InfoLabel = ({ caption, text }) => {
  return (
    <div className={classes['info-label']}>
      <span>{caption} </span>
      <span>{text}</span>
    </div>
  );
};
export default InfoLabel;

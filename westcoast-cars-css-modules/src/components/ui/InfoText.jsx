import classes from './infolabel.module.css';

const InfoText = ({ caption, text }) => {
  return (
    <div className={classes['info-text']}>
      <span>{caption} </span>
      <p>{text}</p>
    </div>
  );
};
export default InfoText;

import classes from './pagetitle.module.css';

const PageTitle = ({ title }) => {
  return <h1 className={classes['page-title']}>{title}</h1>;
};
export default PageTitle;

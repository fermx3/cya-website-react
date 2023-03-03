import classes from './footer.module.scss';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>
        {`${year} © Cervantes Solis y Asociados S.C. | Todos los derechos
        reservados.`}
      </p>
      <p>
        Designed by{' '}
        <a href='https://webloom.com.mx/' target='_blank'>
          webloom
        </a>
      </p>
    </footer>
  );
};

export default Footer;

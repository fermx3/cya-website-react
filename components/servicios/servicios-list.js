import classes from './servicios-list.module.scss';

const ServiciosList = ({ tiposDeServicio }) => {
  if (!tiposDeServicio) return null;

  return (
    <ul className={classes.serviciosList}>
      {tiposDeServicio.map((tipo) => (
        <li key={tipo}>{tipo}</li>
      ))}
    </ul>
  );
};

export default ServiciosList;

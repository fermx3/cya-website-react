import Image from 'next/image';

import Button from '../ui/button';

import classes from './servicios-card.module.scss';
import ServiciosList from './servicios-list';

const ServiciosCard = ({ servicio, handleOpen }) => {
  const descripcion = servicio.descripcion.split('\n\n', 1);

  return (
    <li className={classes.card}>
      <div className={classes.image}>
        <Image src={servicio.img} alt={servicio.titulo} fill />
      </div>
      <div className={classes.content}>
        <div className={classes.desc}>
          <h4>{servicio.titulo}</h4>
          <p>{descripcion}</p>
          {servicio.tipos && <ServiciosList tiposDeServicio={servicio.tipos} />}
        </div>
        <div className={classes.actions}>
          <Button onClick={() => handleOpen(servicio.id)}>Ver más</Button>
        </div>
      </div>
    </li>
  );
};

export default ServiciosCard;

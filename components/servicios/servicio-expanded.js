import Image from 'next/image';
import Header from '../ui/header';
import classes from './servicio-expanded.module.scss';
import ServiciosList from './servicios-list';

const ServicioExpanded = ({ servicio }) => {
  return (
    <article className={classes.servicioContainer}>
      <div className={classes.closeIcon}>
        <Image
          src='/images/icons/close.svg'
          alt='close button'
          width={15}
          height={15}
        />
      </div>
      <Header titulo={servicio.titulo} subtitulo={servicio.subtitulo} />
      <div className={classes.image}>
        <Image src={servicio.img} alt={servicio.titulo} fill />
      </div>
      <div className={classes.contenido}>
        <p>{servicio.descripcion}</p>
        <ServiciosList tiposDeServicio={servicio.tipos} />
      </div>
    </article>
  );
};

export default ServicioExpanded;

import Image from 'next/image';

import Section, { SECTION_COLOR_CLASSES } from '../layout/section';

import classes from './servicios-section.module.scss';

const servicios = [
  {
    img: '/images/header-img.jpg',
    titulo: 'Servicio 1',
    descripcion: 'Este es el servicio 1',
  },
  {
    img: '/images/header-img.jpg',
    titulo: 'Servicio 2',
    descripcion: 'Este es el servicio 2',
  },
  {
    img: '/images/header-img.jpg',
    titulo: 'Servicio 3',
    descripcion: 'Este es el servicio 3',
  },
];

const ServiciosSection = () => {
  return (
    <Section
      id='servicios'
      titulo='Servicios'
      sectionColor={SECTION_COLOR_CLASSES.secondary}
    >
      <ul className={classes.grid}>
        {servicios.map((servicio) => (
          <li key={servicio.titulo} className={classes.card}>
            <div className={classes.image}>
              <Image src={servicio.img} alt={servicio.titulo} fill />
            </div>
            <div className={classes.desc}>
              <h4>{servicio.titulo}</h4>
              <p>{servicio.descripcion}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default ServiciosSection;

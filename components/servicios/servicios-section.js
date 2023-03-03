import Image from 'next/image';
import { useState } from 'react';

import Section, { SECTION_COLOR_CLASSES } from '../layout/section';

import classes from './servicios-section.module.scss';

const servicios = [
  {
    img: '/images/servicios/contabilidad.jpg',
    titulo: 'Contabilidad',
    descripcion:
      'Ofrecemos una amplia variedad de servicios contables adaptados a las necesidades de nuestros clientes. \nUno de nuestros métodos incluye el servicio en la empresa del cliente, donde nuestros contadores no sustraen información de las operaciones contables, y se emiten todos los libros contables dentro de su empresa. \nTambién ofrecemos el servicio staff en nuestras instalaciones, donde la información se nos entrega en resguardo para el registro y elaboración de los libros contables.',
    tipos: [
      'SERVICIO STAFF',
      'SERVICIO EN LA EMPRESA',
      'SERVICIO DE CONTADOR PUBLICO EN SU EMPRESA ',
    ],
  },
  {
    img: '/images/header-contadores.jpg',
    titulo: 'Servicio 2',
    descripcion: 'Este es el servicio 2',
  },
  {
    img: '/images/header-contadores.jpg',
    titulo: 'Servicio 3',
    descripcion: 'Este es el servicio 3',
  },
];

const ServiciosSection = () => {
  const [servicioIsOpen, setServicioIsOpen] = useState(false);

  return (
    <Section
      id='servicios'
      titulo='Servicios'
      subtitulo='Ofrecemos soluciones empresariales y personales adaptadas a tus necesidades financieras. Con un equipo de profesionales altamente capacitados, nos enfocamos en brindar un servicio personalizado a clientes de todos los tamaños y sectores.'
      sectionColor={SECTION_COLOR_CLASSES.secondary}
    >
      <ul className={classes.grid}>
        {servicios.map((servicio) => {
          const descripcion = servicioIsOpen
            ? servicio.descripcion
            : servicio.descripcion.split('\n', 1);

          return (
            <li
              key={servicio.titulo}
              className={classes.card}
              onClick={() => setServicioIsOpen(!servicioIsOpen)}
            >
              <div className={classes.image}>
                <Image src={servicio.img} alt={servicio.titulo} fill />
              </div>
              <div className={classes.desc}>
                <h4>{servicio.titulo}</h4>
                <p>{descripcion}</p>
                {servicio.tipos && (
                  <ul>
                    {servicio.tipos.map((tipo) => (
                      <li key={tipo}>{tipo}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default ServiciosSection;

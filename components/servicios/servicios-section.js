import { Fragment, useState } from 'react';

import Section, { SECTION_COLOR_CLASSES } from '../layout/section';
import Modal from '../ui/modal';
import ServicioExpanded from './servicio-expanded';
import ServiciosCard from './servicios-card';

import classes from './servicios-section.module.scss';

const ServiciosSection = ({ servicios }) => {
  const [isClicked, setIsClicked] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (id) => {
    setIsClicked(servicios.find((servicio) => servicio.id === id));
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsClicked([]), setIsOpen(false);
  };

  return (
    <Fragment>
      <Section
        id='servicios'
        titulo='Servicios'
        subtitulo='Ofrecemos soluciones empresariales y personales adaptadas a tus necesidades financieras. Con un equipo de profesionales altamente capacitados, nos enfocamos en brindar un servicio personalizado a clientes de todos los tamaños y sectores.'
        sectionColor={SECTION_COLOR_CLASSES.secondary}
      >
        <ul className={classes.grid}>
          {servicios.map((servicio) => (
            <ServiciosCard
              key={servicio.titulo}
              servicio={servicio}
              handleOpen={handleOpen}
            />
          ))}
        </ul>
        <Modal open={isOpen} onClose={handleClose}>
          <ServicioExpanded servicio={isClicked} />
        </Modal>
      </Section>
    </Fragment>
  );
};

export default ServiciosSection;

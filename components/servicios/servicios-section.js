import { Fragment, useEffect, useState } from 'react';

import Section, { SECTION_COLOR_CLASSES } from '../layout/section';
import Modal from '../ui/modal';
import ServicioExpanded from './servicio-expanded';
import ServiciosCard from './servicios-card';
import Button, { BUTTON_TYPE_CLASSES } from '../ui/button';

import classes from './servicios-section.module.scss';

const ServiciosSection = ({ servicios }) => {
  const [isClicked, setIsClicked] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [serviciosLoaded, setServiciosLoaded] = useState(servicios.slice(0, 3));
  const [noMoreToLoad, setNoMoreToLoad] = useState(false);

  const handleOpen = (id) => {
    setIsClicked(servicios.find((servicio) => servicio.id === id));
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsClicked([]), setIsOpen(false);
  };

  const handleLoadMore = () => {
    const displayedServiciosLength = serviciosLoaded.length;
    const loadNewServicios = servicios.slice(
      displayedServiciosLength,
      displayedServiciosLength + 3
    );

    if (loadNewServicios.length === 0) setNoMoreToLoad(true);

    const newServicios = serviciosLoaded.concat(loadNewServicios);

    setServiciosLoaded(newServicios);
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
          {serviciosLoaded.map((servicio) => (
            <ServiciosCard
              key={servicio.id}
              servicio={servicio}
              handleOpen={handleOpen}
            />
          ))}
        </ul>
        <div className={classes.loadMoreBtn}>
          {!noMoreToLoad ? (
            <Button
              onClick={handleLoadMore}
              buttonType={BUTTON_TYPE_CLASSES.secondary}
            >
              Cargar más
            </Button>
          ) : (
            <p>Ya haz desplegado todos los servicios.</p>
          )}
        </div>
        <Modal open={isOpen} onClose={handleClose}>
          <ServicioExpanded servicio={isClicked} />
        </Modal>
      </Section>
    </Fragment>
  );
};

export default ServiciosSection;

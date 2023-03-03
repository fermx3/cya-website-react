import Section, { SECTION_COLOR_CLASSES } from '../layout/section';

import classes from './mision.module.scss';

const Mision = () => {
  return (
    <Section
      sectionColor={SECTION_COLOR_CLASSES.dark}
      id='mision'
      titulo='Nuestra Misión'
    >
      <p className={classes.firstP}>
        ¡En CERVANTES SOLIS Y ASOCIADOS S.C. estamos aquí para ayudar a empresas
        de todo tipo! Ya sea una pequeña, mediana o gran empresa, ya sea una
        persona física o moral, nuestro equipo de profesionales brinda asesoría
        específica en materia fiscal. Con más de una década de experiencia
        directa en la atención a nuestros clientes, estamos comprometidos a
        brindar servicios de alta calidad y confianza.
      </p>
      <p>
        Además de servicios de Contaduría Pública, en nuestro despacho ofrecemos
        asesoramiento en Administración y Derecho. Trabajamos con
        procedimientos, normas y leyes aprobadas para la profesión, lo que
        permite que nuestros clientes desarrollen todo su potencial y alcancen
        un crecimiento sostenible. En CERVANTES SOLIS Y ASOCIADOS S.C., nuestra
        prioridad es brindar tranquilidad a nuestros clientes en todo momento.
      </p>
    </Section>
  );
};

export default Mision;

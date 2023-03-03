import Image from 'next/image';

import Button, { BUTTON_TYPE_CLASSES } from '../ui/button';

import classes from './hero.module.scss';

const Hero = () => {
  return (
    <div className={classes.hero}>
      <header className={classes.header}>
        <div>
          <h1>¡Bienvenidos a CERVANTES SOLIS Y ASOCIADOS S.C.!</h1>
          <p>
            Estamos aquí para brindarte una amplia gama de servicios
            empresariales y personales. Nos esforzamos al máximo para garantizar
            tu confianza, basándonos en la honestidad y profesionalismo que nos
            caracteriza.
          </p>
          <div className={classes.buttonGroup}>
            <Button href='/#contacto'>Contáctanos</Button>
            <Button
              href='/#servicios'
              buttonType={BUTTON_TYPE_CLASSES.transparent}
            >
              Conoce más
            </Button>
          </div>
        </div>
        <div className={classes.mobileImage}>
          <Image src='/images/header-contadores.jpg' alt='contadores' fill />
        </div>
      </header>
      <div className={classes.image}>
        <Image src='/images/header-contadores.jpg' alt='contadores' fill />
      </div>
    </div>
  );
};

export default Hero;

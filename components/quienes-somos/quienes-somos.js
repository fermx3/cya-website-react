import Image from 'next/image';
import Section from '../layout/section';

import classes from './quienes-somos.module.scss';

const QuienesSomosSection = () => {
  return (
    <Section id={'quienes-somos'} titulo='¿Quiénes Somos?'>
      <div className={classes.wrapper}>
        <div className={classes.image}>
          <Image src='/images/quienes-somos.jpg' alt='quienes somos?' fill />
        </div>
        <div className={classes.contenido}>
          <p>
            <strong>Fundado en 1994</strong> por expertos en administración,
            finanzas, contabilidad y derecho, nuestro despacho de contadores
            públicos ha brindado servicios profesionales a empresas de todos los
            sectores: comercial, industrial, científico, de servicios,
            culturales y manufactureros.{' '}
            <strong>
              Nos enorgullece ofrecer a nuestros clientes servicios de alta
              calidad, oportunos y confiables.
            </strong>
          </p>
          <p>
            En un entorno económico en constante cambio, entendemos que la
            política fiscal del gobierno federal puede afectar el presupuesto de
            tu empresa. Por eso, nos dedicamos a brindar asesoría en
            administración, contabilidad, derecho y, especialmente en materia
            fiscal, para{' '}
            <strong>
              ayudar a su empresa a crecer financiera y operativamente de manera
              saludable
            </strong>
            .
          </p>
        </div>
      </div>
    </Section>
  );
};

export default QuienesSomosSection;

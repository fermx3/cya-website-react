import Image from 'next/image';

import Section, { SECTION_COLOR_CLASSES } from '../layout/section';

import classes from './contacto-section.module.scss';

const contactData = [
  {
    icono: '/images/icons/address.svg',
    nombre: 'Dirección',
    contenido: 'Alguna Calle, Alguna Colonia, Alcaldía',
  },
  {
    icono: '/images/icons/phone.svg',
    nombre: 'Teléfono',
    contenido: '55 6284 0594',
  },
];

const ContactoSection = () => {
  return (
    <Section
      id='contacto'
      titulo='Contacto'
      subtitulo='¡No dudes en ponerte en contacto con nosotros! Si tienes alguna duda o necesitas información adicional acerca de nuestros servicios, nuestro equipo está siempre dispuesto a ayudarte. '
      sectionColor={SECTION_COLOR_CLASSES.secondary}
    >
      <div className={classes.contact}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240863.6849589174!2d-99.28369658010038!3d19.391003836008377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1677787951377!5m2!1ses-419!2smx'
          width='100%'
          height='450'
          style={{ border: '0' }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>

        <div className={classes.contactInfo}>
          <h4>Ciudad de México</h4>
          <div>
            {contactData.map((dato) => (
              <div key={dato.nombre} className={classes.dato}>
                <div className={classes.icon}>
                  <Image
                    src={dato.icono}
                    alt={dato.nombre}
                    height={14}
                    width={14}
                  />
                </div>
                <div className={classes.texto}>
                  <p>{`${dato.nombre}:`}</p>
                  <p>{dato.contenido}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactoSection;

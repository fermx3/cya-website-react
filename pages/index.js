import Head from 'next/head';
import { Open_Sans } from 'next/font/google';

import { servicios } from '@/data/servicios';

import Hero from '@/components/hero/hero';
import MainNavigation from '@/components/layout/main-navigation';
import ServiciosSection from '@/components/servicios/servicios-section';
import QuienesSomosSection from '@/components/quienes-somos/quienes-somos';
import ContactoSection from '@/components/contacto/contacto-section';
import Footer from '@/components/footer/footer';
import Mision from '@/components/mision/mision';

const openSans = Open_Sans({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Home({ servicios }) {
  return (
    <>
      <Head>
        <title>Cervantes Solis y Asociados S.C.</title>
        <meta
          name='description'
          content='En Cervantes Solís y Asociados ofrecemos servicios contables integrales para empresas y particulares. Nuestro equipo de profesionales altamente capacitados está listo para proporcionarte soluciones financieras adaptadas a tus necesidades. Desde contabilidad general hasta asesoramiento fiscal, descubre cómo podemos ayudarte a alcanzar tus objetivos financieros hoy mismo.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={openSans.className}>
        <MainNavigation />
        <Hero />
        <ServiciosSection servicios={servicios} />
        <QuienesSomosSection />
        <Mision />
        <ContactoSection />
        <Footer />
      </main>
    </>
  );
}

export const getStaticProps = () => {
  const serviciosModified = servicios.map((servicio) => {
    let newObj = {};

    const newDesc = servicio.descripcion.split('. ').join('.\n\n');

    newObj = { ...servicio, descripcion: newDesc };

    return newObj;
  });

  return {
    props: {
      servicios: serviciosModified,
    },
  };
};

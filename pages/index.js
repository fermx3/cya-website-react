import Head from 'next/head';
import { Libre_Baskerville, Montserrat, Open_Sans } from 'next/font/google';

import Hero from '@/components/hero/hero';
import MainNavigation from '@/components/layout/main-navigation';
import ServiciosSection from '@/components/servicios/servicios-section';
import QuienesSomosSection from '@/components/quienes-somos/quienes-somos';

const openSans = Open_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
}); //openSans.classname

const montserrat = Montserrat({ subsets: ['latin'] });
const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={openSans.className}>
        <MainNavigation />
        <Hero />
        <ServiciosSection />
        <QuienesSomosSection />
      </main>
    </>
  );
}

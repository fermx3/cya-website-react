import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import classes from './main-navigation.module.scss';

const navigation = [
  { name: 'Servicios', href: '/#servicios' },
  { name: '¿Quiénes Somos?', href: '/#quienes-somos' },
  { name: 'Contacto', href: '/#contacto' },
];

const MainNavigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={scrolled ? `${classes.nav} ${classes.scrolled}` : classes.nav}
    >
      <div className={classes.logo}>
        <Link href='/'>
          <h1>Cervantes Solis y Asociados S.C.</h1>
        </Link>
      </div>
      <div className={classes.hamburguerIcon}>
        {menuOpen ? (
          <div className={classes.mobileMenu}>
            <Image
              src='/images/icons/close.svg'
              alt='menu'
              width={15}
              height={15}
              onClick={() => setMenuOpen(false)}
            />
            <ul>
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <Image
            src='/images/icons/hamburguer.svg'
            alt='menu'
            width={15}
            height={15}
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>
      <ul className={classes.menu}>
        {navigation.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import classes from './main-navigation.module.scss';

const navigation = [
  { name: 'Servicios', href: '/#servicios' },
  { name: 'Link 2', href: '/' },
  { name: 'Link 3', href: '/' },
];

const MainNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={classes.nav}>
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
                  <Link href={item.href}>
                    <a onClick={() => setMenuOpen(false)}>{item.name}</a>
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
      <ul className={classes.menu} onClick={() => setMenuOpen(false)}>
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

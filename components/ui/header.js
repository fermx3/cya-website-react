import classes from './header.module.scss';

const Header = ({ titulo, subtitulo }) => {
  return (
    <header className={classes.header}>
      <h2 className={classes.titulo}>{titulo}</h2>
      {subtitulo && <p className={classes.subtitulo}>{subtitulo}</p>}
    </header>
  );
};

export default Header;

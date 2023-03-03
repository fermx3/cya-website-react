import classes from './section.module.scss';

export const SECTION_COLOR_CLASSES = {
  base: 'base',
  secondary: 'secondary',
  dark: 'dark',
};

const getSectionColor = (sectionColor = SECTION_COLOR_CLASSES.base) =>
  ({
    [SECTION_COLOR_CLASSES.base]: classes.section,
    [SECTION_COLOR_CLASSES.secondary]: classes.secondaryColor,
    [SECTION_COLOR_CLASSES.dark]: classes.dark,
  }[sectionColor]);

const Section = ({ children, id, titulo, subtitulo, sectionColor }) => {
  const CustomSectionColor = getSectionColor(sectionColor);

  return (
    <section id={id} className={CustomSectionColor}>
      <div>
        <header>
          <h2 className={classes.titulo}>{titulo}</h2>
          {subtitulo && <p className={classes.subtitulo}>{subtitulo}</p>}
        </header>
        {children}
      </div>
    </section>
  );
};

export default Section;

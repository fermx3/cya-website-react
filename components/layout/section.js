import classes from './section.module.scss';

export const SECTION_COLOR_CLASSES = {
  base: 'base',
  secondary: 'secondary',
};

const getSectionColor = (sectionColor = SECTION_COLOR_CLASSES.base) =>
  ({
    [SECTION_COLOR_CLASSES.base]: classes.section,
    [SECTION_COLOR_CLASSES.secondary]: classes.secondaryColor,
  }[sectionColor]);

const Section = ({ children, id, titulo, sectionColor }) => {
  const CustomSectionColor = getSectionColor(sectionColor);

  return (
    <section id={id} className={CustomSectionColor}>
      <div>
        <h2>{titulo}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;

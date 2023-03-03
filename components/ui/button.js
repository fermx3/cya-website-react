import Link from 'next/link';
import classes from './button.module.scss';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  secondary: 'secondary',
  transparent: 'transparent',
};

const getButtonType = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: classes.btn,
    [BUTTON_TYPE_CLASSES.secondary]: classes.secondaryBtn,
    [BUTTON_TYPE_CLASSES.transparent]: classes.transparentBtn,
  }[buttonType]);

const Button = ({ children, href, buttonType, onClick }) => {
  const CustomButton = getButtonType(buttonType);

  if (href) {
    return (
      <Link href={href} className={CustomButton}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={CustomButton}>
      {children}
    </button>
  );
};

export default Button;

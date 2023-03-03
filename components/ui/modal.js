import classes from './modal.module.scss';

const Modal = ({ children, open, onClose }) => {
  if (!open) return null;

  return (
    <section className={classes.modal} ariaModal='true' onClick={onClose}>
      {children}
    </section>
  );
};

export default Modal;

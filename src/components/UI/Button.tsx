import React, { FunctionComponent } from 'react';
import styles from './Button.module.scss';

export enum ButtonType {
 MAIN,
 QUIZ
}

interface IButton {
  onClick: () => void;
  type: ButtonType;
}

const Button: FunctionComponent<IButton> = ({onClick, children, type})  => {

  let btnClasses
  if (type === ButtonType.MAIN) {
    btnClasses = styles['main']
  } else if (type === ButtonType.QUIZ) {
    btnClasses = styles['quiz']
  }

  return (
    <button className={`${styles['button']} ${btnClasses}`} onClick={onClick}>{children}</button>
  );
}

export default Button;
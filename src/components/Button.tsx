import React, { FC } from 'react';

interface IButton {
  className: string;
  value: string;
  id: string;
  onClick: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const Button: FC<IButton> = ({ className, onClick, value, id }: IButton) => (
  <span className={className} onClick={onClick} id={id}>
    {value}
  </span>
);

export default Button;

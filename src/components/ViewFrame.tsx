import React, { ReactElement } from 'react';

interface IViewFrame {
  className: string;
}

const ViewFrame: React.FC<IViewFrame> = ({
  className,
}: IViewFrame): ReactElement => {
  return (
    <nav className={`${className} container nav`}>
      <div className="centered-content" />
    </nav>
  );
};

export default ViewFrame;

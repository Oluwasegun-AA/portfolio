import React, { FC, JSXElementConstructor, ReactElement } from 'react';

interface ISection {
  leftPane?: ReactElement<string, string | JSXElementConstructor<string>>;
  centerPane: ReactElement<string, string | JSXElementConstructor<string>>;
  rightPane?: ReactElement<string, string | JSXElementConstructor<string>>;
  className?: string;
}

const BodySubSection: FC<ISection> = ({
  leftPane,
  centerPane,
  rightPane,
  className,
}: ISection): ReactElement => {
  const parentClass = `section_container ${className}`;
  const leftPaneClass = `section_column_left ${className}_leftPane`;
  const centerPaneClass = `section_column_center ${className}_centerPane`;
  const rightPaneClass = `section_column_right ${className}_rightPane`;
  return (
    <section className={parentClass}>
      <div className={leftPaneClass}>{leftPane}</div>
      <div className={centerPaneClass}>{centerPane}</div>
      <div className={rightPaneClass}>{rightPane}</div>
    </section>
  );
};

export default BodySubSection;

import React, { ReactElement } from 'react';

interface IPageTitle {
  titleText?: string;
  descriptionText?: string;
  className?: string;
}

const PageTitle: React.FC<IPageTitle> = ({
  titleText,
  descriptionText,
  className,
}: IPageTitle): ReactElement => {
  const parentClass = `container title_container ${className}`;
  return (
    <div className={parentClass}>
      <section className="centered_content page_title flex--column">
        <div className="section_column_left" />
        <div className="section_column_center">
          <div>
            <div className="title">{titleText}</div>
            <div className="title_description">{descriptionText}</div>
          </div>
        </div>
        <div className="section_column_right" />
      </section>
    </div>
  );
};

export default PageTitle;

import React, { ReactElement } from 'react';

interface IPageTitle {
  titleText?: string;
  descriptionText: string;
}

const PageTitle: React.FC<IPageTitle> = ({
  titleText,
  descriptionText,
}: IPageTitle): ReactElement => {
  return (
    <div className="container title_container">
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

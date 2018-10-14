import React from 'react';

const arrows = () => (
  <div className="c-arrows">
    <svg className="c-arrows__container">
      <path className="c-arrows__item c-arrows__item--first" d="M0 0 L30 32 L60 0" />
      <path className="c-arrows__item c-arrows__item--second" d="M0 20 L30 52 L60 20" />
      <path className="c-arrows__item c-arrows__item--third" d="M0 40 L30 72 L60 40" />
    </svg>
  </div>
);

export default arrows;

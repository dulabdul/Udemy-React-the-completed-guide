import React from 'react';

export default function ConceptItem({ title, imageUrl, description }) {
  return (
    <li className='concept'>
      <img
        src={imageUrl}
        alt={title}
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

import React from 'react';
import ConceptItem from './ConceptItem';

export default function Concept({ data }) {
  return (
    <ul id='concepts'>
      {data.map((item, index) => {
        return (
          <ConceptItem
            key={index}
            title={item.title}
            imageUrl={item.image}
            description={item.description}
          />
        );
      })}
    </ul>
  );
}

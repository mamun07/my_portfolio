import React from 'react';
import {Title} from './component.style'

export default function title(props) {
  return(
      <Title>
          <h2>{props.title}</h2>
      </Title>
  );
}

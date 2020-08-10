import React from 'react';

import { Author, Container, Divider, Quote } from './styles';

function QuoteBox({ quote, author }) {
  return (
    <Container>
      <Quote>"{quote}"</Quote>
      <Divider />
      <Author>{author}</Author>
    </Container>
  );
}

export default QuoteBox;

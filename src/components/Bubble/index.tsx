import React from 'react';

import { Container } from './styles';

interface BubbleProps {
  value: number;
}

export const Bubble = ({ value }: BubbleProps) => {
  return <Container> {value}</Container>;
};

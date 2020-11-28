import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Spinner } from '..';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  showSpinner?: boolean;
}

export const Button = ({ children, showSpinner, ...rest }: ButtonProps) => {
  return (
    <Container {...rest}>
      {showSpinner ? <Spinner /> : children && children}
    </Container>
  );
};

import React, {
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';

import { FaEye } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { Container, IconPassword } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: IconType;
}

export const Input = ({ startIcon: StartIcon, ...rest }: InputProps) => {
  const [isActive, setIsActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputEl = useRef((undefined as unknown) as HTMLInputElement);

  const handleContainerOnClick = useCallback(() => {
    inputEl?.current?.focus();
  }, []);

  const onFocus = useCallback(() => {
    setIsActive(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsActive(false);
  }, []);

  const handleIconPasswordOnClick = useCallback(() => {
    setShowPassword(sp => {
      const show = !sp;

      if (show) {
        inputEl.current.setAttribute('type', 'text');
      } else {
        inputEl.current.setAttribute('type', 'password');
      }

      return show;
    });
  }, []);

  return (
    <Container isActive={isActive} onClick={handleContainerOnClick}>
      <div>{StartIcon && <StartIcon />}</div>
      <input ref={inputEl} onFocus={onFocus} onBlur={onBlur} {...rest} />
      <IconPassword
        showPassword={showPassword}
        onClick={handleIconPasswordOnClick}
      >
        {rest.type === 'password' && <FaEye />}
      </IconPassword>
    </Container>
  );
};

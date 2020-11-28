import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { FaEye } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { Container, IconPassword, Label } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: IconType;
  title?: string;
}

export const Input = ({ startIcon: StartIcon, title, ...rest }: InputProps) => {
  const [isActive, setIsActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [memoPlaceholder, setMemoPlaceHolder] = useState('');
  const inputEl = useRef((undefined as unknown) as HTMLInputElement);

  useEffect(() => {
    if (rest?.placeholder) {
      setMemoPlaceHolder(rest.placeholder);
    }
  }, [rest.placeholder, setMemoPlaceHolder]);

  useEffect(() => {
    if (isActive) {
      inputEl?.current?.setAttribute('placeholder', '');
    } else {
      inputEl?.current?.setAttribute('placeholder', memoPlaceholder);
    }
  }, [isActive, memoPlaceholder]);

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
    <>
      <Label isActive={isActive}>{title}</Label>
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
    </>
  );
};

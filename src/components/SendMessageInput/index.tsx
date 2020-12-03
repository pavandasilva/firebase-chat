import React, { useState, useCallback, useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

import { Container } from './styles';

interface SendMessageInputProps {
  handleSendingMessagesProp: (value: string) => void;
}

export const SendMessageInput = ({
  handleSendingMessagesProp,
}: SendMessageInputProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('');
  const inputEl = useRef((undefined as unknown) as HTMLInputElement);

  const handleContainerOnClick = useCallback(() => {
    inputEl?.current?.focus();
  }, []);

  const handeInputOnFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const handeInputOnBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  const handleInputOnchange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [],
  );

  const handleInputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendingMessages();
    }
  };

  const handleSendingMessages = () => {
    handleSendingMessagesProp(value);
    setValue('');
  };

  return (
    <Container isFocus={isFocus} onClick={handleContainerOnClick}>
      <input
        ref={inputEl}
        placeholder="Type a message..."
        onFocus={handeInputOnFocus}
        onBlur={handeInputOnBlur}
        onChange={handleInputOnchange}
        onKeyDown={handleInputOnKeyDown}
        value={value}
      />
      <FaPaperPlane onClick={handleSendingMessages} />
    </Container>
  );
};

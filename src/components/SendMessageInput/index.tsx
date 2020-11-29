import React, { useState, useCallback, useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

import { Container } from './styles';

interface SendMessageInputProps {
  handleSendingMessages: () => void;
}

export const SendMessageInput = ({
  handleSendingMessages,
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

  return (
    <Container isFocus={isFocus} onClick={handleContainerOnClick}>
      <input
        ref={inputEl}
        placeholder="Type a message..."
        onFocus={handeInputOnFocus}
        onBlur={handeInputOnBlur}
        onChange={handleInputOnchange}
        value={value}
      />
      <FaPaperPlane onClick={handleSendingMessages} />
    </Container>
  );
};

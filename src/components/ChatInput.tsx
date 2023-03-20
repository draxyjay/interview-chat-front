import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;

  max-width: 100%;
  width: 100%;
  height: 20px;
  padding: 10px 5px;
  background: var(--grey);
  border-radius: 5px;
  margin-bottom: 10px;

  color: var(--lightGrey);

  &:focus {
    outline: none;
  }
`;

export const ChatInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = props => (
  <Input role="chat-input" {...props} />
);

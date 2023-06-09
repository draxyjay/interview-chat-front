import styled from 'styled-components';

const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;

  background-color: var(--lightPurple);
  color: var(--extraLightGrey);
  font-weight: bold;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;

export const ChatButton = () => {
  return (
    <Button role="chat-button" type="submit">
      Send
    </Button>
  );
};

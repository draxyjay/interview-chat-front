import { memo } from 'react';
import styled from 'styled-components';

const Message = styled.div`
  margin: 10px 5px;
`;

const Username = styled.span<{ textColor: string }>`
  color: ${props => props.textColor};
  margin-right: 10px;
`;

const Text = styled.span`
  color: var(--extraLightGrey);
`;

interface Props {
  user: {
    username: string;
    color: string;
  };
  text: string;
}
export const ChatMessage: React.FC<Props> = memo(({ user: { username, color }, text }) => {
  // console.log('rerender', username + ': ' + text);

  return (
    <Message>
      <Username textColor={color}>{username}:</Username>
      <Text>{text}</Text>
    </Message>
  );
});

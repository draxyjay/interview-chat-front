import { memo } from 'react';
import styled from 'styled-components';

const Message = styled.div`
  margin: 10px 5px;
`;

const Timestamp = styled.span`
  margin-right: 5px;
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
  date: number;
  displayTimestamp: boolean;
}
export const ChatMessage: React.FC<Props> = memo(
  ({ user: { username, color }, text, date, displayTimestamp }) => {
    // console.log('rerender', username + ': ' + text);

    return (
      <Message>
        {displayTimestamp ? (
          <Timestamp>[{new Date(date).toTimeString().split(' ')[0]}]</Timestamp>
        ) : null}
        <Username textColor={color}>{username}:</Username>
        <Text>{text}</Text>
      </Message>
    );
  }
);

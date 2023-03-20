import styled from 'styled-components';
import { Message } from '../models/Message';

import { ChatMessage } from './ChatMessage';

const Box = styled.div`
  flex: 1;
  max-height: 400px;
  overflow-y: scroll;
`;

interface Props {
  messages: Message[];
}
export const ChatBox: React.FC<Props> = ({ messages }) => {
  return (
    <Box id="chat-box" role="chat-box">
      {messages.map(({ user, text, date }) => (
        <ChatMessage key={user + date.toString()} user={user} text={text} />
      ))}
    </Box>
  );
};

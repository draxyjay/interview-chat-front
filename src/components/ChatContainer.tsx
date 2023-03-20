import { FormEvent, SyntheticEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import { useSocketIO } from '../hooks/useSocketIO';
import { Message } from '../models/Message';
import { User } from '../models/User';
import { ChatBox } from './ChatBox';
import { ChatButton } from './ChatButton';
import { ChatInput } from './ChatInput';

const Container = styled.main`
  width: 300px;
  height: 400px;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface Props {
  wsConfig: {
    connectionUrl: string;
    socketPath: string;
  };
  currentUser: User;
}
export const ChatContainer: React.FC<Props> = ({ wsConfig, currentUser }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [formData, setFormData] = useState({ message: '' });

  const updateMessages = (msg: Message) => {
    setMessages(oldMsg => [...oldMsg, msg]);
  };

  const { sendMessage } = useSocketIO<Message>(
    wsConfig.connectionUrl,
    wsConfig.socketPath,
    updateMessages
  );

  const handleChange = useCallback((e: FormEvent<HTMLFormElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData(oldData => ({ ...oldData, [name]: value }));
  }, []);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      message: { value: string };
    };
    const newMessage = target.message.value;
    if (newMessage) {
      sendMessage({ text: newMessage, user: currentUser, date: Date.now() });
    }

    // Reset the form
    setFormData({ message: '' });
  };

  return (
    <Container>
      <ChatBox messages={messages} />
      <form id="chat-form" onChange={handleChange} onSubmit={handleSubmit}>
        <ChatInput id="message" name="message" placeholder="Message..." value={formData.message} />
        <ChatButton />
      </form>
    </Container>
  );
};

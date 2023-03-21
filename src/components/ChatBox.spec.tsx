import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ChatBox } from './ChatBox';

import { Message } from '../models/Message';

describe('ChatBox', () => {
  it('should load and display empty chat box', async () => {
    const messages: Message[] = [];

    render(<ChatBox messages={messages} displayTimestamp={false} />);

    // Box
    const chatBox = screen.queryByRole('chat-box');
    expect(chatBox).toBeEmptyDOMElement();
    expect(chatBox).toBeVisible();
  });

  it('should load and display filled chat box - without timestamp', async () => {
    const messages: Message[] = [
      {
        text: 'message 1',
        user: {
          username: 'jpatel',
          color: '#FFFFFF',
        },
        date: Date.now(),
      },
    ];

    render(<ChatBox messages={messages} displayTimestamp={false} />);

    // Box
    const chatBox = screen.queryByRole('chat-box');
    expect(chatBox).toBeVisible();
    expect(chatBox).not.toBeEmptyDOMElement();
    expect(chatBox).toHaveTextContent('jpatel:message 1');
  });

  it('should load and display filled chat box - with timestamp', async () => {
    const messages: Message[] = [
      {
        text: 'message 1',
        user: {
          username: 'jpatel',
          color: '#FFFFFF',
        },
        date: 1679356217836,
      },
    ];

    render(<ChatBox messages={messages} displayTimestamp={true} />);

    // Box
    const chatBox = screen.queryByRole('chat-box');
    expect(chatBox).toBeVisible();
    expect(chatBox).not.toBeEmptyDOMElement();
    expect(chatBox).toHaveTextContent('[00:50:17]jpatel:message 1');
  });
});

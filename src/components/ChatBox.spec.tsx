import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ChatBox } from './ChatBox';

import { Message } from '../models/Message';

describe('ChatBox', () => {
  it('should load and display empty chat box', async () => {
    const messages: Message[] = [];

    render(<ChatBox messages={messages} />);

    // Box
    const chatBox = screen.queryByRole('chat-box');
    expect(chatBox).toBeEmptyDOMElement();
    expect(chatBox).toBeVisible();
  });

  it('should load and display filled chat box', async () => {
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

    render(<ChatBox messages={messages} />);

    // Box
    const chatBox = screen.queryByRole('chat-box');
    expect(chatBox).toBeVisible();
    expect(chatBox).not.toBeEmptyDOMElement();
    expect(chatBox).toHaveTextContent('jpatel:message 1');
  });
});

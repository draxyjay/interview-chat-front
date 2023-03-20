import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ChatContainer } from './ChatContainer';
import { User } from '../models/User';

describe('ChatContainer', () => {
  it('should load and display empty chat container', async () => {
    const wsConfig = {
      connectionUrl: '',
      socketPath: '',
    };

    const currentUser: User = {
      username: 'jpatel',
      color: '#4873ff',
    };

    render(<ChatContainer wsConfig={wsConfig} currentUser={currentUser} />);

    // Box
    const chatBox = screen.queryByRole('chat-box');
    expect(chatBox).toBeVisible();
    expect(chatBox).toBeEmptyDOMElement();

    // Input
    const chatInput = screen.queryByRole('chat-input');
    expect(chatInput).toBeVisible();
    expect(chatInput).toBeEmptyDOMElement();
    expect(chatInput).toHaveAttribute('placeholder', 'Message...');

    // Button
    const chatButton = screen.queryByRole('chat-button');
    expect(chatButton).toBeVisible();
    expect(chatButton).not.toBeEmptyDOMElement();
    expect(chatButton).toHaveAttribute('type', 'submit');
    expect(chatButton).toHaveTextContent('Send');
  });
});

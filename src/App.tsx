import { ChatContainer } from './components/ChatContainer';
import { User } from './models/User';

import './styles.css';

const App = () => {
  const wsConfig = {
    connectionUrl: 'wss://api.dev.stories.studio/',
    socketPath: '/interview-test',
  };
  const currentUser: User = {
    username: 'jpatel',
    color: '#4873ff',
  };

  return <ChatContainer currentUser={currentUser} wsConfig={wsConfig} />;
};

export default App;

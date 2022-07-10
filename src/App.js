import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './component/ChatFeed';
import LoginForm from './component/LoginForm';
import './App.css';

const projectID = '8a7a807f-09c8-47fe-aa13-d81d850c5a15';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
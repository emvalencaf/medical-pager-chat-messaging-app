// hooks
import { useState } from 'react';

// stream chat
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
// components
import { Auth, ChannelContainer, ChannelListContainer } from './components';

// cookies
import Cookies from 'universal-cookie';

// styles
import "stream-chat-react/dist/css/index.css";
import './App.css';

const cookies = new Cookies();

const apiKey = 'c7v28c7r4c9j';

const client = StreamChat.getInstance(apiKey);
const authToken = cookies.get('token');

// connect user
if (authToken) client.connectUser({
  id: cookies.get('userId'),
  name: cookies.get('username'),
  fullName: cookies.get('fullName'),
  phoneNumber: cookies.get('phoneNumber'),
  image: cookies.get('avatarURL'),
  hashedPassword: cookies.get('hashedPassword'),
}, authToken);

const App = () => {

  // create channel states
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  if (!authToken) return <Auth />;

  return (
    <div className="app__wrapper">
      <Chat
        client={client}
        theme="team light"
        customClasses={``}
      >
        <ChannelListContainer
          isCreating={isCreating}
          setCreateType={setCreateType}
          setIsCreating={setIsCreating}
          setIsEditing={setIsEditing}
        />
        <ChannelContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          createType={createType}
        />
      </Chat>
    </div>
  );
}

export default App;

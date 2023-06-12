// hooks
import React, { useState } from "react";

// stream chat react
import { useChannelActionContext, Window, MessageList, Thread, MessageInput } from "stream-chat-react";

// custom components
import { TeamChannelHeader } from '../';

export const GiphyContext = React.createContext({});

const ChannelInner = ({ setIsEditing }) => {
    const [giphyState, setGiphyState] = useState(false);
    const { sendMessage } = useChannelActionContext();
    
    const overrideSubmitHandler = (message) => {
      let updatedMessage = {
        attachments: message.attachments,
        mentioned_users: message.mentioned_users,
        parent_id: message.parent?.id,
        parent: message.parent,
        text: message.text,
      };
      
      if (giphyState) {
        updatedMessage = { ...updatedMessage, text: `/giphy ${message.text}` };
      }
      
      if (sendMessage) {
        sendMessage(updatedMessage);
        setGiphyState(false);
      }
    };
  
    return (
      <GiphyContext.Provider value={{ giphyState, setGiphyState }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <Window>
            <TeamChannelHeader setIsEditing={setIsEditing} />
            <MessageList />
            <MessageInput overrideSubmitHandler={overrideSubmitHandler} />
          </Window>
          <Thread />
        </div>
      </GiphyContext.Provider>
    );
};

export default ChannelInner();
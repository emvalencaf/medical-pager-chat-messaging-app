import React, { useState } from "react";
import { useChatContext } from 'stream-chat-react';

// custom components
import { ChannelNameInput, UserList } from '../';

// assets
import { CloseCreateChannel } from "../../assets";

const EditChannel = ({ setIsEditing }) => {
    // get context
    const { channel } = useChatContext();

    // channel states
    const [ channelName, setChannelName ] = useState(channel?.data?.name);
    
    // selected user states
    const [selectedUsers, setSelectedUsers] = useState([]);

    // handle clcik
    const handleUpdateChannel = async (event) => {
        event.preventDefault();

        try {
            const nameChanged = channelName !== (channel.data.name || channel.data.id);
    
            if (nameChanged) {
                await channel.update({
                    name: channelName
                }, {
                    text: `Channel name changed to ${channelName}`
                });
            }
    
            if (selectedUsers.length) await channel.addMembers(selectedUsers);
            
    
            setChannelName(null);
            setIsEditing(false);
            setSelectedUsers([]);
            
        } catch (error) {
            console.log(error);
            alert("you are not allowed to edit the channel name");
        }
    }

    return (
        <div className="edit-channel__container">
            <div className="edit-channel__header">
                <p>
                    Edit Channel
                </p>
                <CloseCreateChannel
                    setIsEditing={setIsEditing}
                />
            </div>
            <ChannelNameInput
                channelName={channelName} setChannelName={setChannelName}
            />
            <UserList
                setSelectedUsers={setSelectedUsers}
            />
            <div className="edit-channel__button-wrapper" onClick={handleUpdateChannel}>
                <p>
                    Save Changes
                </p>
            </div>
        </div>
    );
};

export default EditChannel;
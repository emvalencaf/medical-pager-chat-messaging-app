import { useChatContext } from "stream-chat-react";

// assets
import { CloseCreateChannel } from "../../assets";

// hooks
import { useState } from "react";

// custom components
import { ChannelNameInput, UserList } from '../';

const CreateChannel = ({ createType, setIsCreating }) => {
    const { client, setActiveChannel } = useChatContext();

    // channel name states
    const [selectedUsers, setSelectedUsers] = useState([client.userID || '']);

    // channel states
    const [channelName, setChannelName] = useState('');


    /// handle create channel
    const createChannel = async (e) => {
        e.preventDefault();

        try {
            const newChannel = await client.channel(createType, channelName, {
                name: channelName, members: selectedUsers,
            });

            await newChannel.watch();

            setChannelName('');
            setIsCreating(false);
            setSelectedUsers([client.userID]);
            setActiveChannel(newChannel);
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div className="create-channel__container">
            <div className="create-channel__header">
                <p>
                    {createType === 'team' ? 'Create a New Channel' : 'Send a Direct Message'}
                </p>
                <CloseCreateChannel setIsCreating={setIsCreating} />
            </div>
            {createType === 'team' && <ChannelNameInput channelName={channelName} setChannelName={setChannelName} />}
            <UserList setSelectedUsers={setSelectedUsers}  />
            <div className="create-channel__button-wrapper" onClick={createChannel}>
                <p>
                    {createType === "team" ? 'Create Channel' : 'Create Message Group'}
                </p>
            </div>
        </div>
    );
};

export default CreateChannel;
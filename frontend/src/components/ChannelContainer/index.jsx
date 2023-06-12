// stream chat react
import { Channel, MessageSimple } from 'stream-chat-react';

// custom components
import { CreateChannel, EditChannel, ChannelInner } from '../';

const ChannelContainer = ({
    isCreating,
    setIsCreating,
    isEditing,
    setIsEditing,
    createType,
}) => {

    if (isCreating) return (
        <div className="channel__container">
            <CreateChannel
                createType={createType}
                setIsCreating={setIsCreating}
            />
        </div>
    );

    if (isEditing) return (
        <div className="channel__container">
            <EditChannel
                setIsEditing={setIsEditing}
            />
        </div>
    );

    const EmpetyState = () => {
        <div className="channel-empty__container">
            <p className="channel-empty__first">
                This is the beginning of your chat history.
            </p>
            <p className="channel-empty__second">
                Send messages, attachments, links, emojis, and more!
            </p>
        </div>
    }

    return (
        <div className="chanel__container">
            <Channel
                EmptyStateIndicator={EmpetyState}
                Message={(messageProps, i) => <MessageSimple key={i} {...messageProps} />}
            >
                <ChannelInner setIsEditing={setIsEditing} />
            </Channel>
        </div>
    );
};

export default ChannelContainer;
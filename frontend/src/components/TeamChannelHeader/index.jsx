// steam chat react
import { useChatContext, useChannelStateContext, Avatar } from "stream-chat-react";

// assets
import { ChannelInfo } from '../../assets';

const TeamChannelHeader = ({ setIsEditing }) => {
    const { channel, watcher_count } = useChannelStateContext();
    const { client } = useChatContext();

    const MessagingHeader = () => {
        const members = Object.values(channel.state.members).filter(({ user }) => user.id !== client.userID);
        const additionalMembers = members.length - 3;

        if (channel.type === 'messaging') {
            return (
                <div className='team-channel-header__name-wrapper'>
                    {members.map(({ user }, i) => (
                        <div key={i} className='team-channel-header__name-multi'>
                            <Avatar image={user.image} name={user.fullName || user.id} size={32} />
                            <p className='team-channel-header__name user'>{user.fullName || user.id}</p>
                        </div>
                    ))}

                    {additionalMembers > 0 && <p className='team-channel-header__name user'>and {additionalMembers} more</p>}
                </div>
            );
        }

        return (
            <div className='team-channel-header__channel-wrapper'>
                <p className='team-channel-header__name'># {channel.data.name}</p>
                <span
                    style={{ display: 'flex' }}
                    onClick={() => setIsEditing(true)}
                >
                    <ChannelInfo />
                </span>
            </div>
        );
    };

    const getWatcherText = (watchers) => {
        if (!watchers) return 'No users online';
        if (watchers === 1) return '1 user online';
        return `${watchers} users online`;
    };

    return (
        <div className='team-channel-header__container'>
            <MessagingHeader />
            <div className='team-channel-header__right'>
                <p className='team-channel-header__right-text'>{getWatcherText(watcher_count)}</p>
            </div>
        </div>
    );
};

export default TeamChannelHeader;
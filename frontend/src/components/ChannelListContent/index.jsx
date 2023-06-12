// stream chat react
import { ChannelList, useChatContext } from "stream-chat-react";

// custom components
import { ChannelSearch, CompanyHeader, SideBar, TeamChannelList, TeamChannelPreview } from '..';


const customChannelTeamFilter = (channels) => channels.filter((channel) => channel.type === 'team');

const customChannelMessagingFilter = (channels) => channels.filter((channel) => channel.type === 'messaging');

const ChannelListContent = ({ isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer }) => {

    const { client } = useChatContext();

    const filters = {
        members: { $in: [client.userID,], },
    };

    return (
        <>
            <SideBar />
            <div className="channel-list__list__wrapper">
                <CompanyHeader />
                <ChannelSearch
                    setToggleContainer={setToggleContainer}
                />
                <ChannelList
                    filters={filters}
                    channelRenderFilterFn={customChannelTeamFilter}
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type="team"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            type="team"
                            setToggleContainer={setToggleContainer}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                        />
                    )}
                />
                <ChannelList
                    filters={filters}
                    channelRenderFilterFn={customChannelMessagingFilter}
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                            type="messaging"
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            setToggleContainer={setToggleContainer}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            type="messaging"
                        />
                    )}
                />
            </div>
        </>
    )
};

export default ChannelListContent;
import { AddChannel } from "../../assets";

const TeamChannelList = ({ children, error = false, loading, type, isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer }) => {

    // error state handle
    if (error) return type === 'team' ? (
        <div className="team-channel-list">
            <p className="team-channel-list__message">
                Connection error, please wait a moment and try again.
            </p>
        </div>
    ) : null;

    // loading state handle
    if (loading) return (
        <div className="team-channel-list">
            <p className="team-channel-list__message">
                {type === "team" ? 'Channels' : 'Messages'} loading...
            </p>
        </div>
    );

    return (
        <div className="team-channel-list">
            <div className="team-channel-list__header">
                <p className="team-channel-list__header__title">
                    {type === 'team' ? 'Channels' : 'Direct Messages'}
                </p>
                <AddChannel
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                    setToggleContainer={setToggleContainer}
                    type={type === 'team' ? 'team' : 'messaging'}
                />
            </div>
            {children}
        </div>
    );
};

export default TeamChannelList;
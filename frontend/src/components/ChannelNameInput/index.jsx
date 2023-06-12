
const ChannelNameInput = ({ channelName = "", setChannelName }) => {
    // handle change
    const handleChange = (event) => {
        event.preventDefault();

        setChannelName(event.target.value);
    }

    return (
        <div className="channel-name-input__wrapper">
            <p>
                Name
            </p>
            <input
                type="text"
                value={channelName}
                onChange={handleChange}
                placeholder="channel name" 
            />
            <p>
                Add Members
            </p>
        </div>
    );
};

export default ChannelNameInput;
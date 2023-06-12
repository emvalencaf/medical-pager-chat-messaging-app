// hooks
import { useEffect, useState } from "react";

// stream chat react
import { useChatContext } from "stream-chat-react";

// custom components
import { ResultsDropdown } from '../';

// assets
import { SearchIcon } from "../../assets/SearchIcon";


const ChannelSearch = ({ setToggleContainer }) => {
    // get context states
    const {client, setActiveChannel} = useChatContext();

    // search states
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [teamChannels, setTeamChannels] = useState([]);
    const [directChannels, setDirectChannels] = useState([]);

    useEffect(() => {
        if (!query) {
            setTeamChannels([]);
            setDirectChannels([]);
        }
    }, []);


    const setChannel = (channel) => {
        setQuery('');
        setActiveChannel(channel);
    };

    // get channels
    const getChannels = async (text) => {
        try {
            // get channels
            const channelResponse = client.queryChannels({
                type: 'team',
                name: { $autocomplete: text},
                members: {$in: [client.userID]},
            });

            // get users
            const userResponse = client.queryUsers({
                id: { $ne: client.userID },
                name: { $autocomplete: text },
            });

            const [ channels, { users } ] = await Promise.all([channelResponse, userResponse]);

            if (channels.length) setTeamChannels(channels);

            if (users.length) setDirectChannels(users);

        } catch (error) {
            console.log(error);
            setQuery('');
        }
    }

    // handle search
    const handleSearch = (event) => {
        event.preventDefault();

        setLoading(true);
        setQuery(event.target.value);
        getChannels(event.target.value);
    }

    return (
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
                <div className="channel-search__input__icon">
                    <SearchIcon />
                </div>
                <input
                    type="text"
                    placeholder="search"
                    className="channel-search__input__text"
                    value={query}
                    onChange={handleSearch}
                />
            </div>
            {
                query && (
                    <ResultsDropdown
                        teamChannels={teamChannels}
                        directChannels={directChannels}
                        loading={loading}
                        setChannel={setChannel}
                        setQuery={setQuery}
                        setToggleContainer={setToggleContainer}
                    />
                )
            }
        </div>
    );
};

export default ChannelSearch;
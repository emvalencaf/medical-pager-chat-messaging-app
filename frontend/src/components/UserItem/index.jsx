// hooks
import { useState } from "react";

// stream chat react
import { Avatar } from "stream-chat-react";

// assets
import { InviteIcon } from "../../assets";

const UserItem = ({ user, setSelectedUsers }) => {
    // user item states
    const [selected, setSelected] = useState(false);

    // handle select
    const handleSelect = () => {
        
        selected ?
            setSelectedUsers((prevUsers) => prevUsers.filter((prevUser) => prevUser !== user.id))
            : setSelectedUsers((prevUsers) => [...prevUsers, user.id]);

        setSelected((prevSelected) => !prevSelected);
    }

    return (
        <div className="user-item__wrapper" onClick={handleSelect}>
            <div className="user-item__name-wrapper">
                <Avatar
                    image={user.image}
                    name={user.fullName || user.id}
                    size={32}
                />
                <p className="user-item__name">
                    {user.fullName} || {user.id}
                </p>
            </div>
            { selected ? <InviteIcon /> : <div className="user-item__invite-empty" /> }
        </div>
    );
};

export default UserItem;
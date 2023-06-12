import React, { useEffect, useState } from "react";

// stream chat react
import { useChatContext } from 'stream-chat-react';

// custom components
import { UserListContainer, UserItem } from '../';

const UserList = ({ setSelectedUsers }) => {
    // client
    const { client } = useChatContext();

    // users states
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isListEmpty, setIsListEmpty] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            if (loading) return;

            setLoading(true);

            try {

                const response = await client.queryUsers({
                    id: { $me: client.userID },
                },
                    { id: 1 },
                    { limit: 8 },
                );

                response?.users?.length ?
                    setUsers(response.users)
                    : setIsListEmpty(true);

            } catch (error) {
                console.log(error);
                setError(true);
            }

            setLoading(false);
        };

        if (client) getUsers();

    }, []);

    if (error) return (
        <UserListContainer>
            <div className="user-list__message">
                Error loading, please refresh and try again.
            </div>
        </UserListContainer>
    );

    if (isListEmpty) return (
        <UserListContainer>
            <div className="user-list__message">
                No users found.
            </div>
        </UserListContainer>
    );

    return (
        <UserListContainer>
            {loading ? (
                <div className="user-list__message">
                    Loading users...
                </div>
            ) : (
                users?.map((user, index) => (
                    <UserItem user={user} key={`${index}-${user.id}`} setSelectedUsers={setSelectedUsers} />
                ))
            )}
        </UserListContainer>
    );
};

export default UserList;
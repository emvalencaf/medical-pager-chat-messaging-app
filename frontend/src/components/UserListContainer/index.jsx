const UserListContainer = ({ children }) => {
    return (
        <div className="user-list__container">
            <div className="user-list__header">
                <p>
                    User
                </p>
                <p>
                    Invite
                </p>
            </div>
            {children}
        </div>
    );
}

export default UserListContainer;
const { connect } = require('getstream');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const StreamChat = require('stream-chat').StreamChat;

const apiStream = require('../../config/stream-app');

const { api_key, app_id, api_secret } = apiStream;

const signIn = async (req, res) => {
    try {
        // get the data from frontend
        const { username, password } = req.body;

        const serverClient = connect(api_key, api_secret, app_id);
        const client = StreamChat.getInstance(api_key, api_secret);

        const { users } = await client.queryUsers({ name: username, });

        if (!users.length) return res.status(400).json({ message: 'user not found' });

        const success = await bcrypt.compare(password, users[0].hashedPassword);

        const token = serverClient.createUserToken(users[0].id);

        if (!success) return res.status(500).json({ message: 'incorrect password or username' });


        console.log('token: ', token);
        console.log('userId: ', users[0].id);
        console.log('fullName: ', users[0].fullName);
        console.log('username: ', username);

        res.status(200).json({
            token,
            fullName: users[0].fullName,
            username,
            userId: users[0].id,
        });
    } catch (error) {
        console.log(error);
        res.status(502).json({message: error});
    }
};
const signUp = async (req, res) => {
    try {

        // get the data from frontend
        const { fullName, username, password, phoneNumber} = req.body;

        // create an user id
        const userId = crypto.randomBytes(16).toString('hex');

        const serverClient = connect(api_key, api_secret,app_id);

        const hashedPassword = await bcrypt.hash(password, 10);

        const token = serverClient.createUserToken(userId);

        res.status(200).json({ token, fullName, username, userId, hashedPassword, phoneNumber});
    } catch (error) {
        console.log(error);
        res.status(502).json({message: error});
    }
};


module.exports = {
    signIn,
    signUp,
};
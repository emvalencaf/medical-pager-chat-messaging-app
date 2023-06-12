require('dotenv').config();

const apiStream = {
    api_key: process.env.STREAM_API_KEY || '',
    api_secret: process.env.STREAM_API_SECRET || '',
    app_id: process.env.STREAM_APP_ID || '',
}

module.exports = apiStream;
require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 5000;

const main = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

main();
import fs from 'fs';

const keys = JSON.parse(fs.readFileSync('./vault.json','utf8' ));

export default {
    MONGO_URL: keys.MONGO_URL,
    PORT: keys.PORT
};
const dotenv = require('dotenv')
dotenv.config();

export default {
    WATSON_DISCOVERY_URL: process.env.WATSON_DISCOVERY_URL,
    WATSON_DISCOVERY_APIKEY : process.env.WATSON_DISCOVERY_APIKEY
}
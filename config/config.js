const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    mongoURI: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    tokenExpiry: process.env.TOKEN_EXPIRY || '15m', // 15 minutes default
    refreshTokenExpiry: process.env.REFRESH_TOKEN_EXPIRY || '7d', // 7 days default
    port: process.env.PORT || 3000
};


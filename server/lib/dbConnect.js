const mongoose = require('mongoose');
const dbConnect = async () => {
    try {
        await mongoose.connect('your mongodburl', {
            dbName: "mongo-auth-db",
            useNewUrlParser: true
        }
        );
        console.log("connection to mongodb");
    } catch (e) {
        console.log("failed to connect to database");
    }
};
module.exports = dbConnect;

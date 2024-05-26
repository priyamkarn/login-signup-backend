const mongoose = require('mongoose');
const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://priyamcodeforces:Altruist7@cluster0.mvsexfj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
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
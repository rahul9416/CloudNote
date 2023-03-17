const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/";

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Hello! Connected to Mongo");
    })
    mongoose.set('strictQuery', true);
}

module.exports = connectToMongo;
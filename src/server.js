import app from './app.js';
import mongoose from 'mongoose';

const port = process.env.PORT
const MONGO_URL= process.env.MONGO_URL;

const startServer = async function(){
    try{
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(port, ()=>{
            console.log('server is up and running '+port)
        })

    }catch(err){
        console.log('Error connecting mongodb database', err)
    }
}
startServer();
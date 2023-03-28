import app from './app.js';
import mongoose from 'mongoose';
import { getConfig } from './lib.js';



const startServer = async function(){
    const config = await getConfig();
    const port = process.env.PORT || 3000
    const MONGO_URL= config.MONGO_URL;
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
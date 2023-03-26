import express from 'express';
import cors from 'cors';

import routes from './routes/index.js';


const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.get('/', (req, res)=>{
    res.status(200).send({message:`App is up and running `})
})

app.use('/api', routes)

export default app;

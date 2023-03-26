import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config();

import routes from './routes/index.js';
const port = process.env.PORT || 3000


const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.get('/', (req, res)=>{
    res.status(200).send({message:`App is up and running on port ${port}`})
})

app.use('/api', routes)

export default app;

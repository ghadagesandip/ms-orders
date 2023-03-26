import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config();

import routes from './routes/index.js';

const app = express();

// middlewares
app.use(cors());
app.use(express.json())
app.use('/api', routes)

export default app;

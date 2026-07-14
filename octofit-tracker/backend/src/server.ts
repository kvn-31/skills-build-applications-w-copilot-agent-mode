import express from 'express';
import dotenv from 'dotenv';
import db from './config/database.ts';

dotenv.config();

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 8000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'OctoFit Tracker backend is running', api: '/api' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', env: process.env.NODE_ENV || 'development' });
});

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to OctoFit Tracker API' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(port, () => {
  console.log(`OctoFit Tracker backend running on http://localhost:${port}`);
});

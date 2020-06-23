import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import makeCallback from './express-callback/express-callback';
import { API_ROOT } from '../config/config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

const postComment = async () => ({
  headers: {
    'Content-Type': 'application/json',
  },
  data: { message: 'Hit the endpoint' },
  statusCode: 200,
});

const notFound = async () => ({
  headers: {
    'Content-Type': 'application/json',
  },
  data: { error: 'Not found.' },
  statusCode: 404,
});

app.post(`${API_ROOT}/todo`, makeCallback(postComment));
app.use(makeCallback(notFound));

export default app;

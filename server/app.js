import express from 'express';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import makeCallback from './express-callback/express-callback';
import { API_ROOT } from '../config/config';
import {
  postTodo,
  deleteTodo,
  patchTodo,
  getTodo,
  notFound,
} from './controllers';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.get(`${API_ROOT}/todo`, makeCallback(getTodo));
app.post(`${API_ROOT}/todo`, makeCallback(postTodo));
app.patch(`${API_ROOT}/todo/:id`, makeCallback(patchTodo));
app.delete(`${API_ROOT}/todo`, makeCallback(deleteTodo));
app.delete(`${API_ROOT}/todo/:id`, makeCallback(deleteTodo));
app.use(makeCallback(notFound));

export default app;

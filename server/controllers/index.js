import httpResponseHandler from '../http-handler';
import authenticate from '../auth/authentication';
import {
  listTodo,
  addTodo,
  editTodo,
  removeTodo,
} from '../use-cases';
import makeGetTodo from './get-todo';
import makePostTodo from './post-todo';
import makePatchTodo from './patch-todo';
import makeDeleteTodo from './delete-todo';
import notFound from './not-found';

const getTodo = makeGetTodo({ listTodo, httpResponseHandler, authenticate });
const postTodo = makePostTodo({ addTodo, httpResponseHandler, authenticate });
const patchTodo = makePatchTodo({ editTodo, httpResponseHandler, authenticate });
const deleteTodo = makeDeleteTodo({ removeTodo, httpResponseHandler, authenticate });

const todoController = Object.freeze({
  getTodo,
  postTodo,
  patchTodo,
  deleteTodo,
  notFound,
});

export default todoController;
export {
  getTodo,
  postTodo,
  patchTodo,
  deleteTodo,
  notFound,
};

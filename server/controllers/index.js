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
import makeDeleteTodo from './delete-todo';
import makePatchTodo from './patch-todo';
import notFound from './not-found';

const getTodo = makeGetTodo({ listTodo, httpResponseHandler, authenticate });
const postTodo = makePostTodo({ addTodo, httpResponseHandler, authenticate });
const deleteTodo = makeDeleteTodo({ removeTodo, httpResponseHandler });
const patchTodo = makePatchTodo({ editTodo, httpResponseHandler });

const todoController = Object.freeze({
  getTodo,
  postTodo,
  deleteTodo,
  patchTodo,
  notFound,
});

export default todoController;
export {
  getTodo,
  postTodo,
  deleteTodo,
  patchTodo,
  notFound,
};

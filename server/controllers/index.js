import httpResponseHandler from '../http-handler';
import {
  addTodo,
  editTodo,
  listTodo,
  removeTodo,
} from '../use-cases';
import makePostTodo from './post-todo';
import makeDeleteTodo from './delete-todo';
import makePatchTodo from './patch-todo';
import makeGetTodo from './get-todo';
import notFound from './not-found';

const postTodo = makePostTodo({ addTodo, httpResponseHandler });
const deleteTodo = makeDeleteTodo({ removeTodo });
const getTodo = makeGetTodo({ listTodo, httpResponseHandler });
const patchTodo = makePatchTodo({ editTodo, httpResponseHandler });

const todoController = Object.freeze({
  postTodo,
  deleteTodo,
  patchTodo,
  getTodo,
  notFound,
});

export default todoController;
export {
  postTodo,
  deleteTodo,
  patchTodo,
  getTodo,
  notFound,
};

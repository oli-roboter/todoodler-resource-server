import todoDb from '../data-access';
import makeAddTodo from './add-todo';
import makeEditTodo from './edit-todo';
import makeListTodo from './list-todo';
import makeRemoveTodo from './remove-todo';

const addTodo = makeAddTodo({ todoDb });
const editTodo = makeEditTodo({ todoDb });
const listTodo = makeListTodo({ todoDb });
const removeTodo = makeRemoveTodo({ todoDb });

const todoService = Object.freeze({
  addTodo,
  editTodo,
  listTodo,
  removeTodo,
});

export default todoService;
export {
  addTodo,
  editTodo,
  listTodo,
  removeTodo,
};

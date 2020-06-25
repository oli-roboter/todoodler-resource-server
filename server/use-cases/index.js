import todoDb from '../data-access';
import makeAddTodo from './add-todo';
import makeEditTodo from './edit-todo';
import makeListTodo from './list-todo';
import makeRemoveTodo from './remove-todo';

const addTodo = makeAddTodo({ todoDb });
const editTodo = makeEditTodo({ todoDb });
const listTodo = makeListTodo({ todoDb });
const removeTodo = makeRemoveTodo({ todoDb });

export {
  addTodo,
  editTodo,
  listTodo,
  removeTodo,
};

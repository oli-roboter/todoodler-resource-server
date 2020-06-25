/* eslint-disable no-return-await */
import makeTodo from '../todo';

export default function makeEditTodo({ todoDb }) {
  return async function editTodo({ id, ...changes } = {}) {
    const existing = todoDb.findById({ id });
    const todo = makeTodo(...existing, ...changes);
    return await todoDb.update({
      modifiedOn: todo.getModifiedOn(),
      dueDate: todo.getDueDate(),
      assignedTo: todo.getAssignedTo(),
      text: todo.getText(),
      detail: todo.getDetail(),
      importance: todo.getImportance(),
      // add something to write into history
    });
  };
}

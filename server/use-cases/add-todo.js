/* eslint-disable no-return-await */
import makeTodo from '../todo';

export default function makeAddTodo({ todoDb }) {
  return async function addTodo(todoInfo) {
    const todo = makeTodo(todoInfo);
    return await todoDb.insert({
      createdOn: todo.getCreatedOn(),
      modifiedOn: todo.getModifiedOn(),
      completedOn: todo.getCompletedOn(),
      deletedOn: todo.getDeletedOn(),
      dueDate: todo.getDueDate(),
      assignedTo: todo.getAssignedTo(),
      text: todo.getText(),
      detail: todo.getDetail(),
      importance: todo.getImportance(),
      status: todo.getStatus(),
      history: todo.getHistory(),
    });
  };
}

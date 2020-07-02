/* eslint-disable no-return-await */
import makeTodo from '../todo';

export default function makeEditTodo({ todoDb }) {
  return async function editTodo({ todoId, ...changes } = {}) {
    const existing = await todoDb.findById(todoId);

    if (existing) {
      const { author, history } = existing;
      let { modifiedOn } = existing;
      modifiedOn = Date.now();
      const todo = makeTodo({ ...existing, ...changes, modifiedOn });
      // when both objects are using spread operator, identical keys of
      // first object are substituted by second object;
      const patchRecord = {
        author,
        modifiedOn,
        changes,
      };
      history.push(patchRecord);

      const updated = await todoDb.replace({
        todoId: todo.getId(),
        author: todo.getAuthor(),
        workGroup: todo.getWorkGroup(),
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
      return updated.value;
    }
    return null;
  };
}

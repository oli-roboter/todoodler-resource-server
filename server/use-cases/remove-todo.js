/* eslint-disable no-return-await */
export default function makeRemoveTodo({ todoDb }) {
  return async function removeTodo({ workGroup, func, arg }) {
    const deleteById = async (todoId) => await todoDb.deleteById(todoId);

    const deleteByAuthor = async (author) => await todoDb.deleteByAuthor(author);

    const deleteByAssignedTo = async (user) => await todoDb.deleteByAssignedTo(user);

    const deleteAll = async () => await todoDb.deleteAll(workGroup);

    const functionPicker = {
      byId: (todoId) => deleteById(todoId),
      byAuthor: (author) => deleteByAuthor(author),
      byAssignedTo: (user) => deleteByAssignedTo(user),
      all: (wg) => (wg === workGroup ? deleteAll() : null),
    };

    const returnFunction = async () => {
      if (!func || !arg || functionPicker[func] === undefined) return null;
      return await functionPicker[func](arg);
    };

    return await returnFunction(func, arg);
  };
}

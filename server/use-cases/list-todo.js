/* eslint-disable no-return-await */
export default function makeListTodo({ todoDb }) {
  return async function listTodo({ workGroup, query }) {
    const { func, arg } = query;

    const listAll = async () => {
      return await todoDb.getAll(workGroup);
    };

    const listByAuthor = async (author) => {
      return await todoDb.getByAuthor(author);
    };

    const listByAssignedTo = async (user) => {
      return await todoDb.getByAssignedTo(user);
    };

    const functionPicker = {
      byAuthor: (author) => listByAuthor(author),
      byAssignedTo: (user) => listByAssignedTo(user),
      all: () => listAll(),
    };

    const returnFunction = async () => {
      if (!func || !arg || functionPicker[func] === undefined) return await listAll();
      return await functionPicker[func](arg);
    };

    return await returnFunction(func, arg);
  };
}

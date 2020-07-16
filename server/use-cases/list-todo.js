/* eslint-disable no-return-await */
export default function makeListTodo({ todoDb }) {
  return async function listTodo({ workGroup, queryParams }) {
    const { func, arg } = queryParams;

    const listAll = async () => await todoDb.getAll(workGroup);

    const listByAuthor = async (author) => await todoDb.getByAuthor(author);

    const listByAssignedTo = async (user) => await todoDb.getByAssignedTo(user);

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

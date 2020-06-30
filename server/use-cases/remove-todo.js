/* eslint-disable no-return-await */
export default function makeRemoveTodo({ todoDb }) {
  return async function removeTodo({ id, func, arg }) {
    const deleteById = async () => {
      return await todoDb.removeById(id);
    };

    if (id) return deleteById();

    const deleteByAuthor = async ({ author }) => {
      return await todoDb.removeByAuthor(author);
    };

    const deleteByAssignedTo = async ({ user }) => {
      return await todoDb.removeByAuthor(user);
    };

    const deleteAll = async () => {
      return await todoDb.removeAll();
    };

    const functionPicker = {
      byAuthor: (author) => deleteByAuthor(author),
      byAssignedTo: (user) => deleteByAssignedTo(user),
      all: () => deleteAll(),
    };

    const returnFunction = async () => {
      if (!func || !arg || functionPicker[func] === undefined) return 404;
      return await functionPicker[func](arg);
    };

    return await returnFunction;
  };
}

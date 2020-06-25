/* eslint-disable no-return-await */
export default function makeListTodo({ todoDb }) {
  const listByAuthor = async ({ author }) => {
    return await todoDb.getByAuthor(author);
  };

  const listByImportance = async ({ importance }) => {
    return await todoDb.getByImportance(importance);
  };

  const listAll = async () => {
    return await todoDb.getAll();
  };

  return Object.freeze({
    listAll,
    listByAuthor,
    listByImportance,
  });
}

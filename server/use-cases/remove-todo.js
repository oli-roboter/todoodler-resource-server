/* eslint-disable no-return-await */
export default function makeRemoveTodo({ todoDb }) {
  // add something to write into history
  // the operations are all softDelete, history will never be lost
  const deleteById = async ({ id }) => {
    return await todoDb.removeByAuthor(id);
  };

  const deleteByAuthor = async ({ author }) => {
    return await todoDb.removeByAuthor(author);
  };

  const deleteAll = async () => {
    return await todoDb.removeAll();
  };

  return Object.freeze({
    deleteById,
    deleteByAuthor,
    deleteAll,
  });
}
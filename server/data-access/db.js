/* eslint-disable no-return-await */
export default function makeTodoDB({ makeDb }) {
  const findById = async (todoId) => {
    const db = await makeDb();
    return await db
      .collection('todo')
      .findOne({ todoId });
  };

  const insert = async (todoInfo) => {
    const db = await makeDb();
    return await db
      .collection('todo')
      .insertOne(todoInfo);
  };

  const replace = async (todo) => {
    const db = await makeDb();
    const { todoId } = todo;
    return await db
      .collection('todo')
      .findOneAndReplace(
        { todoId },
        { ...todo },
        { returnOriginal: false },
      );
  };

  const getAll = async (workGroup) => {
    const db = await makeDb();
    return await db
      .collection('todo')
      .find({ workGroup })
      .toArray();
  };

  const getActive = async (workGroup) => {
    const db = await makeDb();
    return await db
      .collection('todo')
      .find({ workGroup, status: 'active' })
      .toArray();
  };

  const getByAuthor = async (author) => {
    const db = await makeDb();
    return await db
      .collection('todo')
      .find({ author })
      .toArray();
  };

  const getByAssignedTo = async (assignedTo) => {
    const db = await makeDb();
    return await db
      .collection('todo')
      .find({ assignedTo })
      .toArray();
  };

  const deleteById = async (todoId) => {
    const db = await makeDb();
    return await db
      .collection('todo')
      .deleteOne({ todoId });
  };

  const deleteByAssignedTo = async (user) => {
    const db = await makeDb();
    return await db
      .collection('todo')
      .deleteMany({ assignedTo: user });
  };

  const deleteByAuthor = async (author) => {
    const db = await makeDb();
    return await db
      .collection('todo')
      .deleteMany({ author });
  };

  const deleteAll = async (workGroup) => {
    const db = await makeDb();
    return await db
      .collection('todo')
      .deleteMany({ workGroup });
  };

  return Object.freeze({
    findById,
    getAll,
    getActive,
    getByAuthor,
    getByAssignedTo,
    insert,
    replace,
    deleteById,
    deleteByAssignedTo,
    deleteByAuthor,
    deleteAll,
  });
}

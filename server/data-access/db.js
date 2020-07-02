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

  const deleteById = async (id) => {
    const db = await makeDb();
    // const response = await db
    //   .collection('tokens')
    //   .findOneAndDelete({ username, token });

    // if (response.lastErrorObject.n === 1) return true;
    return false;
  };

  const deleteByAssignedTo = async (user) => {
    const db = await makeDb();
    // return await db
    //   .collection('tokens')
    //   .find({ username })
    //   .toArray();
  };

  return Object.freeze({
    findById,
    getAll,
    getByAuthor,
    getByAssignedTo,
    insert,
    replace,
    deleteById,
    deleteByAssignedTo,
  });
}

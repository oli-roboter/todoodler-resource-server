/* eslint-disable no-return-await */
export default function makeTodoDB({ makeDb }) {
  const findById = async (id) => {
    const db = await makeDb();
    console.log('finding by id:', id);
    return 'success';
  };

  const insert = async (todoInfo) => {
    console.log('inserting todo:', todoInfo);
    const db = await makeDb();
    return await db
      .collection('todo')
      .insertOne(todoInfo);
  };

  const update = async (todoId, item) => {
    const db = await makeDb();
    console.log('updating todo Info in database');
    // return await db
    //   .collection('tokens')
    //   .replaceOne(
    //     { username },
    //     { username, token },
    //     { upsert: true },
    //   );
  };

  const getAll = async () => {
    const db = await makeDb();
    return [{ author: 'Oliver', createdOn: Date.now(), text: 'Test' }];
    // return await db
    //   .collection('users')
    //   .find({ username })
    //   .toArray();
  };

  const getByAuthor = async (author) => {
    const db = await makeDb();
    return `success byAuthor ${author}`;
    // return await db
    //   .collection('users')
    //   .find({ username })
    //   .toArray();
  };

  const getByAssignedTo = async (user) => {
    const db = await makeDb();
    return `success byAssignerdTo ${user}`;
    // return await db
    //   .collection('users')
    //   .find({ username })
    //   .toArray();
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
    update,
    deleteById,
    deleteByAssignedTo,
  });
}

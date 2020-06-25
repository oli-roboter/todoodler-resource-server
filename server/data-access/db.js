/* eslint-disable no-return-await */
export default function makeTodoDB({ makeDb }) {
  const insert = async (todoInfo) => {
    const db = await makeDb();
    console.log('inserting todo Info into database');
    return 'success';
    // return await db
    //   .collection('users')
    //   .insertOne({ username, password });
  };

  const update = async (todoId, item) => {
    const db = await makeDb();
    console.log('updating todo Info in database');
    return 'success';
    // return await db
    //   .collection('tokens')
    //   .replaceOne(
    //     { username },
    //     { username, token },
    //     { upsert: true },
    //   );
  };

  const getTodos = async () => {
    const db = await makeDb();
    // return await db
    //   .collection('users')
    //   .find({ username })
    //   .toArray();
  };

  const deleteTodo = async (todoId) => {
    const db = await makeDb();
    // const response = await db
    //   .collection('tokens')
    //   .findOneAndDelete({ username, token });

    // if (response.lastErrorObject.n === 1) return true;
    return false;
  };

  const deleteAllTodos = async () => {
    const db = await makeDb();
    // return await db
    //   .collection('tokens')
    //   .find({ username })
    //   .toArray();
  };

  return Object.freeze({
    getTodos,
    insert,
    update,
    deleteTodo,
    deleteAllTodos,
  });
}

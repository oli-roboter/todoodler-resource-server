const postTodo = async () => ({
  headers: {
    'Content-Type': 'application/json',
  },
  data: { message: 'Hit the post todo endpoint' },
  statusCode: 200,
});

export default postTodo;

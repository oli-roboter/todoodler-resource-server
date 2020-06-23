const editTodo = async () => ({
  headers: {
    'Content-Type': 'application/json',
  },
  data: { message: 'Hit the edit Todo endpoint' },
  statusCode: 200,
});

export default editTodo;

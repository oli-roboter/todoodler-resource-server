const deleteTodo = async () => ({
  headers: {
    'Content-Type': 'application/json',
  },
  data: { message: 'Hit the delete Todo endpoint' },
  statusCode: 200,
});

export default deleteTodo;

const getTodo = async () => ({
  headers: {
    'Content-Type': 'application/json',
  },
  data: { message: 'Hit the get Todo endpoint' },
  statusCode: 200,
});

export default getTodo;

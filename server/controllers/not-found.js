const notFound = async () => ({
  headers: {
    'Content-Type': 'application/json',
  },
  data: { error: 'Not found' },
  statusCode: 404,
});

export default notFound;

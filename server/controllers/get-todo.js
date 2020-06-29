export default function makeGetTodo({ listTodo, httpResponseHandler }) {
  return async function getTodo(httpRequest) {
    try {
      const { query } = httpRequest;
      const fetched = await listTodo({ query });
      return httpResponseHandler[200](fetched);
    } catch (e) {
      return httpResponseHandler[500](e.message);
    }
  };
}

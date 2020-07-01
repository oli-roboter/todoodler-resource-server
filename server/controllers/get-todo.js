export default function makeGetTodo({ listTodo, httpResponseHandler, authenticate }) {
  return async function getTodo(httpRequest) {
    try {
      const { token } = httpRequest.headers;
      const { username } = httpRequest.body;
      const { query } = httpRequest;
      const auth = await authenticate({ token, username });
      if (auth.success) {
        const fetched = await listTodo({ query });
        return httpResponseHandler[200](fetched);
      }
      return httpResponseHandler[403]();
    } catch (e) {
      return httpResponseHandler[500](e.message);
    }
  };
}

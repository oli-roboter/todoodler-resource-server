export default function makeGetTodo({ listTodo, httpResponseHandler, authenticate }) {
  return async function getTodo(httpRequest) {
    try {
      const { token } = httpRequest.headers;
      const { query } = httpRequest;
      const { username } = query;

      const auth = await authenticate({ token, username });
      if (auth.success) {
        const { workGroup } = auth.data;
        const fetched = await listTodo({ workGroup, ...query });
        return httpResponseHandler[200](fetched);
      }
      return httpResponseHandler[403]();
    } catch (e) {
      return httpResponseHandler[500](e.message);
    }
  };
}

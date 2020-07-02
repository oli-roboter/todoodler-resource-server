export default function makeDeleteTodo({ removeTodo, httpResponseHandler, authenticate }) {
  return async function deleteTodo(httpRequest) {
    try {
      const { token } = httpRequest.headers;
      const { username } = httpRequest.body;
      const { query } = httpRequest;

      if (!token || !username) return httpResponseHandler[400]();
      const auth = await authenticate({ token, username });

      if (auth.success) {
        const { workGroup } = auth.data;
        const deleted = await removeTodo({ workGroup, ...query });
        if (!deleted) return httpResponseHandler[400]();
        if (deleted.deletedCount === 0) return httpResponseHandler[404]();

        return httpResponseHandler[200]({
          result: `${deleted.deletedCount} register(s) deleted permanently`,
        });
      }

      return httpResponseHandler[403]();
    } catch (e) {
      // console.error(e);
      return httpResponseHandler[500](e.message);
    }
  };
}

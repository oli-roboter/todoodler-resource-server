export default function makePatchTodo({ editTodo, httpResponseHandler, authenticate }) {
  return async function patchTodo(httpRequest) {
    try {
      const { token } = httpRequest.headers;
      const { username, changes } = httpRequest.body;
      const { todoId } = httpRequest.params;
      const auth = await authenticate({ token, username });
      if (auth.success) {
        const patched = await editTodo({ todoId, changes });
        return patched
          ? httpResponseHandler[200](patched)
          : httpResponseHandler[404]();
      }
      return httpResponseHandler[403]();
    } catch (e) {
      // console.error(e);
      return httpResponseHandler[500](e.message);
    }
  };
}

export default function makePatchTodo({ editTodo, httpResponseHandler, authenticate }) {
  return async function patchTodo(httpRequest) {
    try {
      const { token } = httpRequest.headers;
      const { ...todoInfo } = httpRequest.body;
      const { username } = httpRequest.query;
      const auth = await authenticate({ token, username });

      if (auth.success) {
        const patched = await editTodo(todoInfo);
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

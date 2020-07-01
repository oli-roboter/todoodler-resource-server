export default function makePostTodo({ addTodo, httpResponseHandler, authenticate }) {
  return async function postTodo(httpRequest) {
    try {
      const { username, ...postInfo } = httpRequest.body;
      const { token } = httpRequest.headers;
      const auth = await authenticate({ token, username });
      if (auth.success) {
        const posted = await addTodo({
          author: username,
          workGroup: auth.data.workGroup,
          ...postInfo,
        });
        // result: { n: 1, ok: 1 },
        return httpResponseHandler[200](posted.ops[0]);
      }
      return httpResponseHandler[403]();
    } catch (e) {
      return httpResponseHandler[500](e.message);
    }
  };
}

export default function makePostTodo({ addTodo, httpResponseHandler }) {
  return async function postTodo(httpRequest) {
    try {
      const { ...postInfo } = httpRequest.body;
      const posted = await addTodo({ ...postInfo });
      return httpResponseHandler[200](posted);
    } catch (e) {
      return httpResponseHandler[500](e.message);
    }
  };
}

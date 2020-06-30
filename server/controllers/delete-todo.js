export default function makeDeleteTodo({ removeTodo, httpResponseHandler }) {
  return async function deleteTodo(httpRequest) {
    try {
      const { query } = httpRequest;
      const { id } = httpRequest.params;

      const toDelete = {
        ...query,
        id: id !== undefined ? null : id,
      };

      const deleted = await removeTodo(toDelete);
      return httpResponseHandler[200](deleted);
    } catch (e) {
      // console.error(e);
      return httpResponseHandler[500](e.message);
    }
  };
}

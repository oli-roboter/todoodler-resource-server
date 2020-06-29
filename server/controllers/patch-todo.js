export default function patchPostTodo({ editTodo, httpResponseHandler }) {
  return async function patchTodo(httpRequest) {
    try {
      const { ...todoInfo } = httpRequest.body;
      const toEdit = {
        id: httpRequest.params.id,
        ...todoInfo,
      };
      // console.log('to Edit', toEdit);
      const patched = await editTodo(toEdit);
      return httpResponseHandler[200](patched);
    } catch (e) {
      // console.error(e);
      return httpResponseHandler[500](e.message);
    }
  };
}

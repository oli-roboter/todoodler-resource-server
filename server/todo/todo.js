export default function buildmakeTodo({ Id }) {
  return function makeTodo({
    author,
    createdOn = Date.now(),
    modifiedOn = Date.now(),
    completedOn,
    deletedOn,
    dueDate,
    assignedTo,
    text,
    detail,
    importance } = {}) {
    //add validation rules for each field
    return Object.freeze({
      getAuthor: () => author,
      getCreatedOn: () => createdOn,
      getModifiedOn: () => modifiedOn,
      getCompletedOn: () => completedOn,
      getDeletedOn: () => deletedOn,
      getDueDate: () => dueDate,
      getAssignedTo: () => assignedTo,
      getText: () => text,
      getDetail: () => detail,
      getImportance: () => importance,
    });
  };
}

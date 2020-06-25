export default function buildmakeTodo() {
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
    importance,
    status,
    history,
  } = {}) {
    // add validation rules for each field
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
      getStatus: () => status,
      getHistory: () => history,
    });
  };
}

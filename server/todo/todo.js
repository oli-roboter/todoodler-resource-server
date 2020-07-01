export default function buildmakeTodo({ Id }) {
  return function makeTodo({
    id = Id.makeId(),
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
    if (!Id.isValidId(id)) throw new Error('Todo must have a valid id.');

    if (!author) throw new Error('Todo must have an author.');

    if (author.length < 2) throw new Error("Todo author's name must be longer than 2 characters.");

    if (!text || text.length < 5) throw new Error('Todo must include at least 5 characters of text.');

    return Object.freeze({
      getId: () => id,
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

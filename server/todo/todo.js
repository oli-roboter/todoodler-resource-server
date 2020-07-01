export default function buildmakeTodo({ Id }) {
  return function makeTodo({
    todoId = Id.makeId(),
    author,
    workGroup,
    createdOn = Date.now(),
    modifiedOn = Date.now(),
    completedOn = null,
    deletedOn = null,
    dueDate,
    assignedTo,
    text,
    detail,
    importance,
    status = 'active',
    history = [{ author, createdOn }],
  } = {}) {
    // const writeHistory = ({ ...changes }) => {
    // write some code that puts a date modified and changes made by whom
    //   history.push({ ...changes });
    // };

    // validation
    if (!Id.isValidId(todoId)) throw new Error('Todo must have a valid id.');

    if (!author) throw new Error('Todo must have an author.');

    if (author.length < 2) throw new Error("Todo author's name must be longer than 2 characters.");

    if (!text || text.length < 5) throw new Error('Todo must include at least 5 characters of text.');

    if (!detail) throw new Error('Todo must include detail field.');

    if (detail.length > 1 && detail.length < 10) throw new Error('Todo detail must have at least 10 characters');

    if (!importance) throw new Error('Todo must have an importance set.');

    if (!assignedTo) throw new Error('Todo must be assigned to a user');

    if (assignedTo.length < 2) throw new Error('Todo must be assigned to a valid username');

    if (dueDate <= Date.now()) throw new Error('Due date must br greater than now');

    if (!dueDate) throw new Error('Todo must have a due date');

    return Object.freeze({
      getId: () => todoId,
      getAuthor: () => author,
      getWorkGroup: () => workGroup,
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

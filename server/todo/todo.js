import moment from 'moment';

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
    history = [{
      author,
      workGroup,
      modifiedOn,
      completedOn,
      deletedOn,
      dueDate,
      assignedTo,
      text,
      detail,
      importance,
      status,
    }],
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

    if (detail.length < 10 && detail !== '') throw new Error('Todo detail must either be empty or have at least 10 characters');

    if (!importance) throw new Error('Todo must have an importance set.');

    if (!assignedTo) throw new Error('Todo must be assigned to a user');

    if (assignedTo.length < 2) throw new Error('Todo must be assigned to a valid username');

    const momentDueDate = moment(dueDate);
    if (!dueDate && !momentDueDate.isValid()) throw new Error('Todo must have a valid due date');

    if (dueDate <= Date.now()) throw new Error('Due date must br greater than now');

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

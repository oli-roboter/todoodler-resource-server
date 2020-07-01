/* eslint-disable no-undef */
import makeTodo from '../../server/todo';
import { testTodo, makeFakeTodo } from '../fixtures/todo-mocks';
import Id from '../../server/Id';

describe('Todo', () => {
  it('returns a todo when all arguments are provided', () => {
    const validUser = testTodo();
    const {
      author,
      dueDate,
      assignedTo,
      text,
      detail,
      importance,
      status,
    } = validUser;

    const test = makeTodo({
      author,
      dueDate,
      assignedTo,
      text,
      detail,
      importance,
      status,
    });
    expect(Id.isValidId(test.getId())).toBe(true);
    expect(test.getAuthor()).toEqual(author);
    expect(test.getDueDate()).toEqual(dueDate);
    expect(test.getAssignedTo()).toEqual(assignedTo);
    expect(test.getText()).toEqual(text);
    expect(test.getDetail()).toEqual(detail);
    expect(test.getImportance()).toEqual(importance);
    expect(test.getStatus()).toEqual(status);
  });

  it('must have an author', () => {
    const fakeTodo = makeFakeTodo({ author: null });
    expect(() => makeTodo(fakeTodo)).toThrow('Todo must have an author.');
  });

  // test('does not allow invalid inputs', () => {

  // })
});

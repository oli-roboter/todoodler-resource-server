import faker from 'faker';
import Id from '../../server/Id';

const makeFakeTodo = (overides) => {
  const todo = {
    id: Id.makeId(),
    author: faker.name.findName(),
    dueDate: faker.date.future(),
    assignedTo: faker.name.findName(),
    text: faker.lorem.words(3),
    detail: faker.lorem.paragraph(1),
    importance: 'low',
    status: 'active',
  };
  return { ...todo, ...overides };
};

const testTodo = () => ({
  id: Id.makeId(),
  author: 'Teddy',
  dueDate: Date.now(),
  assignedTo: 'Teddy',
  text: 'test todo',
  detail: '',
  importance: 'low',
  status: 'active',
});

export { makeFakeTodo, testTodo };

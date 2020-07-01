import buildMakeTodo from './todo';
import Id from '../Id';

const makeTodo = buildMakeTodo({ Id });
// can inject dependencies at this stage;
export default makeTodo;

// import { createAction } from 'redux-actions';
import { createAction, ActionType } from 'typesafe-actions';

export const INCREASE = 'counter/INCREASE';
export const DECREASE = 'counter/DECREASE';
export const INCREASE_BY = 'counter/INCREASE_BY';
export const CHANGE_USERNAME = 'username/CHANGE_USERNAME';

export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();

export const increaseBy = createAction(INCREASE_BY, (type: number) => type)();
export const changeUsername = createAction(CHANGE_USERNAME, (type: string) => type)();

const actions = { increase, decrease, increaseBy, changeUsername };
export type CounterAction = ActionType<typeof actions>;

// export const GET_TODO = 'base/GET_TODO';
// export const INSERT_TODO = 'base/INSERT_TODO';
// export const DELETE_TODO = 'base/DELETE_TODO';
// export const TOGGLE_TODO = 'base/TOGGLE_TODO';
// export const INCRESE = 'INCREMENT';
// export const DECREMENT = 'DECREMENT';

// export const increase = createAction(INCRESE);
// export const decrease = createAction(DECREMENT);

// export const insertTodo = createAction(INSERT_TODO);
// export const deleteTodo = createAction(DELETE_TODO);
// export const toggleTodo = createAction(TOGGLE_TODO);
// export const getTodos = createAction(GET_TODO);

// export const increase = () => {
//   return {
//     type: 'INCREMENT',
//   };
// };

// export const decrease = () => {
//   return {
//     type: 'DECREMENT',
//   };
// };

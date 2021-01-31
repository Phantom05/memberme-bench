import { createAction, ActionType, createReducer } from 'typesafe-actions';

export const CreateAction = (...types: any) => {
  return createAction(types)();
};

function sum(a: number, b: number): number {
  return a + b;
}

export default sum;

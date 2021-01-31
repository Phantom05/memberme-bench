import { createAction, ActionType, createReducer } from 'typesafe-actions';

export const CreateAction = (...types: any) => {
  return createAction(types)();
};

export function sum(a: number, b: number): number {
  return a + b;
}

export function capitalize(str: string) {
  // return str.charAt(0).toUpperCase() + str.slice(1);
  return str.replace(/\b[a-z]/, (letter) => letter.toUpperCase());
}

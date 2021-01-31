import produce from 'immer';
import { createReducer } from 'typesafe-actions';
import * as actions from '@actions/index';

interface CounterState {
  count: number;
  username: string;
}

const initialState: CounterState = {
  count: 0,
  username: '',
};

const counter = createReducer<CounterState, actions.CounterAction>(initialState, {
  [actions.INCREASE]: (state, action) =>
    produce(state, (draft) => {
      console.log(state, action);
      draft.count += 1;
    }),

  [actions.DECREASE]: (state, action) =>
    produce(state, (draft) => {
      console.log(state, action);
      draft.count -= 1;
    }),

  [actions.INCREASE_BY]: (state, action) =>
    produce(state, (draft) => {
      console.log(state, action);
      draft.count += action.payload;
    }),

  [actions.CHANGE_USERNAME]: (state, action) =>
    produce(state, (draft) => {
      console.log('CHANGE_USERNAME');
      console.log(state, action);
      draft.username = action.payload;
    }),
});

export default counter;

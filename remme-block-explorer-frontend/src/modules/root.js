import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import blocks, { blocksEpic } from './blocks';
import transactions, { transactionsEpic } from './transactions';
import address, { addressEpic } from './address';

export const rootEpic = combineEpics(
  blocksEpic,
  transactionsEpic,
  addressEpic,
);

export const rootReducer = combineReducers({
  blocks,
  transactions,
  address,
});
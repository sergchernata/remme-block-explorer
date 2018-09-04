import { map, mergeMap } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';

import api from "../config/api";

const ADDRESS_FETCH = "ADDRESS::FETCH";
const ADDRESS_FETCH_FULFILLED = "ADDRESS::FETCH_FULFILLED";

export const addressFetch = ({ start = null, limit = null, address = null } = { start: null, limit: null, address: null }) => ({
  type: ADDRESS_FETCH,
  payload: { start, limit, address }
});

const addressFulfilled = payload => ({ type: ADDRESS_FETCH_FULFILLED, payload });

const addressFetchEpic = (action$) => action$.pipe(
  ofType(ADDRESS_FETCH),
  mergeMap(
    action => {
      if (action.payload.start) {
        action.payload.start = "0x" + ("0000000000000000" + action.payload.start).slice(-16);
      }
      if (action.payload.address) {
        return api.getStateByIdPipe(action.payload.address).pipe(
          map(data => addressFulfilled([ { ...data.response, address: action.payload.address } ]))
        )
      }
      return api.getStatePipe({ params: action.payload }).pipe(
        map(data => addressFulfilled(data.response.data))
      )
    }
  )
);

export const addressEpic = combineEpics(
  addressFetchEpic,
);

const handleFetch = (state, payload) => payload;

const handlers = {
  [ADDRESS_FETCH_FULFILLED]: handleFetch,
};

export default (state = [], action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action.payload) : state;
};
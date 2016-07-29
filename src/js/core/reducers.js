import { fromJS } from 'immutable';

export default function (state, action) {

  if (!state) {
    return fromJS({
      status: '',
      loaded: false
    });
  }

  switch (action.type) {
    case 'STATUS':
      state = state.set('status', action.status);
      break;
    case 'LOAD':
      state = state.set('loaded', action.loaded);
      break;
  }

  return state;
}

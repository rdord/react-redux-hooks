import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './types';

export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
export const fetchUsersSuccess = users => ({ type: FETCH_USERS_SUCCESS, payload: users });
export const fetchUsersFailure = error => ({ type: FETCH_USERS_FAILURE, payload: error });

export const fetchUsers = () => dispatch => {
  dispatch(fetchUsersRequest);
  fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(users => dispatch(fetchUsersSuccess(users.data)))
    .catch(e => dispatch(fetchUsersFailure(e.message)));
};

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../actions';

const Users = () => {
  const userData = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const renderUsers = userData.error ? (
    <p>{userData.error}</p>
  ) : (
    <div>
      users: {userData && userData.users && userData.users.map(user => <span key={user.id}>{user.first_name} </span>)}
    </div>
  );

  return userData.loading ? <p>Loading...</p> : renderUsers;
};

export default Users;

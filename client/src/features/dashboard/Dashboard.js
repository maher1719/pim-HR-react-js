import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from 'features/auth/authSlice';

const Dashboard = () => {
  // Get user from state
  const user = useSelector(state => state.auth.user);
  console.log(user);

  /*if(user.name==undefined){
    const user= useSelector(state=>state.auth.user.user);
  }*/
  const dispatch = useDispatch();

  const onLogoutClick = e => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <div>

    </div>
    
  );
};

export default Dashboard;

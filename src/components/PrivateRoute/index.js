import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const PrivateRoute = ({isAuthenticated,isLoading, ...props }) => {
  
  if(isLoading){
    return <div>is loading...</div>
  }
  if (!isLoading && !isAuthenticated) {
    return <Redirect to="/" />
  }
  return <Route {...props}/>;
};

export default PrivateRoute;

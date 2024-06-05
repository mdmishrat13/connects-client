import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const UserRoute = ({ children }) => {
    const { user, authLoading } = useAuth()
    
    if(authLoading){
        return <h1>Loading</h1>
    }

    if(user){
       return children
    }
    
    return <Navigate to='/' replace/>

    
  
};

export default UserRoute;
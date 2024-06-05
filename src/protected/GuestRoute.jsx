import { Navigate } from 'react-router-dom';
import useAuth from "../hooks/useAuth";

const GuestRoute = ({children}) => {
    const {user}= useAuth()
    // checkAuthenticated()
    if(!user){
        return children
    }
    return <Navigate to='/user' replace={true}/>
};

export default GuestRoute;
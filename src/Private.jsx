import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { Navigate } from "react-router";



const Private = ({children}) => {
     const {user} = useContext(AuthContext);
     
     if(user){
        return children
     }
    return (
        <Navigate to="/login"></Navigate>
    );
};

export default Private;


import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase";


export const AuthContext = createContext(null)


const Authprovider = ({children}) => {

    const [user,setUser] = useState(null);
    const [ok,setOk] = useState(true)
    const [num,setNum] = useState(0)

    const createUser = (email,password)=>{
         setOk(false)
         return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=>{
          setNum(num + 1)
          return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setOk(false)
        return signOut(auth)
    } 

    useEffect(()=>{
       const unSubscrive = onAuthStateChanged(auth, currentUser=>{
        
         if(currentUser){
             setUser(currentUser)
             setNum(prev=>prev + 1);
         }
         else{
            setUser(null)
         }
         console.log(num);
             
         })
         return ()=>{
             unSubscrive();
         }
    },[])
    
    // const [users,setUsers] = useState(null)
    
    
    // const createUser = (email,password) =>{
    //     return createUserWithEmailAndPassword(auth,email,password)
    // }

    // const signIn = (email,password)=>{
    //     return signInWithEmailAndPassword(auth,email,password)
    // }

    // const resetemail = (email)=>{
    //     return sendPasswordResetEmail(auth,email);
    // }

    // const logOut = ()=>{
    //     return signOut(auth);
    // }
    // useEffect(()=>{
    //     const unSubscribe = onAuthStateChanged(auth,currentUser =>{
    //          console.log('onstate',currentUser);
    //          setUsers(currentUser)
             
    //     })
    //     return ()=>{
    //         unSubscribe()
    //     }
    // },[])
   
   
   
    
    const authInfo = {user,createUser,signInUser,logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;

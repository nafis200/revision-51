import { useContext, useRef } from "react";
import { AuthContext } from "./Authprovider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import auth from "./firebase";


const Login = () => {
   
  const navigate = useNavigate()
  const emailRef = useRef();
  const {signInUser} = useContext(AuthContext)
    const handlelogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value
        signInUser(email,password)
        .then(result =>{
           console.log(result.user)
        })
        .catch(error =>{
           console.log(error)
        })
        // signIn(email,password)
        // .then((result)=>{
        //    setUsers(result.user)
        //    console.log('registration set from user', users)
        //    console.log('login user data',result.user)
        //    if(!users.emailVerified){
        //       console.log('not verified');
        //    }
          
           
        // })
        // .catch(error=>{
        //    console.log(error.message)
        // })
        
    }

    const handleforget = ()=>{
         const email = emailRef.current.value
        //  console.log(email);
        //  if(!users){
        //     navigate('/registration')
        //     return    
        //    }
        //  if(!users.emailVerified){
        //    console.log('not verified');
        //    return;
        //  }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email"
          ref = {emailRef}
          className="input input-bordered" 
          required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a onClick={handleforget} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
           <button className="btn btn-primary">Login</button>
        </div>
      </form>
      
    </div>
  </div>
</div>
    );
};

export default Login;
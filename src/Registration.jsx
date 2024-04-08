
import { useForm } from "react-hook-form";





const Registration = () => {
  
   const {register,handleSubmit,reset,formState:{errors}, watch} = useForm()

   const handleRegistration = (data)=>{
         console.log(data);
         
        
   }

  return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Registration now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(handleRegistration)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register('name',{
             required: 'input field is required',
             minLength:{value:3,message:'min length3'}
          })} type="text" placeholder="email" name="name" className={`input input-bordered`}   />
           {errors.name && <p className="text-red-600 font-bold py-2">{errors.name.message}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input  {...register('email',{
             required: 'input field is required'
          })} type="email" placeholder="email" name="email" className="input input-bordered"  />
          {errors.email && <p className="text-red-600 font-bold py-2">{errors.email.message}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  {...register('pass')} type="password" placeholder="password" name="pass"  className="input input-bordered"  />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">confrim Password</span>
          </label>
          <input  {...register('cpass',{validate: da=>{
             if(watch('pass') !== da){
               return 'pass not match'
             }
          }})} type="password" placeholder="password" name="cpass" className="input input-bordered"  />
           <p>{errors.cpass?.message}</p>
        </div>
      
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Login</button>
          
        </div>
      </form>

    </div>
  </div>
</div>
    );
};

export default Registration;
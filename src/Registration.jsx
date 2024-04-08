
import { useForm } from "react-hook-form";





const Registration = () => {
  
   const {register,handleSubmit,reset,formState:{errors}, watch} = useForm()

   const handleRegistration = (data)=>{
         console.log(data);
         
        
   }

  return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="lg:text-5xl md:text-3xl text-xl font-bold mb-5 -ml-8 lg:ml-0 md:ml-0">Registration now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 -ml-5 lg:ml-0 md:ml-0">
      <form  onSubmit={handleSubmit(handleRegistration)} className="card-body">
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
          <input  {...register('pass',{
            required:'password is required',
            minLength:{value: 6, message:'password must be at least 6 character'},
            validate: (value) =>
            /^(?=.*[A-Z])/.test(value) || 'Password must contain at least one uppercase letter',
          })} type="password" placeholder="password" name="pass"  className="input input-bordered"  />
          {errors.pass && <p>{errors.pass.message}</p>}
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
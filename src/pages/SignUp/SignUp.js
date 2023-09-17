import React, { useContext, useState } from 'react';
import img1 from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
const SignUp = () => {
  const {createUser,varifyEmail}=useContext(AuthContext)
  const [error,setError]=useState([])
  const [success,setSuccess]=useState(false)
    const handleSignUp=event=>
    {
        event.preventDefault();
        const form=event.target;
        const email=form.email.value
        const password=form.password.value
        const confirm= form.confirm.value
        const name = form.value

        if(password.length<6){
          setError('Password Should be atleast 6 characters')
          return;
    }
    if (password !== confirm)
    {
      setError('Password not match')
      return;
    }

        createUser(email,password)
        .then(result=>{
          const user=result.user;
          setSuccess(true)
          form.reset();
          handleEmailVarification();
          alert('Varify your email')
          return;
        })
        .catch(err=>{
          console.error(err)
        })

    }

    
    const handleEmailVarification=()=>
    {
      varifyEmail()
      .then(()=>{})
      .catch(e=>
        {
          console.error(e)
        })
    }
  
    return (
        <div className="hero w-full my-20 ">
        <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className='w-3/4' src={img1} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-10">
          <h1 className="text-5xl font-bold text-center">Sign up</h1>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text"name='name' placeholder="Name" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"name='password' placeholder="password" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm passsword</span>
                </label>
                <input type="password"name='confirm' placeholder="Confirm password" className="input input-bordered" required/>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-warning" type="submit" value="Sign up" />
              </div>
            </form>
            <p className='text-center'>
                Already have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link>
            </p>
            <div className='text-center text-red-600 font-bold'>
            {
                  success?<small className='text-primary'>User successfully created</small>:
                  <small className='text-danger'>{error}</small> 
                }
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;
import React, { useContext, useState } from 'react';
import img1 from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { setAuthToken } from '../../JWT/Auth.Token';

const Login = () => {
  const {login,setLoading}=useContext(AuthContext)
  const [error,setError]=useState([])
  const [success,setSuccess]=useState(false)
  const navigate=useNavigate();
  const location=useLocation();
  const from=location.state?.from?.pathname || '/'
  
    const handleLogin=event=>
    {
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        
        
        login(email,password)
        .then(result=>
          {
            const user= result.user
            setSuccess(true)
           setAuthToken(user)
                    // setSuccess(true)
              form.reset();
            if(user.emailVerified)
                {
                    navigate(from,{replace:true})
                }
            else
                {
                    alert('Email is not verified')
                }
          })
          .catch(error=>
            {
              setError(error.message)
            })
          .finally(()=>
          {
            setLoading(false)
          }) 
    }
    return (
        <div className="hero w-full my-20 ">
        <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className='w-3/4' src={img1} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-10">
          <h1 className="text-5xl font-bold text-center">Login</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-warning" type="submit" value="Login" />
              </div>
            </form>
            <p className='text-center'>
                Don't have an account? <Link className='text-orange-600 font-bold' to='/signup'>Sign up</Link>
            </p>
            <div className=' text-center'>
            {
              success?
              <small className='text-primary ms-2 text-red-600'></small>:<small className=' ms-3 text-red-600'>{error}</small>
          } 
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;
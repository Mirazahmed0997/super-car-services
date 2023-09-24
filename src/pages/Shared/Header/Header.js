import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Header = () => {
  const {user,logout,GoogleSignIn}=useContext(AuthContext)
  const googleProvider =new GoogleAuthProvider()
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/'

  const handleGoogleSignIn=()=>
  {
    GoogleSignIn(googleProvider)
    .then(result=>
      {
          const user=result.user
          navigate(from,{replace:true})

      })
  
      .catch(error=>console.error(error))
  }

  const handleLogOut=()=>
  {
    logout()
    .then()
    .catch();
  }

    const menuItems=<>
        <li className='font-semibold '>
            <Link to='/'>Home</Link>
        </li>
        {
          user?.email ?
          <>
            <li className='font-semibold '><Link to='/orders'>Orders</Link></li>
            <li className='font-semibold '><Link onClick={handleLogOut} className="font-semibold">Logout</Link></li>
          </>:
          <li className='font-semibold '><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className='m-0'>
            <div className="navbar h-20 mb-12  bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex ">
       {menuItems}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      {menuItems}
    </ul>
  </div>
  <div className="navbar-end">


  {
          user?.uid ?
          <>
              <p className='mx-2 font-semibold text-orange-600'>{user?.displayName}</p>
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>

          </>:
          <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning">Sign in with Google</button>
          
        }

  </div>
     </div>
     </div>
    );
};

export default Header;
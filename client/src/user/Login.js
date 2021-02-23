import { signin } from './../auth/api.auth'
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {localSave} from './../helper/localStorage'

function Login() {

  const [values, setValues] = useState({
    password: '',
    email: '',
    error: ''
  })
 const [redirect,setRedirect]=useState(null)
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
    
  }

  const clickSubmit = (e) => {
    e.preventDefault()
    const user = {
      
      email: values.email || undefined,
      password: values.password || undefined,
    }

    signin(user).then((data) => {
    
      if (data.error) {

        setValues({ ...values, error: data.error })


      } else {
       localSave("token",data.token);
       localSave("user",data.user);           
       setRedirect(true);      

      }

    })
  }

  if(redirect){
    return(
      
      <Redirect
      to={{ pathname: "/dashboard" ,
    
      }}
      
      />
    )
  }

  else{
    return (
      <div  className="report issue-login bg-blue-400 grid grid-cols-1 w-full h-ful">
          
         <div className=" bg-white border rounded-md place-self-center w-2/5 h-78 pt-8 .shadow-lg">
         <form className="font-sans flex flex-col items-center mt-2 pb-8 ">
              
              <input value={values.email} onChange={handleChange('email')}  placeholder="Email Address (Office Email)" className=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-4 focus:ring-2 focus:ring-gray-400 " name="email" type="email"/>
              <input value={values.password} onChange={handleChange('password')}  placeholder="Password" className=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-4 focus:ring-2 focus:ring-gray-400 " name= "password" type="password" />
              <input value="Login" onClick={clickSubmit} className=' font-semibold text-white bg-green-500 w-28 h-10 rounded-md mt-6 border-gray-400 focus:ring-2 focus:ring-blue-400 '  type="submit"/>
  
             </form>

         </div>
       
         
      </div>
    );}
  }
  
  export default Login;
   
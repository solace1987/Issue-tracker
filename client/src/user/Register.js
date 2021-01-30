
import React, { useState } from 'react'
import { create } from './api.user'
import { Redirect } from 'react-router-dom';


function UserReg() {
  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
    department: '',
    open: false,
    error: ''
  })
  const [redirect, setRedirect] = useState(null);
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const clickSubmit = (e) => {
    e.preventDefault()
    const user = {
      role:'User',
      name: values.name || undefined,
      email: values.email || undefined,
      department: values.department || undefined,
      password: values.password || undefined

    }

    create(user).then((data) => {
     
      if (data.error) {

        setValues({ ...values, error: data.error })


      } else {

        setRedirect("New Account Created")

      }

    })



  }

  if (redirect) {
    
    return (<Redirect
      to={{
        pathname: "/new-account",
        }}
    />)
  }
  else {
    return (
      <div className=" report" class="issue-login bg-blue-400 grid grid-cols-1 w-full h-ful">

        <div class=" bg-white border rounded-md place-self-center w-2/5 h-2/4 pt-8 .shadow-lg">
          <form class="font-sans flex flex-col items-center mt-2 ">

            <input placeholder="Name" class=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400" name='name' value={values.name} onChange={handleChange('name')} type="text" />
            <input placeholder="Department" class=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400" name="department" value={values.department} onChange={handleChange('department')} type="text" />
            <input placeholder="Email Address (Office Email)" class=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400 " name="email" value={values.email} onChange={handleChange('email')} type="email" />
            <input placeholder="Password" class=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400 " name="password" value={values.password} onChange={handleChange('password')} type="password" />
            <button onClick={clickSubmit} class=' font-semibold text-white bg-green-500 w-28 h-10 rounded-md mt-6 border-gray-400 focus:ring-2 focus:ring-blue-400 '>Register</button>

          </form>

        </div>


      </div>
    );
  }
}

export default UserReg;

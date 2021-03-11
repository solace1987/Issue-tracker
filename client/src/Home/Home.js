import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { create } from './../incidence/api.incident'
import { confirmUser } from './../user/api.user'

function Home() {

  const [values, setValues] = useState({
    user: '',
    issue: '',
    dept: '',
    status: 'Open',
    email: '',

  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })

  }


  const clickSubmit = (e) => {
    const abortController = new AbortController()
    const signal = abortController.signal
    e.preventDefault()
    const incident = {

      user: values.user || undefined,
      issue: values.issue || undefined,
      dept: values.dept || undefined,
      email: values.email || undefined,
      status:"Open"

    }

    confirmUser(incident.email, signal).then(data => {
      
      if (data.error) {
        setValues({ ...values, error: data.error })

      }
      else {

        if (data.isFound) {

          create(incident).then((data) => {
            if (data.error) {
            setValues({ ...values, error: data.error })
            } 
            else {
              setValues({})
            }

          })
        
        }

        else{
          console.log("user does not exit")
          
        }

      }

    })




  }
  return (

    <div className=" issue-login flex">
      <div className='left-bar'>
        <div className=" p-6">
          <h3 className=" text-blue-600 font-sans text-2xl font-semibold">ICT Issue Tracker</h3>
          <h4 className="text-blue-400 font-sans text-base">Report and manage your ICT issues.</h4>
        </div>
      </div>
      <div className='form-area bg-blue-400 className="text-right" p-4 pt-10 w-4/5 h-full'>
        {/* <div className="bg-blue-400 p-4  mx-auto"> */}
        <div className="font-semibold font-sans text-white text-right w-full">
          <Link className="p2" to="/register">Register</Link>
          <Link className="p2 pl-4" to="/login">Login</Link>


        </div>
        <div className="mt-24 text-lg font-semibold  font-sans text-white text-center w-full">
          <h3>Quick Report</h3>
        </div>
        <form className="font-sans flex flex-col items-center mt-2 w-full ">

          <input onChange={handleChange('user')} placeholder="user" className="text-sm text-gray-500 shadow-md w-5/12 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400" name='name' type="text" />
          <input onChange={handleChange('email')} placeholder="email" className=" text-sm text-gray-500 max-w-md w-5/12 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400 " type="email" />
          <input onChange={handleChange('dept')} placeholder="Department" className="text-sm text-gray-500 shadow-md w-5/12 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400" name='dept' type="text" />
          <textarea onChange={handleChange('issue')} placeholder="What issue are you Experiencing?" className=" text-sm text-gray-500 max-w-md w-5/12 max-h-md h-48 border rounded-sm border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400 " name="issue" type="text" />
          <input value="Submit" onClick={clickSubmit} className=' font-semibold text-white bg-green-500 w-28 h-10 rounded-md mt-6 border-gray-400 focus:ring-2 focus:ring-blue-400 ' type="submit" />

        </form>
        {/* </div> */}
      </div>
    </div>

  );
}

export default Home;

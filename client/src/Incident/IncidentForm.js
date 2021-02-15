import { signin } from './../auth/api.auth'
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';


function IncidentForm() {

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
         console.log(user)
          if (data.error) {
    
            setValues({ ...values, error: data.error })
    
    
          } else {
            localStorage.setItem('token', data.token);
           setRedirect('true')
            
    
          }
    
        })
      }
    

    return (
        <div className=" report" class="issue-login bg-blue-400 grid grid-cols-1 w-full h-ful">

            <div class=" bg-white border rounded-md place-self-center w-2/5 h-3/4 pt-8 .shadow-lg">
                <form class="font-sans flex flex-col items-center mt-2 ">

                    <input placeholder="User Name" class=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400"
                        name='user' value={values.name} type="text" />
                    <input placeholder="Department" class=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400"
                        name="dept" value={values.department} type="text" />
                    <input placeholder="Main Issue" class=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400 "
                        name="issue" value={values.email} onChange={handleChange('email')} type="text" />
                    <input placeholder="Time Reported" class=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400 "
                        name="timeReported" value={values.password} type="password" />
                    <input placeholder="Root Cause" class=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400 "
                        name="cause" value={values.password} onChange={handleChange('password')} type="password" />
                    <input placeholder="Resolution" class=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400 "
                        name="resolution" value={values.password} onChange={handleChange('password')} type="password" />
                    <div className='text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400'><label for="status">Status of incident</label>
                    <select className='px-10 mx-6' name="status" id="status">
                        <option value=''>Select Status</option>
                        <option value="Open">Open</option>
                        <option value="Close">Close</option>
                    </select>
                    </div>

                    <button onClick={clickSubmit} class=' font-semibold text-white bg-green-500 w-28 h-10 rounded-md mt-6 border-gray-400 focus:ring-2 focus:ring-blue-400 '>Submit</button>

                </form>

            </div>


        </div>
    )
}

export default IncidentForm
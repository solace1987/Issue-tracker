import {create} from './../incidence/api.incident'
import React, { useState } from 'react';



function IncidentForm() {

    const [values, setValues] = useState({
        user: 'Shola',
        issue: '',
        resolution: '',
        email:'oluwasholaogundipe@globalplusonline.com',
        dept: 'ICT',
        timeReported:Date.now(),
        status:'',
        cause:''

      })
    
      const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
        
      }
    
      const clickSubmit = (e) => {
        e.preventDefault()
        const incident = {
          
            user: values.user||undefined,
            issue: values.issue||undefined,
            resolution: values.resolution||undefined,
            dept:values.dept||undefined,
            status:values.status||undefined,
            cause:values.cause||undefined
        }

        console.log(incident)
    
        create(incident).then((data) => {
        
          if (data.error) {
    
            setValues({ ...values, error: data.error })
    
    
          } else {
            
            console.log(data)
    
          }
    
        })
      }
    

    return (
        <div className=" report" class="issue-login bg-blue-400 grid grid-cols-1 w-full h-ful">

            <div class=" bg-white border rounded-md place-self-center w-2/5 h-2/4 pt-8 .shadow-lg">
                <form class="font-sans flex flex-col items-center mt-2 ">
                    <input placeholder="Main Issue" class=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400 "
                        name="issue" value={values.issue} onChange={handleChange('issue')} type="text" />
                    <input placeholder="Root Cause" class=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400 "
                        name="cause" value={values.cause} onChange={handleChange('cause')} type="text" />
                    <input placeholder="Resolution" class=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400 "
                        name="resolution" value={values.resolution} onChange={handleChange('resolution')} type="text" />
                    <div className='text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400'><label for="status">Status of incident</label>
                    <select className='px-10 mx-6' name="status" id="status" onChange={handleChange('status')}>
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
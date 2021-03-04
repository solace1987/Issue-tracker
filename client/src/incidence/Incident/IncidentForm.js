import { create, read, update } from '../api.incident'
import React, { useEffect, useState } from 'react';
import { localFetch } from '../../helper/localStorage'
import { useHistory } from 'react-router-dom';


function IncidentForm(props) {
  let history = useHistory();
  const type = props.location.state.isUpdate;

  const userData = localFetch('user')

  const jwt = localFetch('token');


  const [values, setValues] = useState({
    user: userData.name,
    issue: '',
    resolution: '',
    email: userData.email,
    dept: userData.department,
    timeReported: Date.now(),
    status: '',
    cause: ''

  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })

  }

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    read({incidentId: props.match.params.incidentId}, { t: jwt }, signal).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error })
      } else {
        setValues(data)
      
      }
    })
    return function cleanup() {
      abortController.abort()
    }

  },[props.match.params.incidentId])


  const clickSubmit = (e) => {

    if (type) {
      e.preventDefault()
      update({incidentId: props.match.params.incidentId},{t: jwt}, values).then((data) => {
        if (data && data.error) {
          setValues({...values, error: data.error})
        } else {
          console.log(data)
        }
      })
    }
    

    else if (!type) {

      e.preventDefault()
      const incident = {

        user: values.user || undefined,
        issue: values.issue || undefined,
        resolution: values.resolution || undefined,
        dept: values.dept || undefined,
        status: values.status || undefined,
        cause: values.cause || undefined,
        email: values.email || undefined,
        dept: values.dept || undefined
      }

      create(incident).then((data) => {

        if (data.error) {

          setValues({ ...values, error: data.error })


        } else {

          console.log(data)
          history.push({
            pathname: '/dashboard',
            state:{
                msg:data
            }


        });

        }

      })
    }
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
            <select className='px-10 mx-6' name="status" value={values.status} id="status" onChange={handleChange('status')}>
              <option value=''>Select Status</option>
              <option value="Open">Open</option>
              <option value="Close">Close</option>
            </select>
          </div>

          <button onClick={clickSubmit} class=' font-semibold text-white bg-green-500 w-28 h-10 rounded-md mt-6 border-gray-400 focus:ring-2 focus:ring-blue-400 '>{type ? 'UPDATE' : 'SUBMIT'}</button>

        </form>

      </div>


    </div>
  )
}

export default IncidentForm
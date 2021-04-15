import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { create } from './../incidence/api.incident'
import { confirmUser } from './../user/api.user'
import MiniNofify from './../notification/miniNotifyer'

function Home() {


  const [values, setValues] = useState({
    user: '',
    issue: '',
    dept: '',
    status: 'Open',
    email: '',
    msg:'',
    colorType:'',
    isDone:false

  })


  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })

  }


  const clickSubmit = (e) => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    e.preventDefault();

    const incident = {
      user: values.user || undefined,
      issue: values.issue || undefined,
      dept: values.dept || undefined,
      email: values.email || undefined,
      status: "Open"

    };

    confirmUser(incident.email, signal).then(data => {
      if(data===undefined){
        setValues({ ...values, 
          isDone:true, 
          msg:"OOPS! Something's wrong, check your network and confirm info entry",
          colorType:'warning' })
      }
      if (data.error && data ) {
        setValues({ ...values, error: data.error })
      }
      else {
        if (data.isFound) {
          create(incident).then((data) => {
            if(data===undefined){
              setValues({ ...values, 
                isDone:true, 
                msg:'Not connecting, check your network connection,',
                colorType:'warning' })
                
            }
            if (data.error && data) {
              setValues({ ...values, error: data.error,
                isDone:true, 
                msg:'Your issue was not submitted, contact Admin',
                colorType:'warning' })
            }
            else {
              setValues({ ...values, 
                isDone:true, 
                msg:'Your issue has been successfully submitted',
                colorType:'info' })
            }
            }

          )

        }

        else {
          
          setValues({ ...values, 
            isDone:true, 
            msg:'Your are not a registered User, please Register',
            colorType:'warning' })
        }

      }

    })
  }


  return (

    <div className=" issue-login flex">
      <div className='left-bar'>
        <div className=" p-6">
          <h3 className=" text-blue-600 font-sans text-3xl font-bold">ICT Issue Tracker</h3>
          <h4 className="text-blue-400 font-sans text-base">Report and manage your ICT issues.</h4>
        </div>
      </div>
      <div className='form-area bg-blue-400 className="text-right" p-4 pt-10 w-4/5 h-full'>

        <div className="font-semibold text-lg hover:text-red-400 font-sans text-right w-full pr-6">
          <Link className="p2 text-white  hover:text-green-200" to="/register">Register</Link>
          <Link className="p2 text-white  pl-4 hover:text-green-200" to="/login">Login</Link>


        </div>
        <div className="mt-20 text-lg font-semibold  font-sans text-white text-center w-full">
          <div>
            <MiniNofify msg={values.msg} colorType={values.colorType} isDone={values.isDone} />
          </div>
          <h3 class='text-xl font-bold'>Quick Report</h3>
        </div>
        <form className="font-sans flex flex-col items-center mt-2 w-full ">

          <input onChange={handleChange('user')} placeholder="user" className="text-base text-gray-500 shadow-md w-5/12 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400" name='name' type="text" />
          <input onChange={handleChange('email')} placeholder="email" className=" text-base text-gray-500 max-w-md w-5/12 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400 " type="email" />
          <input onChange={handleChange('dept')} placeholder="Department" className="text-base text-gray-500 shadow-md w-5/12 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400" name='dept' type="text" />
          <textarea onChange={handleChange('issue')} placeholder="What issue are you Experiencing?" className=" text-base text-gray-500 max-w-md w-5/12 max-h-md h-48 border rounded-sm border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400 " name="issue" type="text" />
          <input value="Submit" onClick={clickSubmit} className=' font-semibold text-white bg-green-500 w-28 h-10 rounded-md mt-6 border-gray-400 focus:ring-2 focus:ring-blue-400 ' type="submit" />

        </form>
        
      </div>
    </div>

  );
}

export default Home;

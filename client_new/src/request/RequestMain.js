import Requesttable from './../dashbaord/Table/requestTable'
import React, { useEffect, useState } from 'react';
import { localFetch } from '../helper/localStorage'

//<input className='p-2 pl-4 rounded-sm w-6/12 '/>
function RequestMain(){
    const userData = localFetch('user')
    const [values, setValues] = useState({
        user: userData.name,
        dept: userData.dept,
        email: userData.email,
        request: '',
        timeReported: Date.now(),
        timeExecuted: '',
        status: '',
        remark: '',
        cartegory:''  
      })

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    
      }

    return(
        <div>
        <div className='pt-8 w-10/12'>
            <form >
            <select className='w-6/12 px-10 p-2 pl-4 mx-6' name="cartegory" id="status"  value={values.cartegory} onChange={handleChange('cartegory')}>
                        <option value=''>Select Request</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Mouse">Mouse</option>
                        <option value="Keyboard">Keyboard</option>
                        <option value="Toner">Toner </option>
                        <option value="Hard Drive">Hard Drive </option>
                        <option value="Software">Software </option>
                       <option value="Printer">Printer </option>
                    </select>
                    
            <button className='m-2 p-2 bg-green-400 text-white rounded-sm'>Add Request</button>
            </form>

        </div>
        <Requesttable/>

        </div>
    )
}

export default RequestMain
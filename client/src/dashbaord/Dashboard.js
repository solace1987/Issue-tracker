
import Sidebar from './Sidebar';
import { list } from '../incidence/api.incident'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { localFetch } from './../helper/localStorage'
import MainBar from './../mainBar/MainBar'


function Dashboard() {

    const userData = localFetch("user");

    const [value, setValue] = useState({ data: [], title: null })

    let history = useHistory();

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        list(signal, userData.email).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setValue({ ...value, data: data })
            }
        })

        return function cleanup() {
            abortController.abort()
        }
    }, [])

    const createIncident = () => {
        history.push({
            pathname: '/incident',
            state: {
                isUpdate: false
            }


        });
    }

    let onAction = (ed) => {

        setValue({ ...value, title: ed })


    }



    return (

        <div className="h-screen overflow-auto flex items-center justify-center" style={{ background: "#rgb(237, 242, 247)" }}>
            <div className="flex flex-wrap  w-full h-screen">
                <div className="w-2/12 bg-white rounded p-3 shadow-lg">
                    <div className="flex items-center space-x-4 p-2 mb-10">

                        <div className='w-full flex flex-col self-center'>
                            <h4 className=" text-center font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">{userData.name}</h4>
                            <span className=" auto-mid text-sm  flex items-center space-x-1">
                                <svg className="h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg><span className="text-gray-600">Verified</span>
                            </span>
                        </div>
                    </div>
                    <Sidebar onAction={onAction} />
                </div>

                <MainBar title={value.title} total={value.data.numClosed + value.data.numOpen} remaining={value.data.numOpen} done={value.data.numClosed} data={value.data.incident} createIncident={createIncident} name={userData.name} />

            </div>
        </div>



    )

}

export default Dashboard;
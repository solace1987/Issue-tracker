import Table from './../dashbaord/Table/Incidenttable'
import Tile from './../dashbaord/dashTile/Tile'
import RequestMain from './../request/RequestMain'
import Welcome from './../welcome/welcome'
import DatePicker from 'react-date-picker';
import React, { useEffect,useState } from 'react';
import { list } from '../incidence/api.incident';
import { localFetch } from './../helper/localStorage';
import { useHistory } from 'react-router-dom';



function MainBar(props) {

    let history = useHistory();
    const [startDateValue, startDateChange] = useState(new Date());
    const [endDateValue, endDateChange] = useState(new Date());
    const userData = localFetch("user");
    
    const [value, setValue] = useState({data:[] })
    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        list(signal, userData.email, userData.role, 'incident',endDateValue.toISOString(),startDateValue.toISOString()).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setValue({ ...value, data: data })
               console.log(value)
            }
        })

        return function cleanup() {
            abortController.abort()
        }
    }, []);

   

    const createIncident = () => {
        history.push({
            pathname: '/incident',
            state: {
                isUpdate: false
            }


        });
    }

    if (props.title === 'Incident') {
        return (

            <div className='flex flex-col w-10/12 overflow-hidden '>
                <Tile title={props.title} total={value.data.numClosed+value.data.numOpen} remaining={value.data.numOpen} done={value.data.numClosed}></Tile>
                <div className='w-12/12 m-6 flex  flex-row p-4 ml-12 items-stretch justify-end' >
             {
                 /* <div className='flex flex-row pr-8 gap-x-12 '>
                 <h3 className='text-base font-semibold self-center text-gray-700'>Select Period</h3>
                 <h4 className='self-center'>Start Date:</h4>
                 <DatePicker  className="h-8 rounded-lg pl-1" onChange={startDateChange} value={startDateValue} returnValue='start'/>
                 <h4 className='self-center'>End Date:</h4>
                 <DatePicker onChange={endDateChange} value={endDateValue} returnValue='start'/>
                 <button className='bg-red-400 text-white w-24 font-semibold rounded'  >Fetch</button>

             </div>           */ }

                    <svg onClick={createIncident} className='hov-effect mr-12' viewBox="0 0 512 512" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" /><path d="m368 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0" fill="#fafafa" /></svg>
                    
                </div>
                <Table incidents={value.data.incident} className='w-full ' />
            </div>
        )
    }
    else if (props.title === 'Maintenance') {
        return (

            <div className='flex flex-col w-10/12 overflow-hidden h-12/12 maint'>
                <div className='w-12/12  h-full flex justify-center items-center bg-blue-200 bg-opacity-25 '>
                    <h1 className='text-indigo-400 font-bold text-5xl'>UNDER CONSTRUCTION</h1>
                </div>
            </div>
        )
    }
    else if (props.title === 'Request') {
        return (

            <div className='flex flex-col w-10/12 overflow-hidden h-12/12'>
                <div className='w-12/12  h-full flex justify-center bg-blue-200 bg-opacity-25 '>
                    <RequestMain/>
                </div>
            </div>
        )
    }
    else if (props.title === 'Notification') {
        return (

            <div className='flex flex-col w-10/12 overflow-hidden h-12/12 maint'>
                <div className='w-12/12  h-full flex justify-center items-center bg-blue-200 bg-opacity-25 '>
                    <h1 className='text-indigo-400 font-bold text-5xl'>UNDER CONSTRUCTION</h1>
                </div>
            </div>
        )
    } else if (props.title === 'Profile') {
        return (

            <div className='flex flex-col w-10/12 overflow-hidden h-12/12 maint'>
                <div className='w-12/12  h-full flex justify-center items-center bg-blue-200 bg-opacity-25 '>
                    <h1 className='text-indigo-400 font-bold text-5xl'>UNDER CONSTRUCTION</h1>
                </div>
            </div>
        )
    }
    else if (props.title === null) {
        return (
            <Welcome name={userData.name} />
        )
    }
}

export default MainBar;
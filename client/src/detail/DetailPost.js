import Detail from "./Detail"
import { read, update } from '../incidence/api.incident'
import React, { useEffect, useState } from 'react';
import { localFetch } from '../helper/localStorage'
import { useHistory } from 'react-router-dom';

function DetailPost(props) {
    let history = useHistory();

    const userData = localFetch('user')
    const jwt = localFetch('token');
    const [values, setValues] = useState({ update: [], chat: '' })
    const chatMsg=values.update

    const handleChange = name => event => {
        
        setValues({ ...values, [name]: event.target.value })
        console.log(values.chat)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const chat = {
            message: values.chat,
            role: userData.role,
            date: Date.now()
        }
            chatMsg.push(chat)


        setValues({ update: chatMsg })
        console.log(values)
    }
    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        read({ incidentId: props.match.params.incidentId }, { t: jwt }, signal).then((data) => {
            if (data && data.error) {
                setValues({ ...values, error: data.error })
            } else {

                setValues({ update: data.update })


            }
        })
        return function cleanup() {
            abortController.abort()
        }

    }, [props.match.params.incidentId])

    return (
        <div className='w-screen h-screen'>
            <div className="w-full h-5/6">
                <Detail />
            </div>
            <form className='h1/6 w-full  p-4 flex items-center items-stretch bg-green-400 bg-opacity-10 shadow'>
                <input className='w-4/5 h-12 border pl-4 rounded-md m-4' placeholder="What's Up" type='test' onChange={handleChange('chat')} />
                <input className=' h-12 w-20 rounded-md bg-red-600 text-white m-4' type='submit' value="SUBMIT" onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default DetailPost;
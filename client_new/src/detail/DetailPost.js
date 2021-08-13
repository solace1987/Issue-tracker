import Detail from "./Detail"
import { read, update } from '../incidence/api.incident'
import React, { useEffect, useState } from 'react';
import { localFetch } from '../helper/localStorage'
import { useHistory } from 'react-router-dom';

function DetailPost(props) {
    let history = useHistory();

    const userData = localFetch('user')
    const jwt = localFetch('token');
    const [values, setValues] = useState({ update: [] })
    const [msg, setMsg] = useState('')
    

    const scrollToBottom = () => {
        const lastDiv = document.querySelectorAll('.last')
       lastDiv[0].scrollIntoView({ behavior: "smooth" })

    }
    const handleChange = event => {

        setMsg(event.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        //let inputField= document.querySelectorAll('input')[0].value
        const chat = {
            message: msg,
            role: userData.role,
            date: Date.now()
        }

        const chatMsg = values.update;
        chatMsg.push(chat)
        setValues({ update: chatMsg })

        update({ incidentId: props.match.params.incidentId }, { t: jwt }, { update: values.update }).then((data) => {
            if (data && data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setMsg('')
                scrollToBottom()
            }
        })

    }
    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        read({ incidentId: props.match.params.incidentId }, { t: jwt }, signal).then((data) => {
            if (data && data.error) {
                setValues({ ...values, error: data.error })
            } else {

                setValues({ update: data.update })
                scrollToBottom()

            }
        })
        return function cleanup() {
            abortController.abort()
        }

    }, [props.match.params.incidentId])

    return (
        <div className='w-screen h-screen overflow-hidden'>
            <div className="w-full h-5/6 overflow-auto">
                <Detail chatMsg={values.update} />
                <div className='last' style={{ float: "left", clear: "both" }}
                >
                </div>
            </div>
            <form className='h1/6 w-full  p-4 flex items-center items-stretch bg-green-400 bg-opacity-10 shadow'>
                <input className='w-4/5 h-12 border pl-4 rounded-md m-4' placeholder="What's Up" value={msg} type='test' onChange={handleChange} />
                <input className=' h-12 w-20 rounded-md bg-red-600 text-white m-4' type='submit' value="SUBMIT" onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default DetailPost;
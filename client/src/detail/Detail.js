import DetailItem from './DetailItem'
import { localFetch } from '../helper/localStorage'

function Details({chatMsg}) {
   
    const userData = localFetch('user')
    console.log(userData.role)
    
       const DetailItems= (chatMsg.map(chat=>{
        console.log(chat.role)
        return(
            <DetailItem user={userData.role} role={chat.role} msg={chat.message} date={chat.date}/>
        )
        }))

    return (
        <div className='w-full h-full p-6 bg-white bg-opacity-40'>
            {DetailItems}
        </div>
    )
}

export default Details
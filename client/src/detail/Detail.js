import DetailItem from './DetailItem'
import { localFetch } from '../helper/localStorage'

function Details({chatMsg}) {
   
    const userData = localFetch('user')
       const DetailItems= (chatMsg.map(chat=>{
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
import DetailItem from './DetailItem'


function Details(props) {
 

    return (
        <div className='w-full h-full p-6 bg-white bg-opacity-40'>
            <DetailItem user='Admin' role='user' />
            <DetailItem role='Admin' user='Admin' />
        </div>
    )
}

export default Details
function Welcome(props) {

    return (
        <div className='bg-blue-400 w-10/12'>
            <h1 className='flex item-center w-full justify-center m-10 text-4xl text-white'>Welcome {props.name}</h1>
        </div>
    )
}

export default Welcome;
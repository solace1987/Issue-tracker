function Tile({ total, done, remaining, title }) {
    return (
        <div className='w-full flex items-center  flex-col '>
            <h2 className='text-center text-4xl mb-4 font-semibold p-4 text-gray-500'>{title}</h2>
            <div className="flex rounded-lg w-8/12 border h-20 py-10 p-4 text-lg items-center bg-blue-500 text-white text-center">
                <div className='flex-grow '>
                    <h2><span className='text-2xl tracking-tighter text-gray-200'>Total:</span> <span className='text-4xl'>{total}</span></h2>
                </div>
                <div className='flex-grow text-4xl'><h2><span className='text-2xl tracking-tighter text-gray-200'>Resolved:</span> {done}</h2></div>
                <div className='flex-grow text-4xl'><h2><span className='text-2xl tracking-tighter text-gray-200'>Remaining: </span>{remaining}</h2></div>
            </div>
        </div>
    )
}

export default Tile;
function Tile({ total, done, remaining, title }) {
    return (
        <div className='w-full flex items-center border flex-col'>
            <h2 className='text-center text-5xl font-semibold p-4 text-green-400'>{title}</h2>
            <div className="flex w-8/12  p-4 mx-4 text-lg">
                <div className='flex-grow'><h2><span className='text-3xl tracking-tighter'>T</span>otal: <span>{total}</span></h2></div>
                <div className='flex-grow'><h2><span>C</span>ompleted: {done}</h2></div>
                <div className='flex-grow'><h2><span>R</span>emaining: {remaining}</h2></div>
            </div>
        </div>
    )
}

export default Tile;
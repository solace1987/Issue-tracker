


function MiniNofify({ msg, colorType, isDone }) {
    let color = '';

    if (colorType === 'warning') {
        color = 'h-10 mb-4 bg-red-300  rounded-sm'
    }
    else if (colorType === 'info') {
        color = 'h-10 mb-4 bg-green-300  rounded-sm'
    }

    if(isDone){
        return (
            <div className={color}>
                <h2 className='pt-2 text-gray-100 text-lg'>{msg}</h2>
            </div>
        )

    }

    else{
            return(
                <div>

                </div>
            )

    }

   
}

export default MiniNofify;
import Table from './../dashbaord/Table/Usertable'
import Tile from './../dashbaord/dashTile/Tile'
import Welcome from './../welcome/welcome'

function MainBar(props){
    if(props.title==='Incident'){
        return(

            <div className='flex flex-col w-10/12 overflow-y-auto '>
                    <Tile title={props.title} total={2} remaining={2} done={0}></Tile>
                    <div className='w-12/12 m-6 flex flex-row-reverse p-4 ml-12' >
                        <svg onClick={props.createIncident} className='hov-effect' viewBox="0 0 512 512" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" /><path d="m368 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0" fill="#fafafa" /></svg>

                    </div>
                    <Table incidents={props.data} className='w-full' />
                </div>
        )
    }
    else if(props.title==='Maintenance'){
        return(

            <div className='flex flex-col w-10/12 overflow-y-auto h-12/12 maint'>
                   <div className='w-12/12  h-full flex justify-center items-center bg-blue-200 bg-opacity-25 '>
                       <h1 className='text-indigo-400 font-bold text-5xl'>UNDER CONSTRUCTION</h1>
                   </div>
                </div>
        )
    }
    else if(props.title==='Request'){
        return(

            <div className='flex flex-col w-10/12 overflow-y-auto h-12/12 maint'>
                   <div className='w-12/12  h-full flex justify-center items-center bg-blue-200 bg-opacity-25 '>
                       <h1 className='text-indigo-400 font-bold text-5xl'>UNDER CONSTRUCTION</h1>
                   </div>
                </div>
        )
    }
    else if(props.title==='Notification'){
        return(

            <div className='flex flex-col w-10/12 overflow-y-auto h-12/12 maint'>
                   <div className='w-12/12  h-full flex justify-center items-center bg-blue-200 bg-opacity-25 '>
                       <h1 className='text-indigo-400 font-bold text-5xl'>UNDER CONSTRUCTION</h1>
                   </div>
                </div>
        )
    }else if(props.title==='Profile'){
        return(

            <div className='flex flex-col w-10/12 overflow-y-auto h-12/12 maint'>
                   <div className='w-12/12  h-full flex justify-center items-center bg-blue-200 bg-opacity-25 '>
                       <h1 className='text-indigo-400 font-bold text-5xl'>UNDER CONSTRUCTION</h1>
                   </div>
                </div>
        )
    }
    else if(props.title===null){
        return(
        <Welcome name={props.name}/>
        )
    }
}

export default MainBar;
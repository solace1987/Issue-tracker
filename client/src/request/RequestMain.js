import Requesttable from './../dashbaord/Table/requestTable'
//<input className='p-2 pl-4 rounded-sm w-6/12 '/>
function RequestMain(){

    return(
        <div>
        <div className='pt-8 w-10/12'>
            <form >
            <select className='w-6/12 px-10 p-2 pl-4 mx-6' name="status" id="status"  value= ''>
                        <option value=''>Select Request</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Mouse">Mouse</option>
                        <option value="Keyboard">Keyboard</option>
                        <option value="Toner">Toner </option>
                        <option value="Hard Drive">Hard Drive </option>
                        <option value="Software">Software </option>

                    </select>
                    
            <button className='m-2 p-2 bg-green-400 text-white rounded-sm'>Add Request</button>
            </form>

        </div>
        <Requesttable/>

        </div>
    )
}

export default RequestMain
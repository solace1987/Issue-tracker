
function Tablerow({ incidents }) {

     let rowData = (incident, index) => {
         let date=new Date(incident.timeReported).toDateString()
         console.log(date)
         if(!incident){
             return;
         }

        return (
            <tr className='text-xs'>
                <td  className="border border-grey-500 px-2">{index}</td>
                <td  className="border border-grey-50 px-2 ">{incident.user}</td>
                <td  className="border px-2">{incident.dept}</td>
                <td  className="border border-grey-500 px-2 w-1/5">{incident.issue}</td>
                <td  className="border border-grey-500 px-2 w-1/12">{date}</td>
                <td  className="border border-grey-500 px-2 w-1/5">{incident.cause}</td>
                <td  className="border border-grey-500 px-2 w-1/5">{incident.resolution}</td>
                <td  className="border border-grey-500 px-2 w-1/12">{incident.status}</td>
                <td  className=" px-2"><button className='rounded-md bg-green-500 text-white p-2 m-1'>Details</button></td>
                <td  className="px-2"><button className='rounded-md bg-red-500 text-white p-2 m-1'>Edit</button></td>
            </tr>
        )
    }
    return (
        <tbody >
            {incidents.map(rowData)}
        </tbody>
    )

}

export default Tablerow;
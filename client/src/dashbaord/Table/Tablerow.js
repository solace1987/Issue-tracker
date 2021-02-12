import addData from './addData'
function Tablerow({ incidents }) {

    let count = 0;
    let rowData = (incident, index) => {

        return (
            <tr>
                <td key={count + 1} className="border border-green-50 px-2">{index}</td>
                <td key={count + 1} className="border border-green-50 px-2">{incident.user}</td>
                <td key={count + 1} className="border px-2">{incident.dept}</td>
                
                <td key={count + 1} className="border border-green-50 px-2">{incident.issue}</td>
                <td key={count + 1} className="border border-green-50 px-2">{incident.timeReported}</td>
                <td key={count + 1} className="border border-green-50 px-2">{incident.cause}</td>
                <td key={count + 1} className="border border-green-50 px-2">{incident.resolution}</td>
                <td key={count + 1} className="border border-green-50 px-2">{incident.status}</td>


            </tr>

        )
    }
    return (
        <tbody >
            
                {incidents.map(rowData)}
            
        </tbody>
    )

}

export default addData(Tablerow);
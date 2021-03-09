import { localFetch } from './../../helper/localStorage';
import { useHistory } from 'react-router-dom';
function Tablerow({ incidents }) {
    const userRole = localFetch('user').role;
    let history = useHistory();
        let rowEdit = (incidentId) => {
        if (userRole === 'Admin') {
            return (<td className="px-2"><button onClick={() => onEdit(incidentId)} className='rounded-md bg-red-500 text-white p-2 m-1'>Edit</button></td>)
        }
        else {
            return
        }
    }

    const onEdit = (id) => {

        history.push({
            pathname: '/incident/' + id,
            state: {
                isUpdate: true,
            }
        });
    }

    const onDetail = (id) => {

        history.push({
            pathname: '/details/' + id,
            state: {

            }
        });
    }
    let rowData = (incident, index) => {

        let date = new Date(incident.timeReported)
        let formattedDate = date.toDateString() + "- " + date.toLocaleTimeString();
        if (!incident) {

            return;
        }
        return (

            <tr className='text-xs' key={incident._id} >
                <td className="border border-grey-500 px-2">{index}</td>
                <td className="border border-grey-50 px-2 ">{incident.user}</td>
                <td className="border px-2">{incident.dept}</td>
                <td className="border border-grey-500 px-2 w-1/5">{incident.issue}</td>
                <td className="border border-grey-500 px-2 w-1/12">{formattedDate}</td>
                <td className="border border-grey-500 px-2 w-1/5">{incident.cause}</td>
                <td className="border border-grey-500 px-2 w-1/5">{incident.resolution}</td>
                <td className="border border-grey-500 px-2 w-1/12">{incident.status}</td>
                <td className=" px-2">
                    <button
                        className='rounded-md bg-green-500 text-white p-2 m-1'
                        onClick={() => onDetail(incident._id)}>Details
                    </button>
                </td>
                {
                    rowEdit(incident._id)
                }

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
import { localFetch } from '../../helper/localStorage';
import { useHistory } from 'react-router-dom';
function Tablerow({ incidents }) {

    const userRole = localFetch('user').role;

    let history = useHistory();
    let rowEdit = (incidentId) => {
        if (userRole === 'Admin') {
            return (
                <td className="px-2">

                    <svg aria-hidden="true"
                        className='rounded-md text-lg text-white bg-green-400 p-2 mr-2'
                        focusable="false"
                        onClick={() => onEdit(incidentId)} 
                        data-prefix="far"
                        data-icon="edit"
                       
                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path>
                    </svg>
                </td>)
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

    const rowData = (incident, index) => {

        let date = new Date(incident.timeReported)
        let formattedDate = date.toDateString() + "- " + date.toLocaleTimeString();
        if (!incident) {

            return;
        }
        return (

            <tr className='text-xs' key={incident._id} >
                <td className="border border-grey-500 px-2">{index + 1}</td>
                <td className="border border-grey-50 px-2 ">{incident.user}</td>
                <td className="border px-2">{incident.dept}</td>
                <td className="border border-grey-500 px-2 w-1/5">{incident.issue}</td>
                <td className="border border-grey-500 px-2 w-1/12">{formattedDate}</td>
                <td className="border border-grey-500 px-2 w-1/5">{incident.cause}</td>
                <td className="border border-grey-500 px-2 w-1/5">{incident.resolution}</td>
                <td className="border border-grey-500 px-2 w-1/12">{incident.status}</td>
                <td className=" px-2">
                    <svg aria-hidden="true" focusAble="false" data-prefix="far" data-icon="comments"
                        class="svg-inline--fa fa-comments fa-w-18" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                        className='rounded-md  text-white bg-blue-400 p-2 mr-2'
                        onClick={() => onDetail(incident._id)}
                    >
                    <path fill="currentColor" d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z">
                    </path>
                    </svg>
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
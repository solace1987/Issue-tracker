import Header from './TableHeader';
import Row from './Requestrow';

function requestTable(props) {

   const request= [
        {
            "_id": "608132709558d70015fba8b1",
            "user": "Shola Ogundipe",
            "request": "Laptop",
            "dept": "Finance",
            "status": "Closed",
            "Remark": "",
            "formattedDate": "2021-04-22T08:23:12.452Z",
            "timeExecuted": ""
        },
        {
            "_id": "608132709558d70015fba8b1",
            "user": "Shola Ogundipe",
            "request": "Laptop",
            "dept": "Finance",
            "status": "Closed",
            "Remark": "",
            "formattedDate": "2021-04-22T08:23:12.452Z",
            "timeExecuted": ""
        }
    ]
    return (
        <table className='table-auto rounded-md  text-gray-700 w-full  ml-2 m-1 center  bg-white rounded-lg'>
            <Header headings={["No.", "Name", "Dept", "Request", "Request time", "Fulfilment time", "Status", 'Remark']}></Header>
            <Row request={request}></Row>
        </table>

    )
}


export default requestTable;
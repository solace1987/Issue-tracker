import Header from './TableHeader';
import Row from './Incidentrow';

function requestTable(props) {
    return (
        <table className='table-auto rounded-md  text-gray-700 w-12/12  ml-2 m-1 center  bg-white rounded-lg'>
            <Header headings={["No.", "Name", "Dept", "Request", "Request time", "Fulfilment time", "Status", 'Remark']}></Header>
            
        </table>

    )
}


export default requestTable;
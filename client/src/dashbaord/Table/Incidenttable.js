import Header from './TableHeader';
import Row from './Incidentrow';

function UserTable(props) {
    return (
        <table className='table-auto rounded-md  text-gray-700 w-12/12  ml-2 m-1 center  bg-white rounded-lg'>
            <Header headings={["No.", "User", "Dept", "Main Issue", "Time", "Root Cause ", "Resolution", "Status"]}></Header>
            <Row incidents={props.incidents} />
        </table>

    )
}


export default UserTable;
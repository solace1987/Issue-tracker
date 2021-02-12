import Header from './TableHeader';
import Row from './Tablerow';

function UserTable(){
    return (
        <table className='table-auto w-9/12 border m-6 center  bg-white'>
            <Header headings={["No.","User", "Dept", "Main Issue","Time","Root Cause ","Resolution","Status"]}></Header>
            <Row/>
        </table>
        
    )
}


export default UserTable;
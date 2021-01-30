import Headerrow from './HeaderRow'


function Table() {
  return (
    <div className=" report" class="issue-login bg-blue-400 w-full h-ful">
      <Headerrow stats={[{name:"Name", width:"20%"},{name:"Email", width:"40%"},{name:"Remark", width:"20%"}]}/>
    </div>
  );
}

export default Table;
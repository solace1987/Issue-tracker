
import {Link} from 'react-router-dom'

function Feedback(props) {
  
    return (
      <div className=" report" class="issue-login bg-blue-400 w-full h-full">
         <div className="pt-4 font-semibold font-sans text-white text-right">
         <Link className="p2 pl-4" to="/">Home</Link>
         <Link className="p2 pl-4" to="/register">Register</Link>
           <Link className="p2 pr-4 pl-4" to="/login">Login</Link>
           </div>
        <div className="text-center  font-sans text-white  l ">
  
          <h2 className="font-sans text-white text-5xl font-semibold pt-60">{props.mainMsg} </h2>
          <h3 className="pt-5">{props.msg2}</h3>
          <h3>{props.msg3}</h3>
        </div>
         
      </div>
    );
  }
  
  export default Feedback;
  
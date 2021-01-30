import {Link} from 'react-router-dom';


function Home() {
    return (
      
         <div className=" issue-login flex">
           <div className='left-bar'>
             <div className=" p-6">
             <h3 className=" text-blue-600 font-sans text-2xl font-semibold">ICT Issue Tracker</h3>
             <h4 className="text-blue-400 font-sans text-base">Report and manage your ICT issues.</h4>
             </div>
            </div>
          <div className='form-area bg-blue-400 className="text-right" p-4 pt-10 w-4/5 h-full'>
            {/* <div className="bg-blue-400 p-4  mx-auto"> */}
           <div className="font-semibold font-sans text-white text-right w-full">
           <Link className="p2" to="/register">Register</Link>
           <Link className="p2 pl-4" to="/login">Login</Link>
            
            
            </div>
            <div className="mt-24 text-lg font-semibold  font-sans text-white text-center w-full">
            <h3>Quick Report</h3>
            </div>
              <form className="font-sans flex flex-col items-center mt-2 w-full ">
              
              <input  placeholder="Name" className="text-sm text-gray-500 shadow-md w-5/12 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400" name='name' type="text"/>
              <input  placeholder="Email Address (Office Email)" className=" text-sm text-gray-500 max-w-md w-5/12 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400 " type="email"/>
              <textarea placeholder="What issue are you Experiencing?" className=" text-sm text-gray-500 max-w-md w-5/12 max-h-md h-48 border rounded-sm border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400 " name="issue" type="text" />
              <input value="Submit" className=' font-semibold text-white bg-green-500 w-28 h-10 rounded-md mt-6 border-gray-400 focus:ring-2 focus:ring-blue-400 '  type="submit"/>
  
             </form>
             {/* </div> */}
            </div>
         </div>
      
    );
  }
  
  export default Home;
  
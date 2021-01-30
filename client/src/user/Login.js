

function Login() {
    return (
      <div className=" report" className="issue-login bg-blue-400 grid grid-cols-1 w-full h-ful">
          
         <div className=" bg-white border rounded-md place-self-center w-2/5 h-78 pt-8 .shadow-lg">
         <form className="font-sans flex flex-col items-center mt-2 pb-8 ">
              
              <input  placeholder="Email Address (Office Email)" className=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-4 focus:ring-2 focus:ring-gray-400 " name="email" type="email"/>
              <input placeholder="Password" className=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-4 focus:ring-2 focus:ring-gray-400 " name= "password" type="password" />
              <input value="Login" className=' font-semibold text-white bg-green-500 w-28 h-10 rounded-md mt-6 border-gray-400 focus:ring-2 focus:ring-blue-400 '  type="submit"/>
  
             </form>

         </div>
       
         
      </div>
    );
  }
  
  export default Login;
   
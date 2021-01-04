


function Home() {
    return (
      
         <div class=" issue-login flex">
           <div class='left-bar'>
             <div class=" p-6">
             <h3 class=" text-blue-600 font-sans text-4xl font-semibold">ICT Issue Tracker</h3>
             <h4 class="text-blue-400 font-sans text-8l">Report and manage your ICT issues.</h4>
             </div>
            </div>
          <div class='form-area bg-blue-400 class="text-right" p-4 pt-10 w-4/5 h-full'>
            {/* <div class="bg-blue-400 p-4  mx-auto"> */}
           <div class="font-semibold font-sans text-white text-right w-full">
            <a class="p2" >Register</a>
            <a src="#" class="p-2"  >Login</a>
            </div>
            <div class="mt-8 text-2xl font-semibold font-sans text-white text-center w-full">
            <h3>Quick Report</h3>
            </div>
              <form class="font-sans flex flex-col items-center mt-5 w-full ">
              
              <input  placeholder="Name" class="shadow-md w-5/12 border rounded-sm border-gray-400 pl-4 py-2 m-4 focus:ring-2 focus:ring-gray-400" name='name' type="text"/>
              <input  placeholder="Email Address (Office Email)" class="max-w-md w-5/12 border rounded-sm border-gray-400 pl-4 py-2 m-4 focus:ring-2 focus:ring-gray-400 " type="email"/>
              <textarea placeholder="What issue are you Experiencing?" class=" max-w-md w-5/12 max-h-md h-48 border rounded-sm border-gray-400 pl-4 py-2 m-4 focus:ring-2 focus:ring-gray-400 " name="issue" type="text" />
              <input value="Submit" class='font-semibold text-white bg-green-500 w-28 h-10 rounded-sm border-gray-400 focus:ring-2 focus:ring-blue-400 '  type="submit"/>
  
             </form>
             {/* </div> */}
            </div>
         </div>
      
    );
  }
  
  export default Home;
  
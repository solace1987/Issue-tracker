function IncidentForm() {

    return (
        <div className=" report" class="issue-login bg-blue-400 grid grid-cols-1 w-full h-ful">

            <div class=" bg-white border rounded-md place-self-center w-2/5 h-2/4 pt-8 .shadow-lg">
                <form class="font-sans flex flex-col items-center mt-2 ">

                    <input placeholder="User Name" class=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400"
                        name='name' value={values.name} type="text" />
                    <input placeholder="Department" class=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400"
                        name="department" value={values.department} type="text" />
                    <input placeholder="Main Issue" class=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400 "
                        name="email" value={values.email} onChange={handleChange('email')} type="text" />
                    <input placeholder="Time Reported" class=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400 "
                        name="password" value={values.password} type="password" />
                    <input placeholder="Root Cause" class=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400 "
                        name="password" value={values.password} onChange={handleChange('password')} type="password" />
                    <input placeholder="Resolution" class=" text-sm text-gray-500 max-w-md w-4/5 border rounded-md border-gray-400 pl-4 py-2 mt-2 focus:ring-2 focus:ring-gray-400 "
                        name="password" value={values.password} onChange={handleChange('password')} type="password" />
                    <label for="status">Status of incident</label>
                    <select name="cars" id="cars">
                        <option value="Open">Open</option>
                        <option value="Close">Close</option>
                    </select>


                    <button onClick={clickSubmit} class=' font-semibold text-white bg-green-500 w-28 h-10 rounded-md mt-6 border-gray-400 focus:ring-2 focus:ring-blue-400 '>Register</button>

                </form>

            </div>


        </div>
    )
}

export default IncidentForm
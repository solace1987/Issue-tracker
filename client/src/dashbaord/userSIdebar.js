


function Sidebar(){
const items=
        [{
            name:'Incident',
            link:null,
            image:'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
        },
        {
            name:'Maintenance',
            link:null,
            image:'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
        },
        
        {
            name:'Request',
            link:null,
            image:'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
        },
        {
            name:'Notification',
            link:null,
            image:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        },
        {
            name:'Profile',
            link:null,
            image:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        },
       {
            name:'Logout',
            link:null,
            image:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        }
    

        ]
        
        return(
            <ul class="space-y-2 text-sm">  
           { items.map(_item=>{
                return(
                    <li>
                    <a href="#" class="flex items-center space-x-3 text-gray-700 p-2 mt-4 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                        <span class="text-gray-600">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={_item.image} />
                            </svg>
                        </span>
                        <span>{_item.name}</span>
                    </a>
                </li>
                )
            })}
            </ul>
         ) 



}

export default Sidebar;


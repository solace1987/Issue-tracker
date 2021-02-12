import Sidebar from './userSIdebar';
import Table from './Table/Usertable'
import Tile from './dashTile/Tile'



function userDash() {

    return (

        <div class="h-screen overflow-hidden flex items-center justify-center" style={{ background: "#rgb(237, 242, 247)" }}>
            <div class="flex flex-wrap  w-full h-screen">
                <div class="w-2/12 bg-white rounded p-3 shadow-lg">
                    <div class="flex items-center space-x-4 p-2 mb-10">
                        <img class="h-12 rounded-full" src="https://cdn.onlinewebfonts.com/svg/img_235012.png" alt="Michelle" />
                        <div>
                            <h4 class="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">Michelle</h4>
                            <span class="text-sm tracking-wide flex items-center space-x-1">
                                <svg class="h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg><span class="text-gray-600">Verified</span>
                            </span>
                        </div>
                    </div>
                    <Sidebar />
                </div>
                <div className='flex flex-col w-10/12'>
                    <Tile title={'Incident'} total={'2'} remaining={2} done={'0'}></Tile>
                    <div className='w-full m-6 flex' >
                        <svg className='flex-row-reverse' viewBox="0 0 512 512" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#2196f3" /><path d="m368 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0" fill="#fafafa" /></svg>

                    </div>
                    <Table className='w-full' />
                </div>
            </div>
        </div>



    )
}

export default userDash;
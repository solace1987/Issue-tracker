function DetailItem({ role, user }) {

    const main = {
        main: "flex w-full justify-end",
        msgBox: "bg-gray-700 bg-opacity-90 p-4 w-5/12 rounded-l-lg text-white flex flex-col",
        msgHeader: 'flex text-sm justify-between text-gray-400'
    }


    const sub = {
        main: "",
        msgBox: "bg-blue-600 bg-opacity-80 p-4 w-5/12 rounded-r-lg text-white flex flex-col",
        msgHeader: 'flex text-sm justify-between text-gray-300'
    }

    const detail = () => {

        if (role === user) {

            return (
                <div className={main.main}>
                    <div className={main.msgBox}>
                        <div className={main.msgHeader}>
                            <div><p className=''>Mon 25th February, 2021</p></div>
                            <div><p>Admin</p></div>
                        </div>
                        <div>
                            <p>
                                The main issue we are facing is caused by inefficient access point
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
        else if (role !== user) {

            return (
                <div className={sub.main}>
                    <div className={sub.msgBox}>
                        <div className={sub.msgHeader}>
                            <div><p className=''>Mon 25th February, 2021</p></div>
                            <div><p>Admin</p></div>
                        </div>
                        <div>
                            <p>
                                The main issue we are facing is caused by inefficient access point
                            </p>
                        </div>
                    </div>
                </div>

            )
        }

    }
    return (
        <div>
            {detail()}
        </div>
    )
}
export default DetailItem;
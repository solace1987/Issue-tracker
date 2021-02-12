function addData(Component) {
    const incidents = [
        {
            user: "Shola Ogundipe",
            dept: "ICT",
            issue: "I cannot see network and the system is too slow"
        },
        {
            user: "Prepress",
            dept: "Prepress",
            issue: "No network drive"
        },
    ];

    return function () {
        return <Component incidents={incidents}></Component>
    }
}


export default addData;
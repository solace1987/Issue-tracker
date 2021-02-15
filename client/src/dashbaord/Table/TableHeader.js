function TableHeader({headings}){
    return(
        <thead>
            <tr>
            {
                headings.map(heading=>{
                    return <th className="border text-center border-grey-500 p-2">{heading}</th>
                })
            }
            </tr>
        </thead>
    )
}

export default TableHeader;
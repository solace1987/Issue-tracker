function TableHeader({headings}){
    return(
        <thead>
            <tr>
            {
                headings.map(heading=>{
                    return <th className="border text-center border-green-50">{heading}</th>
                })
            }
            </tr>
        </thead>
    )
}

export default TableHeader;
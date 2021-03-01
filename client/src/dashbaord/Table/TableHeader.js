function TableHeader({headings}){
    return(
        <thead>
            <tr>
            {
                headings.map((heading, index)=>{
                    return <th className="border text-center border-grey-500 p-2" key={index}>{heading}</th>
                })
            }
            </tr>
        </thead>
    )
}

export default TableHeader;
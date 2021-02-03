
function THeader(props) {

    return (
        <thead>
        <tr>
            {props.values.map((column) => {
                 let width=column.size;
                return (
                   
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider" style={{width:column.size}}>{column.title}</th>
                )
            })}
            <th class="px-6 py-3 border-b-2 border-gray-300"></th>
        </tr>
        </thead>

    )
}

export default THeader;
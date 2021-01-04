function Row(props){
    return(
    <div>
      props.forEach(prop,(prop)=>{
        <input style={`width:${prop.width}`} value={prop.name}/>
      
        })
     </div>
     )
}
export default Row;
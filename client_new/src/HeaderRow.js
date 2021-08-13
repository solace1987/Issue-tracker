function Headerrow(props){
   const stats=props.stats;
   const inputList= stats.map(
       (stat)=> <input style={{width:stat.width}}  value={stat.name}/>
   )

    return(
       <div>
        {inputList}
       </div>
     )
}
export default Headerrow;

const localSave=(name,data)=>{

    sessionStorage.setItem(name, JSON.stringify(data));

};

const localFetch=(itemName)=>{
   let data =sessionStorage.getItem(itemName);
   return JSON.parse(data)
}

export {
    localSave, 
    localFetch
}
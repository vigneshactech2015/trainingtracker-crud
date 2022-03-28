import React,{useState} from "react";
import AudienceView from "./AudienceView";
import AddAudience from "./AddAudience";
const Audience=()=>{
    const[AudienceList,setAudienceList]=useState([]);
    
    const addAudienceHandler=(tName)=>{
        setAudienceList((prevAudienceList)=>{
            return[...prevAudienceList,{name:tName,id:Math.random().toString()}];     
        });
    };
    
    const deleteAudienceHandler=(id)=>{
        const filteredaudience=AudienceList.filter((element,index)=>{
            return element.id!==id
        })
        setAudienceList(filteredaudience);
    }


return(
    <div>
        <AddAudience onAddAudience={addAudienceHandler}/>
        <AudienceView audiences={AudienceList} onDeleteAudience={deleteAudienceHandler}/>
    </div>
)
};

export default Audience;
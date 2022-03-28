import React,{useState} from "react";
import ResourcesView from "./ResourcesView";
import './AddResources.css';
import AddResources from "./AddResources";
const Resources=()=>{
    const[resourcesList,setResourcesList]=useState([]);
    
    const addResourcesHandler=(tName)=>{
        setResourcesList((prevResourcesList)=>{
            return[...prevResourcesList,{name:tName,id:Math.random().toString()}];     
        });
    };
    
    const deleteResourceHandler=(id)=>{
        const filteredresource=resourcesList.filter((element,index)=>{
            return element.id!==id
        })
        setResourcesList(filteredresource);
    }


return(
    <div>
        <AddResources onAddResource={addResourcesHandler}/>
        <ResourcesView resources={resourcesList} onDeleteResources={deleteResourceHandler}/>
    </div>
)
};

export default Resources;
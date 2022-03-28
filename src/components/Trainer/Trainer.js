import React,{useState} from "react";
import View from "./View";
import AddTrainer from "./AddTrainer";
const Trainer=()=>{
    const[trainersList,setTrainersList]=useState([]);
    
    const addTrainerHandler=(tName)=>{
        setTrainersList((prevUsersList)=>{
            return[...prevUsersList,{name:tName,id:Math.random().toString()}];     
        });
    };
    
    const deleteTrainerHandler=(id)=>{
        const filteredtrainer=trainersList.filter((element,index)=>{
            return element.id!==id
        })
        setTrainersList(filteredtrainer);
    }


return(
    <div>
        <AddTrainer onAddTrainer={addTrainerHandler}/>
        <View trainers={trainersList} onDeleteTrainer={deleteTrainerHandler}/>
    </div>
)
};

export default Trainer;
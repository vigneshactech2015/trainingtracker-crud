import React,{useState} from "react";
import './AddTrainer.css';
const AddTrainer=(props)=>{
    const[enteredTrainerName,setEnteredTrainerName]=useState('');
    const nameChangeHandler=(event)=>{
      setEnteredTrainerName(event.target.value);
    }


    const onSubmitHandler=(event)=>{
     event.preventDefault();
     console.log(enteredTrainerName);
     if(enteredTrainerName.trim().length===0){
         return;
     }
        props.onAddTrainer(enteredTrainerName);
        setEnteredTrainerName('');
     }
    

return(
    <div>
        <form className="formalign" onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Enter Requirement" className="trainername" id="trainer" onChange={nameChangeHandler} value={enteredTrainerName}></input>&nbsp;&nbsp;
        <button type="submit" className="btn btn-success">+</button>&nbsp;&nbsp;
    </form>
    
    </div>
)
};

export default AddTrainer;
import React,{useState} from "react";
import './AddAudience.css';
const AddAudience=(props)=>{
    const[enteredAudienceName,setEnteredAudienceName]=useState('');

    const audienceChangeHandler=(event)=>{
      setEnteredAudienceName(event.target.value);
    }


    const onSubmitHandler=(event)=>{
     event.preventDefault();
     console.log(enteredAudienceName);
    
        props.onAddAudience(enteredAudienceName);
        setEnteredAudienceName('');
    
     }
    
     

return(
    <div>
        <form className="formalign" onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Enter Audience type" className="trainername" id="audience" onChange={audienceChangeHandler} value={enteredAudienceName}></input>&nbsp;&nbsp;
        <button type="submit" className="btn btn-success">+</button>&nbsp;&nbsp;
    </form>
    
    </div>
)
};

export default AddAudience;
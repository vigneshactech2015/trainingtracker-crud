import React,{useState} from "react";
import './AddCurriculum.css';
const AddCurriculum=(props)=>{
    const[enteredcurriculumName,setEnteredcurriculumName]=useState('');
    const[enteredstartdate,setEnteredstartdate]=useState('');
    const[enteredenddate,setEnteredenddate]=useState('');
    const[enteredmodeoftraining,setEnteredmodeoftraining]=useState('');
    
    const curriculumChangeHandler=(event)=>{
      setEnteredcurriculumName(event.target.value);
    }
    const startdateChangeHandler=(event)=>{
        setEnteredstartdate(event.target.value);
    }

    const enddateChangeHandler=(event)=>{
        setEnteredenddate(event.target.value);
    }

    const modeoftrainingChangeHandler=(event)=>{
        setEnteredmodeoftraining(event.target.value);
    }
    const onSubmitHandler=(event)=>{
     event.preventDefault();
     const tabledata={
      trainingfor:enteredcurriculumName,
      startdate:enteredstartdate,
      enddate:enteredenddate,
      modeoftraining:enteredmodeoftraining,
     };
        props.onAddcurriculum(tabledata);
        
        setEnteredstartdate('');
        setEnteredcurriculumName('');
        setEnteredenddate('');
        setEnteredmodeoftraining('');
     }
    

return(
    <div>
        <form className="formalign" onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Training for" className="trainername" id="trainingfor" onChange={curriculumChangeHandler} value={enteredcurriculumName}></input>&nbsp;&nbsp;
        <input type="date" placeholder="start date" className="trainername" id="start date" onChange={startdateChangeHandler} value={enteredstartdate}></input>&nbsp;&nbsp;
        <input type="date" placeholder="end date" className="trainername" id="end date" onChange={enddateChangeHandler} value={enteredenddate}></input>&nbsp;&nbsp;
        <input type="text" placeholder="Mode of training" className="trainername" id="modeoftraining" onChange={modeoftrainingChangeHandler} value={enteredmodeoftraining}></input>&nbsp;&nbsp;
        <button type="submit" className="btn btn-success">+</button>&nbsp;&nbsp;

    </form>
    
    </div>
)
};

export default AddCurriculum;
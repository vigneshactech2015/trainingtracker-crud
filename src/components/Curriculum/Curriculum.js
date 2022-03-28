import React,{useState} from "react";
import AddCurriculum from "./AddCurriculum";
import CurriculumView from "./CurriculumView";
const Curriculum=()=>{
    const[curriculumList,setcurriculumList]=useState([]);
    
    const addcurriculumHandler=(curriculumList)=>{
        setcurriculumList((prevcurriculumList)=>{
            return[...prevcurriculumList,curriculumList];     
        });
    };
 
    const deletecurriculumHandler=(id)=>{
        const filteredcurriculum=curriculumList.filter((element,index)=>{
            return element.id!==id
        })
        setcurriculumList(filteredcurriculum);
    }

return(
    <div>
        <AddCurriculum onAddcurriculum={addcurriculumHandler}/>
        <CurriculumView curriculum={curriculumList} deleteCurriculum={deletecurriculumHandler}/>
    </div>
)
};

export default Curriculum;
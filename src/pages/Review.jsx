import { use, useEffect, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

const Review = ()=>{
    const [personalInfo,setPersonalInfo] = useState({})
    const [education,setEducation] = useState({})
    const [workexperience,setWorkExperience] = useState({})

    useEffect(()=>{
        setPersonalInfo(JSON.parse(localStorage.getItem("personalInfo"))||{})
        setEducation(JSON.parse(localStorage.getItem("education"))|| {})
        setWorkExperience(JSON.parse(localStorage.getItem("workexperience"))||{})
    })
    return(
        <div>
            <h1>Review</h1>
            <div>
                <h2>Personal Information</h2>
                <p>Name:{personalInfo.name}</p>
                <p>Eamil:{personalInfo.email}</p>
                <p>Mobile:{personalInfo.mobile}</p>
            </div>

            <div>
                <h2>Education Information</h2>
                         <p>Intermediate College:{education.intermediate}</p>
                         <p></p>
                         <p></p> </div>
        </div>
    )
}
export default Review;
import { use, useEffect, useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import WorkExperience from "./WorkExperience";



const Review = ()=>{
    const navigate= useNavigate()
    const [personalInfo,setPersonalInfo]= useState({})
    const [education,setEducation]= useState({})
    const [workExperience,setWorkExperience] = useState({})

    

    useEffect(()=>{
    
        const person = JSON.parse(localStorage.getItem("personalInfo"))||{};
        setPersonalInfo(person)
        console.log(person)
        const edu = JSON.parse(localStorage.getItem("education"))||{};
        setEducation(edu)
        console.log(edu)
        const experience = JSON.parse(localStorage.getItem("workExperience"))||{};
        setWorkExperience(experience)
        console.log(experience)
    },[])
    const handleSubmit =()=>{
        alert("succefully submitted ")
        navigate('/')
        
    }
    return(
        <div className='review-container'>
            <h1 className="review-title">Review</h1>
            <div className="review-section">
                <h2>Personal Information</h2>
                <p>Name:{personalInfo.name}</p>
                <p>Email:{personalInfo.email}</p>
                <p>Mobile:{personalInfo.mobile}</p>
            </div>

            <div className="review-section" >
                <h2>Education Information</h2>
                    <p>Intermediate College:{education.intermediate}</p>
                    <p>passout Date:{education.passIntermediateDate}</p>
                    <p>Graduation :{education.graduation}</p>
                    <p>PassOut Date :{education.passGraduationDate}</p> 
                            
            </div>
            <div className="review-section">
                <h2>Work Experience</h2>
                <p>Company Name:{workExperience.companyName}</p>
                <p>Experience:{workExperience.yearsOfExperience}</p>
                <p>Date of Joining:{workExperience.dateOfJoining}</p>

                <h2>Work Experience</h2>
                <p>Company Name:{workExperience.preCompanyName}</p>
                <p>Experience:{workExperience.pyearsOfExperience}</p>
                <p>Date of Joining:{workExperience.pdateOfJoining}</p>

            </div>
        <button onClick={handleSubmit}>Submit</button>
        </div>
        
    
        
    )
}
export default Review;
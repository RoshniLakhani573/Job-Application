import { use, useEffect, useState } from "react";

const Review = ()=>{
    const [personalInfo,setPersonalInfo] = useState({})
    const [education,setEducation] = useState({})
    const [workexperience,setWorkExperience] = useState({})

    useEffect(()=>{
        setPersonalInfo(JSON.parse(localStorage.getItem("personalInfo")))
    })
    return(
        <div>
            <h1>Review</h1>
            <div>
                <h2>Personal Information</h2>
                <p>Name:{personalInfo.name}</p>
            </div>
        </div>
    )
}
export default Review;
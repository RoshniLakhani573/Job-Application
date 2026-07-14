import { useState } from "react"
import { useNavigate } from "react-router-dom"

const WorkExperience = ()=>{
    const navigate = useNavigate();
    const [data,setData]= useState({
        companyName:"",
        yearsOfExperience:"",
        dateOfJoining:""
    })

    const [error,setError] = useState({
        companyName:"",
        yearsOfExperience:"",
        dateOfJoining:""       
    })
    const handleChange =(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
        setError({
            ...error,
            [e.target.name]:""
        })
        }
        const handleSubmit = (e)=>{
            e.preventDefault();
            const CompanyNameRegrex= /^[A-Za-z0-9\s.,&()-]+$/;
            const DateOfJoiningRegrex=/^\d{4}-\d{2}-\d{2}$/;
            const ExperienceRegex = /^(?:[0-9]|[1-4][0-9]|50)(?:\.[0-9])?$/;
            const newError ={
            companyName:"",
            yearsOfExperience:"",
            dateOfJoining:""       
            }
            
            if(!data.companyName.trim){
                newError.companyName= "field is empty"
            }else if (!CompanyNameRegrex.test(data.companyName)){
                newError.companyName= "company name is not valid"
            }

            if(!data.dateOfJoining.trim()){
                newError.dateOfJoining = "field is empty"
            }else if(!DateOfJoiningRegrex.test(data.dateOfJoining)){
                newError.dateOfJoining = "enter valid dates"
            }

            if(!data.yearsOfExperience.trim()){
                newError.yearsOfExperience = "field is empty"
            }else if(!ExperienceRegex.test(data.yearsOfExperience)){
                newError.yearsOfExperience= "enter valid year of experience"
            }

            if (newError.companyName||newError.dateOfJoining||newError.yearsOfExperience){
                setError(newError)
                return;
            }
            localStorage.setItem("data",JSON.stringify(data))
            navigate('/review')

           
        }
    
    return(<div>
        <form onSubmit={handleSubmit}>
            <label>Current Company Name</label>
            <input 
            type="text"
            name="companyName"
            value={data.companyName}
            onChange={handleChange}/>
            {error.companyName &&(<p style={{color:red}} >{error.companyName}</p>)}
            <label>Year of Experence </label>
            <input 
            type="number"
            name="yearsOfExperience"
            value={data.yearsOfExperience}
            onChange={handleChange}/>
            {error.yearsOfExperience &&(<p style={{color:red}} >{error.yearsOfExperience}</p>)}
            
            <label>Date of Joining</label>
            <input
            type="date"
            name="dateOfJoining"
            value={data.dateOfJoining}
            onChange={handleChange}/>
            {error.yearsOfExperience &&(<p style={{color:red}} >{error.yearsOfExperience}</p>)}

            <button type="submit">Next</button>
        </form>
        </div>)

}
export default WorkExperience;
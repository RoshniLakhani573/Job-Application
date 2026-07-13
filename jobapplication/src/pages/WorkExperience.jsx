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

        const handleSubmit = ()=>{
            e.preventDefault();
            const CompanyNameRegrex= /^[A-Za-z0-9\s.,&()-]+$/;
            const DateOfJoiningRegrex=/^\d{4}-\d{2}-\d{2}$/;
            const ExperienceRegex = /^(?:[0-9]|[1-4][0-9]|50)(?:\.[0-9])?$/;
            
            if(!data.companyName.trim){
                
            }

        }
    }
    return(<div>
        <form>
            <label>Current Company Name</label>
            <input 
            type="text"
            name=""/>
            <label>Year of Experence </label>
            <input/> 
            <label>Date of Joining</label>
            <input/>
        </form>
        </div>)

}
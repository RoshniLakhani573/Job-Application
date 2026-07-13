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

            if (!data.companyName||!data.dateOfJoining||!data.yearsOfExperience){
                return;
            }
            localStorage.setItem("data",JSON.stringify(data))
            navigate('/review')

           
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
export default WorkExperience;
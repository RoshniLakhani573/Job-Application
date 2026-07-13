import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Education =()=>{
    const navigate = useNavigate()
    const [data,setData] = useState({
        intermediate :"",
        passIntermediateDate:"",
        graduation :"",
        passGraduationDate:""
    })
    const handleChange=(e)=>{
        return(
            setData({
                ...data,
                [e.target.name]:e.target.value
            })
        )
    }
        const handleSubmit=()=>{
        e.preventDefault();

        const newError = {
            intermediate:"",
            passIntermediateDate:"",
            graduation:"",
            passGraduationDate:""
        }

        const CollegeNameRegex = /^[A-Za-z0-9\s.,&()-]+$/;
        const PassOutDate = /^\d{4}-\d{2}-\d{2}$/;

        // intermediate
        if (!data.intermediate.trim()){
            newError.intermediate = "enter college name "
        }else if (!CollegeNameRegex.test(data.intermediate)){
            newError.intermediate = "enter valid College Name"
        }
        
        // intermediate
        if (!data.passIntermediateDate.trim()){
            newError.passIntermediateDate = "enter your passout Date "
        }else if (!PassOutDate.test(data.passIntermediateDate)){
            newError.passIntermediateDate = "enter valid Passout Date"
        }
        
        // graduation
        if (!data.graduation.trim()){
            newError.graduation = "enter college name "
        }else if (!CollegeNameRegex.test(data.intermediate)){
            newError.intermediate = "enter valid Graduation College Name"
        }

        // passout Date
        if (!data.passGraduationDate.trim()){
            newError.passGraduationDate = "enter college name "
        }else if (!PassOutDate.test(data.passGraduationDate)){
            newError.passGraduationDate = "enter valid passout Graduation Date"
        }
        
        if (!data.intermediate||!data.passIntermediateDate||data.graduation||data.passGraduationDate){
            return;
        }
        localStorage.setitem("data",JSON.stringify(data))
        console.log(data)
        navigate("/workexperience")
        
    }

    
    return(
        <div>
            <form on onSubmit={handleSubmit}>
                <label>College Name(Intermediate)</label>
                <input
                type = "text"
                name = "intermediate"
                value={data.intermediate}
                onChange={handleChange} />
                <br/>
                <label>Passing Date</label>
                <input
                type = "text"
                name="passIntermediateDate"
                value={data.passIntermediateDate}
                onChange={handleChange}/>
                <br/>
                 <label>College Name</label>
                <input
                type = "text"
                name = "graduation"
                value={data.graduation}
                onChange={handleChange} />
                <br/>
                <label>Passing Date</label>
                <input
                type = "text"
                name="passGraduationDate"
                value={data.passGraduationDate}
                onChange={handleChange}/>
   
                <button type="submit">Next</button>
            </form>
        </div>
    )
}
export default Education;
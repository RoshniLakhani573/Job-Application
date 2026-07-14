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
    const [error ,setError] = useState({
        intermediate :"",
        passIntermediateDate:"",
        graduation :"",
        passGraduationDate:""

    })
    const handleChange=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
        setError({
                ...error,
                [e.target.name]:""
            })
    }

        const handleSubmit=(e)=>{
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
            newError.passGraduationDate = "enter your passing out date"
        }else if (!PassOutDate.test(data.passGraduationDate)){
            newError.passGraduationDate = "enter valid passout Graduation Date"
        }
        
        if (newError.intermediate||newError.passIntermediateDate||newError.graduation||newError.passGraduationDate){
           setError(newError)
            return;
        }
        localStorage.setItem("data",JSON.stringify(data));
        console.log(data)
        navigate('/workexperience')
        
    }

    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>College Name(Intermediate)</label>
                <input
                type = "text"
                name = "intermediate"
                value={data.intermediate}
                onChange={handleChange} />
                {error.intermediate && (
                <p style={{ color: "red" }}>{error.intermediate}</p>)}
              
                <br/>
                <label>Passing Date</label>
                <input
                type = "date"
                name="passIntermediateDate"
                value={data.passIntermediateDate}
                onChange={handleChange}/>
                {error.passIntermediateDate && (
                    <p style={{color:"red"}}>{error.passIntermediateDate}</p>
                )}
                <br/>
                 <label>College Name</label>
                <input
                type = "text"
                name = "graduation"
                value={data.graduation}
                onChange={handleChange} />
                <br/>
                {error.graduation && (<p style={{color:"red"}}>{error.graduation}</p>)}
                <label>Passing Date</label>
                <input
                type = "date"
                name="passGraduationDate"
                value={data.passGraduationDate}
                onChange={handleChange}/>
                {error.passGraduationDate &&(<p style={{color:"red"}}>{error.passGraduationDate}</p>)}
   
                <button type="submit">Next</button>
            </form>
        </div>
    )
}
export default Education;
import { useState } from "react"

const Education =()=>{
    const [data1,setData1] = useState({
        intermediate :"",
        pasIntermediateDate:"",
        collegeName :"",
        pasCollegeDate:""
    })
    const handleChange=()=>{
        return(<></>)
    }
    const handleSubmit=()=>{}
    
    return(
        <div>
            <form>
                <label>College Name(Intermediate)</label>
                <input
                type = "text"
                name = "intermediate"
                value={data1.intermediate}
                onChange={handleChange} />
                <label>Passing Date</label>
                <input
                type = "text"
                name="pasIntermediateDate"
                value={data1.pasIntermediateDate}
                onChange={handleChange}/>

                 <label>College Name</label>
                <input
                type = "text"
                name = "collegeName"
                value={data1.collegeName}
                onChange={handleChange} />
                <label>Passing Date</label>
                <input
                type = "text"
                name="pasCollegeDate"
                value={data1.pasCollegeDate}
                onChange={handleChange}/>
   
                <button>Next</button>
            </form>
        </div>
    )
}
export default Education;
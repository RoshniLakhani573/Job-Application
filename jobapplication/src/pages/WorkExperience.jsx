import { useState } from "react";

const WorkExperience =()=>{
    const [data,setData] = useState({
        companyName:"",
        experience:"",
        joiningDate: "",
        lastDate: ""
    })
    return(
        <div>
            <form>
                <label>Company Name(Intermediate)</label>
                <input
                type = "text"
                name = "companyName"
                value= {companyName}
                onChange={handleChange}
                required />
                <label>Year Of Experience</label>
                <input
                type="text"
                name = "experience"
                value={experience}
                onChange={handleChange}/>

                <label>Date of joining</label>
                <label>Last Date</label>
            </form>
        </div>
    )
}
export default WorkExperience;
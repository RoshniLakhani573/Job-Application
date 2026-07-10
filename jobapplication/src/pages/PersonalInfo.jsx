import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const PersonalInfo = ()=>{
    const navigate = useNavigate();
    const [data, setData] = useState({
        name:"",
        email: "",
        mobile:""
    })

    const handleChange=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        // if(!data.name || !data.email || !data.mobile){
        //     return(
        //     alert(" Please fill the required field")
        // )}
        if (data.name.trim().length>20  ){
            alert("Number of characters exceded")
        }
        if(data.name !== "" ){
            alert ("please fill the form")
        }
        if(data.name !== "/^[a-zA-Z\s\-']+$/"){
            alert ("It should contain alphabet")
        }
        if (data.email!== "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"){
            return alert("missing characters")
        }
        if (data.mobile !=="^\+[1-9]\d{1,14}$"){
            return alert("Mobile Number start with numbers")
        }


        localStorage.setItem("data",JSON.stringify(data));
        
        console.log(data);
        navigate('education')

        

    }
    
        
    return (
        <form>
            <label>Name</label>
            <input 
              type = "text"
              name = "name"
              value = {data.name}
              placeholder="Enter Your Name "
              onChange={handleChange}
              /><br/>

              <label>Email</label>
            <input 
              type = "email"
              name = "email"
              value = {data.email}
              placeholder="Enter Your Email "
              onChange={handleChange}
              /><br/>
              <label>Mobile</label>
            <input 
              type = "mobile"
              name = "mobile"
              value = {data.mobile}
              placeholder="Enter Your number "
              onChange={handleChange}
              /><br/>
              <button onClick={handleSubmit}>Next Page</button>
        </form>
        
    )
}
export default PersonalInfo;
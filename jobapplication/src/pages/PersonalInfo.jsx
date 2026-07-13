import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const PersonalInfo = ()=>{
    const navigate = useNavigate();
    const [data, setData] = useState({
        name:"",
        email: "",
        mobile:"",
        password:""
    })
    const [error,setError]= useState({
        name:"",
        email:"",
        mobile:"",
        password:""
    })

    const handleChange=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        const NameRegex= /^[A-Za-z\s]+$/;
        const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const MobileRegex= /^[6-9]\d{9}$/;
        const PasswordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        
        const newError = {
            name:"",
            email:"",
            mobile:"",
            password:""
        }
        // Name
        if (!data.name.trim()){
            newError.name = "name is required"
        }else if (!NameRegex.test(data.name)){
            newError.name = "Name is not valid"
        }

        // Email
        if(!data.email.trim()){
            newError.email = "email is required"
        }else if(!EmailRegex.test(data.email)){
            newError.email = "Email is not valid"
        }

        // Mobile
        if(!data.mobile.trim()){
            newError.mobile = "mobile is required"
        }else if (!MobileRegex.test(data.mobile)){
            newError.mobile = "number is not valid"
        }

        // password
        if (!data.password.trim()){
            newError.password = "password is required"
        }else if (!PasswordRegex.test(data.password)){
            newError.password = "password is not valid"
        }

        if(!data.name|| !data.email|| !data.mobile|| !data.password){
            return;
        }
        setError(newError)

        localStorage.setItem("data",JSON.stringify(data))
        
        console.log(data);
        navigate('education')

        

    }
    
        
    return (
        <form onSubmit={handleSubmit}>
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

              <label>Password</label>
                <input 
              type = "password"
              name = "password"
              value = {data.password}
              placeholder="Enter Your password "
              onChange={handleChange}
              /><br/>
              <button type="submit">Next Page</button>
        </form>
        
    )
}
export default PersonalInfo;
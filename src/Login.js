import React, { useContext,useState} from "react";
import username from './username.json' 
import { useNavigate } from "react-router-dom";
 import { stateContext } from "./Context";

 function Login() {
  const navigate = useNavigate()
  const [name,setname] = useState("")
  const [pass,setpass] = useState("")
  const [err,seterr] = useState("")
  const [password,setPassword] = useState("password")

  const {dispatch} = useContext(stateContext)

  
  

    function handlename(event){
        
        setname(event.target.value)
    }

    function handlepassword(event){
      setpass(event.target.value)
    }

    function togglePass(){
        if(password === "password"){
          setPassword("text")
        }
        else{
          setPassword("password")
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        username.forEach(e=>{
          if (e.name === name && e.password === pass){
              
              localStorage.setItem("isLoggedIn",true)
              navigate("Home/")
              dispatch({
                type: "login",
                payLoad : {isAuthenticated : true}
              })
          } else{
            if(pass === ""){
              seterr("")
            }
            else{
              seterr("invalid username or password")
            }
          }
        })
    }

  return (
    <div >
    
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
            <input 
            onChange={handlename}
            type="text" 
            placeholder="username"/>
            <input 
            onChange={handlepassword}
            type={password}
             placeholder="password"/>
             <span onClick={togglePass} className="showPass"></span>
            <input type="submit" />
            
            <p>{err}</p>
      
          
        </form>
      </div>
  );
}
export default Login;


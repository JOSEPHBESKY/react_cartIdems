import React,{useContext} from 'react'
import { stateContext } from './Context'
import { NavLink } from 'react-router-dom';
export default function Favourites() {
    const {state,dispatch}=useContext(stateContext)
    console.log(state);
    const logout=()=>{
        localStorage.setItem("isLoggedIn",false)
        dispatch({
            type : "logout",
            payLoad : { isAuthenticated : false}
          })
    }
  return (
    <div>
    <ul>
    <li>
        <NavLink to = "/Home" style={({isActive})=>isActive? {color : "red"} : null}>HOME</NavLink>
    </li>
    <li>
    <NavLink to = "/Cart" style={({isActive})=>isActive? {color : "red"} : null}>CARTIDEMS</NavLink>
    </li>
    <li>
    <NavLink to = "/Favourites" style={({isActive})=>isActive? {color : "red"} : null}>FAVOURITES</NavLink>
    </li>
    <li>
                <NavLink  style={({isActive})=>isActive? {color : "red"} : null} onClick={()=>logout()} to = "/">Logout</NavLink>
                </li>
</ul>
    Favourites
    {
        state?.Cartidems?.map((products,index)=>(
            <div key={index}><p>{products.name}</p><p>  {products.qty}</p></div>
        ))
    }
    </div>
  )
}

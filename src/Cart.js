import React,{useContext} from 'react'
import { stateContext } from './Context'
import{NavLink} from 'react-router-dom'
export default function Cart() {
    const {state,dispatch}=useContext(stateContext)
    console.log(state);
    const rmvItem=(val)=>{
         let del = state.Cartidems.filter((e) => e !== val);
        dispatch({
          type: "rmvItem",
          payLoad: del
        });
    }
    function qtyIncmt( id) {
        let delt = state.qty
        delt[id] = delt[id] + 1
        dispatch({
          type : "qtyIncmt",
          payLoad : delt
        })  }
         
      
    
      function qtyDecmt(id) {
        let delt = state.qty
       console.log(delt);
        delt[id] = delt[id] - 1
        if (delt[id] < 1){
          rmvItem(id)
        } else{
          dispatch({
            type : "qtyDecmt",
            payLoad : delt
          })
        }
        
    }
    const logout=()=>{
        localStorage.setItem("isLoggedIn",false)
        dispatch({
            type : "logout",
            payLoad : { isAuthenticated : false}
          })
    }
  return (
    <div><ul>
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
</ul>Cartidems
    {
                state?.Cartidems?.map((products,index)=>(
            <div key={index}><p>{products.name}</p><p>  {products.qty}</p>
            <button onClick={() => rmvItem(products)}>x</button>
           
                <button onClick={() => qtyIncmt( products.id)}>+</button>
                <span>{state.qty[products.id]}</span>
                <button onClick={() => qtyDecmt(products.id)}>-</button></div>
        ))
    }
    </div>
  )
}

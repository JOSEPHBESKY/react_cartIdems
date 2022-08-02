import React,{useContext} from 'react'
import products from './products.json'
  //  import Navbar from './Navbar'
import { stateContext } from './Context'
import { NavLink } from 'react-router-dom'
const Home = () => {
  const {state,dispatch}=useContext(stateContext)
  console.log(state,products);
  const handleaddcart=(prod)=>{
    console.log(prod);
    var temp=[]
    if (state.Cartidems?.length){
      temp=[...state.Cartidems,prod]
    }
    else{
      temp=[prod]
    }
    dispatch({
      type:"addToCart",
      payLoad:{Cartidems:temp}
    })
  }
  const logout=()=>{
    localStorage.setItem("isLoggedIn",false)
    dispatch({
        type : "logout",
        payLoad : { isAuthenticated : false}
      })
}
  return (
    <div>  <ul>
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
    {
      products?.map((products,index)=>(<div key={index}><p>{products.name}</p>
      <button onClick={()=>handleaddcart(products)}>AddtoCart</button>
      <button onClick={()=>handleaddcart(products)}>AddtoFav</button>
      </div>
      
      ))
    }
    </div>
  )
}

export default Home
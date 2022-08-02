export const initialState = {
    Cartidems : [],
    FavArr : [],
    isAuthenticated : JSON.parse(localStorage.getItem("isLoggedIn")) || false
}

export const stateReducer = (state,action)=>{
    switch(action?.type){
        case "login" :
            return{
                ...state,
                ...action.payLoad
            }
            case "logout": 
            return{
                 ...state,
                 ...action.payLoad
      }
 
        case "addToCart" : 
        return{
            ...state,
             qty : [0],
            //  Cartitems: [...state.Cartidems,...action.payLoad]
            ...action.payLoad
        }
        case "addToFav":
            return{
                ...state,
                ...action.payLoad
            }
            case "rmvItem": 
            return{
                ...state,
                ...action.payLoad
            }
            case "qtyIncmt": 
            return{
                ...state,
                qty : [...action.payLoad]
            }
            case "qtyDecmt": 
            return{
                ...state,
                qty : [...action.payLoad]
            }
            
      
        default : 
        return{
            state
        }
    }
}
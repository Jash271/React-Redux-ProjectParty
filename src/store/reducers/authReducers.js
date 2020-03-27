const initState={
    authError:null

}


const authReducer = (state=initState,action)=>{
    switch(action.type){
        case'Login_Error':
        console.log('Login F')
        
        return {
            ...state,
            authError:'lOGIN_FAILED'
        }
        case'LOGIN_SUCCESS':
        console.log('Login S')
        return{
            ...state,
            authError:null
        
        }
        case'SIGNOUT_SUCCESS':
        console.log('SignOut')
        return state


        case 'SIGNUP_SUCCESS':
      console.log('signup success')
      return {
        ...state,
        authError: null
      }

    case 'SIGNUP_ERROR':
      console.log('signup error')
      return {
        ...state,
        authError: action.err.message
      }

    default:
      return state
    }
}
export default authReducer
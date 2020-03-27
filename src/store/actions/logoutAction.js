export const signOut =()=>{
    return(dispatch,{getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth.signOut().then(()=>{
          dispatch({type:'SignOut_Success'})
        })
    }

  }
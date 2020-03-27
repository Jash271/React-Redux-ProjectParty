const initState={

    projects: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
      ]
}


const projectReducer = (state=initState,action)=>{
    switch(action.type){
        case'Create_Project':
        console.log('Project Created',action.project)
        return state;
        case'Error':
        console.log('error',action.err)
        return state;

        default:return state

        
    }
    


}
export default projectReducer
import React, { Component } from 'react'
import {createProject} from '../../store/actions/projectActions';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
class CreateProject extends Component {
  state = {
    title: '',
    content: '',
    

    
    
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    
    this.props.createProject(this.state)
    this.props.history.push('/')
  }
  render() {
    
    const {auth} = this.props
    const {profile}=this.props
    console.log(profile)
    
    if (!auth.uid){
      return <Redirect to='/signIn'/>
    } 
    else{

    
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}
}

const mapDispatchToProps=(dispatch)=>{
  return{
    createProject : (project)=>{
      dispatch(createProject(project))
    }
  }


}
const mapStateToProps =(state)=>{
  return{
    auth:state.firebase.auth,
    profile:state.firebase.profile,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)


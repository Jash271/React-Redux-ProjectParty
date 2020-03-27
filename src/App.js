import React,{Component} from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import NavBar from './components/layouts/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject'
class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path ='/' component={Dashboard}/>
        <Route path='/project/:id' component={ProjectDetails}/>
        <Route path='/signIn' component={SignIn}/>
        <Route path='/signUp' component={SignUp}/>
        <Route path='/create' component={CreateProject}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
}

export default App;

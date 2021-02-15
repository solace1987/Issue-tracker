import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Register from './user/Register'
import Login from './user/Login'
import created from './notification/Newacct'
import Dashboard from './dashbaord/Dashboard'
import IncidentForm from './Incident/IncidentForm'
function App() {

  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/new-account" component={created} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/incident-form" component={IncidentForm} />
    </Switch>
  );
   
}

export default App;

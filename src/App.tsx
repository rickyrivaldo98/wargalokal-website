import "./styles/globals.css";
import "./styles/style.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage";
import FindDesa from "./pages/findDesa";
import Login from "./auth/login";
import Register from "./auth/register";
import VolunteerDesa from "./pages/VolunteerDesa";

import ProfileDesa from "./pages/ProfileDesa";
import Admin from "./pages/admin/Admin";
import { FormVolunteer } from "./pages/FormVolunteer";

const App = () => {
  return (
    <Switch>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route exact path="/volunteerdesa">
        <VolunteerDesa />
      </Route>
      <Route exact path="/formvolunteer">
        <FormVolunteer />
      </Route>
      <Route exact path="/caridesa">
        <FindDesa />
      </Route>
      <Route exact path="/profiledesa">
        <ProfileDesa />
      </Route>
      <Route exact path="/auth/login">
        <Login />
      </Route>
      <Route exact path="/auth/register">
        <Register />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default App;

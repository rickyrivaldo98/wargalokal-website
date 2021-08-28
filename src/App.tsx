import "./styles/globals.css"
import "./styles/style.css"
import { Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import FindDesa from "./pages/findDesa";
import Login from "./auth/login";
import Register from "./auth/register";
import Ikl from "./pages/profiledesa/Ikl";
import VolunteerDesa from "./pages/VolunteerDesa";
import Iks from "./pages/profiledesa/Iks";
import Ike from "./pages/profiledesa/Ike";
import PeluangPembangunan from "./pages/profiledesa/PeluangPembangunan";
import ProfileDesa from "./pages/ProfileDesa";
import Admin from "./pages/admin/Admin";

const App = () => {
  return (
    <>
      <Switch>

        <Route path="/admin">
          <Admin />
        </Route>
        <Route exact path="/volunteerdesa">
          <VolunteerDesa />
        </Route>
        <Route exact path="/caridesa">
          <FindDesa />
        </Route>
        <Route exact path="/profiledesa-ikl">
          <Ikl />
        </Route>
        <Route exact path="/profiledesa-iks">
          <Iks />
        </Route>
        <Route exact path="/profiledesa-ike">
          <Ike />
        </Route>
        <Route exact path="/profiledesa">
          <ProfileDesa />
        </Route>
        <Route exact path="/profiledesa-peluangpembangunan">
          <PeluangPembangunan />
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
    </>
  );
}

export default App;
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import VolunteerAdmin from "./VoluteerAdmin";
import Detailvolunteer from "./Detailvolunteer";
import Profile from "./Profile";
import Sidebar from "../../components/admin/sidebar";
import NavbarAdmin from "../../components/admin/navbarAdmin";

const Admin = () => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64">
        <NavbarAdmin />
        <div className="px-4 md:px-10 mx-auto w-full">
          <Switch>
            <Route path="/admin/detail-volunteer-admin">
              <Detailvolunteer />
            </Route>
            <Route path="/admin/profile">
              <Profile />
            </Route>
            <Route path="/admin/volunteer-admin">
              <VolunteerAdmin />
            </Route>
            <Route exact path="/admin">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Admin;

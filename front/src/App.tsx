import { Navigation } from "./components/layout/Navigation";
import { SideMenu } from "./components/layout/SideMenu";
import { Route } from "react-router-dom";
import Dashbord from "./pages/Dashbord";
import Users from "./pages/users/Users";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Route path={"/"} exact>
        <Dashbord />
      </Route>
      <Route path={"/users"}>
        <Users />
      </Route>
      <Route path={"/register"}>
        <Register />
      </Route>
      <Route path={"/login"}>
        <Login />
      </Route>
    </>
  );
}

export default App;

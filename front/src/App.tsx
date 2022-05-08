import { Navigation } from "./components/layout/Navigation";
import { SideMenu } from "./components/layout/SideMenu";
import { Route } from "react-router-dom";
import Dashbord from "./pages/Dashbord";
import Users from "./pages/Users";
import Register from "./pages/Register";

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
    </>
  );
}

export default App;

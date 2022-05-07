import { Navigation } from "./components/Navigation";
import { SideMenu } from "./components/SideMenu";
import { Route } from "react-router-dom";
import Dashbord from "./pages/Dashbord";
import Users from "./pages/Users";

function App() {
  return (
    <div>
      <Navigation />
      <SideMenu />
      <main>
        <Route path={"/"} exact>
          <Dashbord />
        </Route>
        <Route path={"/users"}>
          <Users />
        </Route>
      </main>
    </div>
  );
}

export default App;

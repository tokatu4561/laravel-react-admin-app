import { Route } from "react-router-dom";
import Dashbord from "./pages/Dashbord";
import Users from "./pages/users/Users";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserCreate from "./pages/users/UserCreate";
import UserEdit from "./pages/users/UserEdit";
import RolesPage from "./pages/roles/Roles";
import ProductListPage from "./pages/products/ProductList";
import ProductCreate from "./pages/products/ProductCreate";
import Orders from "./pages/orders/Order";

function App() {
  return (
    <>
      <Route path={"/"} exact>
        <Dashbord />
      </Route>
      <Route path={"/register"}>
        <Register />
      </Route>
      <Route path={"/login"}>
        <Login />
      </Route>
      <Route path={"/users"} exact>
        <Users />
      </Route>
      <Route path={"/users/create"}>
        <UserCreate />
      </Route>
      <Route path={"/users/:id/edit"}>
        <UserEdit />
      </Route>
      <Route path={"/roles"} exact>
        <RolesPage />
      </Route>
      <Route path={"/products"} exact>
        <ProductListPage />
      </Route>
      <Route path={"/products/create"}>
        <ProductCreate />
      </Route>
      <Route path={"/orders"} exact>
        <Orders />
      </Route>
    </>
  );
}

export default App;

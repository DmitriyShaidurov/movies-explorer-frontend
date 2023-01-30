import { Route, Redirect } from "react-router-dom";

function ProtectedRoute(props) {
  return <Route>{props.isLoggedIn === true ? props.children : <Redirect to="/" />}</Route>;
}

export default ProtectedRoute;

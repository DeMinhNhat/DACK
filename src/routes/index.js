import LoginContainer from "../containers/LoginContainer";
import Home from "../components/Home/Home";
import User from "../components/User/User";

const indexRoutes = [
    { path: "/login", components: LoginContainer },
    { path: "/user", components: User },
    { path: "/home", components: Home },
    { path: "/", components: Home }
];

export default indexRoutes;
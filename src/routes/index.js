import LoginContainer from "../containers/LoginContainer";
import UserContainer from "../containers/UserContainer";
import HomeContainer from "../containers/HomeContainer";

const indexRoutes = [
    { path: "/login", components: LoginContainer },
    { path: "/user", components: UserContainer },
    { path: "/home", components: HomeContainer },
    { path: "/", components: HomeContainer }
];

export default indexRoutes;
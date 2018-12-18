import LoginContainer from "../containers/LoginContainer";
import Home from "../components/Home/Home";
import User from "../components/User/User";
import Followers from "../components/User/Followers";
import Following from "../components/User/Following";

const indexRoutes = [
  { path: "/following", components: Following },
  { path: "/followers", components: Followers },
  { path: "/login", components: LoginContainer },
  { path: "/user", components: User },
  { path: "/home", components: Home },
  { path: "/", components: Home }
];

export default indexRoutes;

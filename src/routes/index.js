import Login from '../components/Account/Login';
import SignUp from '../components/Account/SignUp';
import Home from '../components/Home/Home';
import User from '../components/User/User';
import Followers from '../components/User/Followers'

const indexRoutes = [
    {path: '/followers', components: Followers},
    {path: '/login', components: Login},
    {path: '/signup', components: SignUp},
    {path: '/user', components: User},
    {path: '/home', components: Home},
    {path: '/', components: Home},
]

export default indexRoutes;
import Login from '../components/Account/Login';
import SignUp from '../components/Account/SignUp';
import Home from '../components/Home/Home';

const indexRoutes = [
    {path: '/login', components: Login},
    {path: '/signup', components: SignUp},
    {path: '/home', components: Home},
    {path: '/', components: Home},
]

export default indexRoutes;
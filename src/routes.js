import Home from "./pages/home/home";
import About from "./pages/home/about";
import ListMovie from './pages/home/list-movie';
import DetailMovie from "./pages/home/detail-movie";
import DashBoard from './pages/admin/dash-board';
import Register from './pages/home/register';

const routesHome = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/about",
        exact: false,
        component: About
    },
    {
        path: "/list-movie",
        exact: false,
        component: ListMovie,
    },
    {
        path: "/detail-movie/:id",
        exact: false,
        component: DetailMovie,
    },
    {
        path: "/register",
        exact: false,
        component: Register,
    }
];

const routeAdmin = [
    {
        path: "/dash-board",
        exact: false,
        component: DashBoard,
    }
];

export { routesHome, routeAdmin };

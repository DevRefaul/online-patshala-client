import ErrorPage from "../Components/Shared/Error/ErrorPage";
import Home from "../Pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../Root/Root");

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/main'),
                element: <Home />
            },
            {
                path: '/home',
                loader: () => fetch('http://localhost:5000/main'),
                element: <Home />
            },
            {
                path: '/courses',
                element: <Home />
            },
            {
                path: '/courses/:id',
                element: <Home />
            },
            {
                path: '/faq',
                element: <Home />
            },
            {
                path: '/blogs',
                element: <Home />
            },
            {
                path: '/login',
                element: <Home />
            },
            {
                path: '/register',
                element: <Home />
            },
            {
                path: '/profile',
                element: <Home />
            },
        ]
    }
])

export default routes
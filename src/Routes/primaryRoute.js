import ErrorPage from "../Components/Shared/Error/ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Courses from "../Pages/Courses/Courses";
import MainCoursePage from "../Pages/Courses/MainCoursePage";
import FAQPage from "../Pages/FAQ/FAQPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import SingelCourse from "../Pages/SingelCourse/SingelCourse";
import PrivateRoute from "./PrivateRoute";

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
                loader: () => fetch('https://online-patshala-server.vercel.app/main'),
                element: <Home />
            },
            {
                path: '/home',
                loader: () => fetch('https://online-patshala-server.vercel.app/main'),
                element: <Home />
            },
            {
                path: '/courses',
                loader: () => fetch('https://online-patshala-server.vercel.app/courses'),
                element: <MainCoursePage />,
                children: [
                    {
                        path: '/courses',
                        loader: () => fetch('https://online-patshala-server.vercel.app/courses'),
                        element: <Courses />
                    },

                    {
                        path: '/courses/:id',
                        loader: ({ params }) => fetch(`https://online-patshala-server.vercel.app/courses/${params.id}`),
                        element: <SingelCourse />
                    },
                ]
            },
            {
                path: '/faq',
                element: <FAQPage />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => fetch(`https://online-patshala-server.vercel.app/checkout/${params.id}`),
                element: <PrivateRoute><CheckOut /></PrivateRoute>
            },
        ]
    }
])

export default routes
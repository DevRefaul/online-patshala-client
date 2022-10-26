import ErrorPage from "../Components/Shared/Error/ErrorPage";
import Courses from "../Pages/Courses/Courses";
import MainCoursePage from "../Pages/Courses/MainCoursePage";
import Home from "../Pages/Home/Home";
import SingelCourse from "../Pages/SingelCourse/SingelCourse";

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
                loader: () => fetch('http://localhost:5000/courses'),
                element: <MainCoursePage />,
                children: [
                    {
                        path: '/courses',
                        loader: () => fetch('http://localhost:5000/courses'),
                        element: <Courses />
                    },

                    {
                        path: '/courses/:id',
                        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                        element: <SingelCourse />
                    },
                ]
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
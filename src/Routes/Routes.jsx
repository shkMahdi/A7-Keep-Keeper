import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Timeline from "../Pages/Timelinepage/Timeline";
import Stats from "../Pages/Statspage/Stats";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Homepage></Homepage>
            },
            {
                path: '/timeline',
                element: <Timeline></Timeline>
            },
            {
                path: '/stats',
                element: <Stats></Stats>
            }
        ],
        errorElement: <Errorpage></Errorpage>
    }
]);
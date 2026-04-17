import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Timeline from "../Pages/Timelinepage/Timeline";
import Stats from "../Pages/Statspage/Stats";
import FriendsDetail from "../Pages/FriendsDetail/FriendsDetail";

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
            },
            {
                path: '/friendsDetail/:id',
                element: <FriendsDetail></FriendsDetail>,
                loader: () => fetch('/Data/friendsData.json').then(res => res.json())
            }
        ],
        errorElement: <Errorpage></Errorpage>
    }
]);
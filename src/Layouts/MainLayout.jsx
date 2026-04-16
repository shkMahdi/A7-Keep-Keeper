import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
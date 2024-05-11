
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Toaster } from 'react-hot-toast';


const Root = () => {
    return (
        <div className='font-Jost bg-white dark:bg-dark dark:text-gray-300'>
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <div><Toaster /></div>
        </div>
    );
};

export default Root;
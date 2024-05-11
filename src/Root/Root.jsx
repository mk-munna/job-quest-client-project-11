
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const Root = () => {
    return (
        <div>
            <div className='font-Jost'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
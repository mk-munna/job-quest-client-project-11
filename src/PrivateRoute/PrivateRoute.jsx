import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthContextProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import Lottie from 'lottie-react';
import loadingLottie from '../../public/loadingLottie.json'


const PrivateRoute = ({ children }) => {
    const { user, openModal, setFrom, from, setOpenModal, loading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const search = new URLSearchParams(location.search)
    const fromPathname = search.get('from')
    console.log('pathName',fromPathname)
    console.log("console from private route")
    const currentLocation = window.location.pathname
    console.log ('currentLocation',currentLocation)
    useEffect(() => {
        // open Modal if user is not logged in and trying to access a protected route
        if (!user) {
            setOpenModal(true);
        }
    }, [!user, fromPathname]);

    if (loading) {
        return (
            <div>
                <Lottie style={{ width: 550, marginLeft: 'auto', marginRight: 'auto' }} animationData={loadingLottie}></Lottie>

            </div>
        )
    }

    if (user) {
        return <div>{children}</div>;
    }
    
    return <Navigate to={fromPathname || '/'} />;
};

export default PrivateRoute;
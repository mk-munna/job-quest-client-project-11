import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthContextProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import Lottie from 'lottie-react';
import loadingLottie from '../../public/loadingLottie.json'


const PrivateRoute = ({ children }) => {
    const { user, openModal, setOpenModal, loading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect if user is not logged in and trying to access a protected route
        if (!user && location.state === '/all-jobs') {
            setOpenModal(true);
            toast.error('You have to log in first to view details');
            navigate('/');
        }
    }, [user, location.state, navigate, setOpenModal]);

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

    return <Navigate to="/" />;
};

export default PrivateRoute;
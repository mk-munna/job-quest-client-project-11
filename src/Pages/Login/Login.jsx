
import React, { useContext, useRef } from 'react';
import login1 from '../../../public/login1.json'
import Lottie from 'lottie-react'
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiOutlineUser } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContextProvider';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
    const { login,id,setId,clicked,setClicked, openModal,setOpenModal, popUpLogin, setLoading, user, setReload } = useContext(AuthContext)
    
    const location = useLocation();
    const navigate = useNavigate()

    const onCloseModal = () => {
        setOpenModal(false);
        setId(null);
        setClicked(false)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password)
            .then(result => {
                setLoading(false)
                console.log(result.user);
                if (id && clicked) {
                    navigate(`/job/${id}`)
                    setId(null)
                    setClicked(false)
                } else {
                    navigate(location?.state || '/')
                }
                // navigate(location?.state || '/')
                toast.success('Successfully logged in!')
                setOpenModal(false)
                

            }).catch(err => {
                console.log(err.message);
                setLoading(false);
                setOpenModal(true)
                console.log(err.message);
                const firebaseError = err.message
                if (firebaseError.includes('invalid')) {
                    toast.error('Invalid email or password! Please make sure your email and password are correct');
                }
                if (firebaseError.includes('network')) {
                    toast.error('Network failed! please check you network connection');
                }
            })
    }
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleLogin = () => {
        console.log('google login')
        popUpLogin(googleProvider)
            .then(result => {
                setLoading(false)
                setReload(true)
                setOpenModal(false)
                if (id && clicked) {
                    navigate(`/job/${id}`)
                    setId(null)
                    setClicked(false)
                } else {
                    navigate(location?.state || '/')
                }
                // navigate(location?.state || '/')
                toast.success('Successfully logged in!')
            }).catch(err => {
                setLoading(false)
                console.log(err.message);
                setOpenModal(true)
            })
    }
    const emailInputRef = useRef();
    return (
        <div className=''>
            <button className=' flex gap-3 dark:text-heading2 text-heading hover:underline cursor-pointer' onClick={() => setOpenModal(true)}>Sign in</button>
            <Modal show={openModal} className='bg-secondary dark:bg-dark' size="md" onClose={onCloseModal} popup initialFocus={clicked && emailInputRef }>
                <Modal.Header className='bg-gray-300 dark:bg-[#314949]' />
                <Modal.Body className='bg-white dark:bg-[#1e2c2c]'>
                    <div>
                        {
                            clicked && <p className='mt-6 text-black dark:text-heading2 text-center text-lg'> 🙁 You have to log in first to view details </p>
                        }
                        <Lottie style={{ width: 150, marginLeft: 'auto', marginRight: 'auto' }} animationData={login1}></Lottie>
                        <h3 className="text-3xl text-center font-medium text-gray-900 dark:text-white ">LOGIN</h3>
                        <form onSubmit={handleSubmit} className="">
                        <input className='block text-center my-[20px] mx-auto  w-[250px] py-[14px] px-[10px] focus:outline-none bg-white dark:bg-[#1e2c2c] dark:placeholder:text-gray-400 border-primary text-black dark:text-heading2 rounded-3xl placeholder:text-Description border  duration-200 focus:w-[300px] ' type="text" name="email" id="" placeholder='User Email ' ref={emailInputRef}/>
                        <input className='border-primary  bg-white dark:bg-[#1e2c2c] dark:placeholder:text-gray-400 focus:outline-none block text-center my-[20px] mx-auto  w-[250px] py-[14px] text-black dark:text-heading2  px-[10px]  rounded-3xl placeholder:text-Description border  duration-200 focus:w-[300px] ' type="text" name="password" id="" placeholder='User Password' />
                        <input
                            className="block text-center my-[20px] mx-auto  bg-primary w-[250px]  py-[14px] px-[10px] outline-none active:scale-95 text-white rounded-3xl duration-200 hover:w-[251px] cursor-pointer"
                            type="submit" value="LOGIN" />
                        </form>
                        <button onClick={handleGoogleLogin} className="mt-6 border-slate-200 dark:border-gray-500 rounded-full mx-auto w-[250px] border dark:text-white py-[10px] flex  items-center justify-center gap-4">
                            <FcGoogle className="text-2xl " />Login with Google
                        </button>
                        <p className="mt-4 text-center dark:text-white text-sm">Don't have an account?</p>
                        <div className='flex justify-center'>
                            <Link onClick={() => setOpenModal(false)} to={'/sign-up'} className="dark:text-white font-semibold  text-primary text-sm underline">Sign up</Link>
                        </div>
                        <div><Toaster /></div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Login;
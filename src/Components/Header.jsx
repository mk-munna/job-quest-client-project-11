import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { GrMenu } from 'react-icons/gr';
import { HiOutlineUser } from 'react-icons/hi';
import { RiUploadCloudFill } from 'react-icons/ri';
import Login from '../Pages/Login/Login';
import { AuthContext } from '../Provider/AuthContextProvider';
import { signOut } from 'firebase/auth';
import { auth } from "../Provider/firebase.config"
import Lottie from 'lottie-react';
import upload from '../../public/upload.json'
import { FaRegMoon } from 'react-icons/fa';
import { CiLight } from 'react-icons/ci';
import toast, { Toaster } from 'react-hot-toast';
import { Tooltip } from 'react-tooltip'
const Header = () => {
    const { user, loading } = useContext(AuthContext)
    const themeFromLocalStorage = localStorage.getItem("theme")
    const [theme, setTheme] = useState(themeFromLocalStorage);
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        signOut(auth)
            .then(() => {
                toast.success(' successfully logged out!')
            }).catch(err => {
                console.log(err.message);
            })
    }
    useEffect(() => {
        if (theme) {
            // save theme to local storage
            localStorage.setItem("theme", "true");
            document.querySelector("html").classList.add("dark")
        } else {
            localStorage.removeItem("theme");
            document.querySelector("html").classList.remove("dark")
        }
    }, [theme])

    return (
        <div className='flex justify-between max-w-[90%] mx-auto items-center px-7 pt-6'>
            <div className='flex md:ml-[100px] lg:ml-0  items-center'>
                <img className='w-[32px] md:w-[50px]' src="https://i.ibb.co/3pCmNwH/image-removebg-preview-2.png" alt="" />
                <p className='font-medium text-heading dark:text-heading2 text-base md:text-xl'>JobQuest</p>
            </div>
            <div className='grow flex justify-center'>
                {
                    isOpen ? (
                        ''

                    ) : (
                        <GrMenu onClick={() => { setIsOpen(!isOpen) }} className=' duration-1000 mt-6 ml-4 lg:hidden text-4xl text-primary w-[25px] absolute top-0 left-0' />
                    )
                }

                <ul className={`z-10 lg:static absolute  duration-[0.8s] ${isOpen ? 'top-0 left-0 lg:bg-white dark:text-heading2  bg-secondary dark:bg-dark h-screen lg:h-auto pl-6 py-6 pr-12 text-black' : '-left-[100%] top-0   pl-6 py-6 pr-12 h-screen md:h-screen lg:h-auto dark:text-heading2  text-black'}  `}>
                    <IoClose onClick={() => { setIsOpen(!isOpen) }} className='   text-4xl font-bold text-primary w-[25px] lg:hidden absolute top-0 right-2' />
                    <li className='flex flex-col lg:flex-row gap-4 lg:gap-6 text-sm'>
                        <div className='flex md:hidden items-center'>
                            <img className='w-[40px] md:w-[50px]' src="https://i.ibb.co/3pCmNwH/image-removebg-preview-2.png" alt="" />
                            <p className='font-medium text-heading dark:text-heading2 text-xl'>JobQuest</p>
                        </div>
                        <NavLink className={''} to={'/'} onClick={() => setIsOpen(false)}>Home</NavLink>
                        <NavLink className={''} to={'/all-jobs'} onClick={() => setIsOpen(false)}>All Jobs</NavLink>
                        <NavLink className={''} to={'/applied-jobs'} onClick={() => setIsOpen(false)}>Applied Jobs</NavLink>
                        <NavLink className={''} to={'/add-job'} onClick={() => setIsOpen(false)}>Add A Job</NavLink>
                        <NavLink className={''} to={'/my-jobs'} onClick={() => setIsOpen(false)}>My Jobs</NavLink>

                    </li>
                </ul>
            </div>
            <div className="w-12">
                {
                    theme ? (
                        <FaRegMoon className="text-xl cursor-pointer " onClick={() => setTheme(!theme)} />
                    ) : (
                        <CiLight  className="text-2xl cursor-pointer -ml-1" onClick={() => setTheme(!theme)} />
                    )
                }
            </div>
            <div className='flex items-center'>
                {
                    loading ? (
                        <div className="skeleton w-8 h-8 rounded-full shrink-0"></div>
                    ) : (
                        user ? (
                                <div className=" flex items-center gap-2 ">
                                    <Tooltip id="my-tooltip" />
                                <div>
                                        <div data-tooltip-id="my-tooltip" place="top" data-tooltip-content={user?.displayName || 'Unknown'} tabIndex={0} role="button" className=" m-1">
                                        {
                                            user?.photoURL ? (
                                                <img src={user?.photoURL} alt="" className="w-8 h-8 rounded-full " />
                                            ) : (
                                                <div className="bg-[#3bd8d8] text-lg w-8 h-8 flex justify-center items-center rounded-full">
                                                    {
                                                        user?.displayName ? (

                                                            <p>{user?.displayName.charAt(0).toUpperCase()}</p>
                                                        ) : (
                                                            <p>U</p>
                                                        )
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>

                                </div>
                                <a className='cursor-pointer ml-2' onClick={handleClick}> Sign out</a>
                            </div>
                        ) : (
                            <div className='flex items-center gap-4'>
                                <HiOutlineUser className='text-xl' /> <Login></Login>
                            </div>
                        )
                    )
                }

                <div className=' hidden md:flex pl-10'>
                    <button className='flex items-center gap-2 bg-primary dark:bg-[#309670] rounded-md px-4 py-2 text-sm text-white dark:text-gray-200 font-semibold font-Jost'><Lottie style={{ width: 30 }} animationData={upload}></Lottie> Upload Resume</button>
                </div>
            </div>
            <div><Toaster /></div>
        </div>
    );
};

export default Header;
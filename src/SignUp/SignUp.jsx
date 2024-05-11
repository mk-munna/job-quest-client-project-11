import { useContext, useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { RiBook2Line } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthContextProvider";

import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";


// lottie
import Lottie from "lottie-react";
import LoginLottie from '../../public/login.json'
import { IoIosCheckmarkCircleOutline, IoIosCloseCircleOutline } from "react-icons/io";
import Login from "../Pages/Login/Login";



const SignUp = () => {

    const { signUp, setLoading, updateUserProfile, setUser, user } = useContext(AuthContext)

    // password state
    const [livePassword, setLivePassword] = useState('');
    const [liveConfirmPassword, setLiveConfirmPassword] = useState('');
    const [agree, setAgree] = useState(false);

    // error state
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [fulfillBar, setFulfillBar] = useState(0);
    const [fulfilState, setFulfillState] = useState('');

    // password validation before firebase authentication
    useEffect(() => {
        if (livePassword.length > 0) {
            let newError = '';

            if (!/[A-Z]/.test(livePassword)) {
                newError = ' an uppercase letter';
            } else if (!/[a-z]/.test(livePassword)) {
                newError = ' a lowercase letter';
            } else if (!/\d/.test(livePassword)) {
                newError = ' a digit';
            } else if (!/[^a-zA-Z0-9]/.test(livePassword)) {
                newError = 'a special character';
            } else if (livePassword.length < 6) {
                newError = ' at least 6 characters';
            } else {
                newError = '';
            }

            setPasswordError(newError);
        } else {
            setPasswordError('');
        }
    }, [livePassword,]);
    useEffect(() => {

        if (livePassword.length > 0) {
            let fulfilledConditions = 0;

            if (/[A-Z]/.test(livePassword)) {
                fulfilledConditions++;
            }
            if (/[a-z]/.test(livePassword)) {
                fulfilledConditions++;
            }
            if (/\d/.test(livePassword)) {
                fulfilledConditions++;
            }
            if (/[^a-zA-Z0-9]/.test(livePassword)) {
                fulfilledConditions++;
            }
            if (livePassword.length >= 6) {
                fulfilledConditions++;
            }
            if (livePassword.length === 0) {
                fulfilledConditions = 0;
            }
            setFulfillBar(fulfilledConditions);
        }
    }, [livePassword]);


    useEffect(() => {
        if (livePassword.length === 0) {
            setFulfillBar(0)
            setFulfillState('')
        }
        if (fulfillBar === 1) {
            setFulfillState('very week');
        }
        if (fulfillBar === 2) {
            setFulfillState(' week');
        }
        if (fulfillBar === 3) {
            setFulfillState(' medium');
        }
        if (fulfillBar === 4) {
            setFulfillState(' strong');
        }

        if (fulfillBar > 4 && livePassword.length >= 6) {
            setFulfillState(' hard');
        }
    }, [livePassword, fulfillBar])

    // Confirm password validation
    useEffect(() => {
        if (liveConfirmPassword.length > 0) {
            if (livePassword !== liveConfirmPassword) {
                setConfirmPasswordError(2);
            } else {
                setConfirmPasswordError(3);
            }
        } else {
            setConfirmPasswordError(1);
        }

    }, [livePassword, fulfillBar, liveConfirmPassword]);
    // console.log(passwordError);
    // console.log(fulfillBar);
    // console.log(confirmPasswordError);
    // console.log(livePassword);



    //----- validation done before initialization of firebase----
    // auth start
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        const { name, email, url, password, confirmPassword } = data;
        if (password === confirmPassword) {
            signUp(email, password)
                .then(result => {
                    // console.log(result.user);
                    updateUserProfile(result.user, name, url)
                        .then(() => {
                            setUser({ ...user, displayName: name, photoURL: url })
                            toast.success('Successfully signed up!')
                        })
                }).catch(err => {
                    setLoading(false);
                    console.log(err.message);
                    const firebaseError = err.message
                    if (firebaseError.includes('already')) {
                        toast.error('Email is already in use. Please try with another email address');
                    }
                    if (firebaseError.includes('network')) {
                        toast.error('Network failed! please check you network connection');
                    }
                })

        } else {
            toast.error('Passwords do not match')
        }
    }
    return (
        <div className="max-w-[350px] bg-white dark:bg-dark md:max-w-screen-sm my-20 lg:max-w-[90%] mx-auto flex flex-col lg:flex-row gap-12 justify-evenly">
            <Helmet>
                <title>JobQuest | Sign Up</title>
            </Helmet>
            <div className="text-gray-700 rounded-xl">
                <h4 className="block font-Jost text-5xl leading-snug dark:text-heading2 text-heading">
                    Register Account
                </h4>
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-screen-lg lg:w-[100%]">
                    <div className="mt-6 flex flex-col  gap-2">
                        <div className="w-[160px] ">
                            <label htmlFor="name" className="mb-2 text-black dark:text-heading2 text-sm ">Full Name </label>
                        </div>
                        <input {...register("name",)} type="text" id="name" name="name" className="bg-gray-50 dark:bg-dark focus:outline-none border rounded-lg w-full px-4 py-2 font-Outfit border-gray-300 dark:text-Description2  dark:border-gray-500 " placeholder="Your Name" />
                    </div>
                    <div className="mt-4 flex flex-col  gap-2">
                        <div className="w-[160px]">
                            <label htmlFor="email" className="mb-2 text-black dark:text-heading2 text-sm ">Your Email <span className="text-red-500">*</span></label>
                        </div>
                        <input  {...register("email")} type="email" id="email" name="email" className="bg-gray-50 dark:bg-dark focus:outline-none border rounded-lg w-full px-4 py-2 font-Outfit border-gray-300 dark:border-gray-500 dark:text-Description2  " placeholder="Your Email" required />
                    </div>
                    <div className="mt-4 flex flex-col  gap-2">
                        <div className="w-[160px]">
                            <label htmlFor="url" className="mb-2 text-black dark:text-heading2 text-sm ">Your Photo Url </label>
                        </div>
                        <input {...register("url")} type="text" id="url" name="url" className="bg-gray-50 dark:bg-dark focus:outline-none border rounded-lg w-full px-4 py-2  border-gray-300 dark:border-gray-500 dark:text-Description2  " placeholder="https://example.jpg" />
                    </div>

                    
                    <div className="mt-4 flex flex-col  gap-2">
                        <div className="">
                            <div className="flex justify-between items-center">
                                <label htmlFor="password" className=" text-black dark:text-heading2 text-sm  ">Password <span className="text-red-500">*</span></label>
                                <p>
                                    {
                                        fulfilState && (

                                            <small className="dark:text-Description2">
                                                Password strength :  <span className="items-center px-3 mt-4 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">  {fulfilState}</span>
                                            </small>
                                        )
                                    }
                                </p>
                            </div>
                        </div>
                        <input  {...register("password")} onChange={e => { setLivePassword(e.target.value) }} type="text" id="password" name="password" className="bg-gray-50 dark:bg-dark focus:outline-none border rounded-lg w-full px-4 py-2 font-Outfit border-gray-300 dark:border-gray-500  dark:text-Description2 " placeholder="Your Password" required />

                    </div>
                    {/* error */}
                    <div className="ml-[150px]">
                        {
                            passwordError && (
                                <p className="text-primary mt-2 text-xs mt">
                                    Password must have <span className="text-red-500">{passwordError}</span>
                                </p>
                            )
                        }
                    </div>
                    <div className="mt-4 flex flex-col  gap-2">
                        <div className="w-[160px] ">
                            <label htmlFor="confirm-password" className="mb-2 text-black dark:text-heading2 text-sm ">Confirm Password <span className="text-red-500">*</span></label>
                        </div>
                        <input {...register("confirmPassword")} onChange={e => setLiveConfirmPassword(e.target.value)} type="text" id="confirm-password" name="confirmPassword" className="bg-gray-50 dark:text-Description2 dark:bg-dark focus:outline-none border rounded-lg w-full px-4 py-2 font-Outfit border-gray-300 dark:border-gray-500 " placeholder="Confirm Password" required />
                    </div>
                    {/* error */}
                    <div className="ml-[150px]">
                        {confirmPasswordError === 1 && (
                            <p className="text-red-500 mt-2 text-xs mt">
                            </p>
                        )}
                        {confirmPasswordError === 2 && (
                            <p className="text-primary mt-2 flex gap-1 items-center  text-xs mt">
                                Password <p className="gap-2 flex text-red-500">do not match
                                    <IoIosCloseCircleOutline /></p>
                            </p>
                        )}
                        {confirmPasswordError === 3 && (
                            <p className="text-primary mt-2 flex items-center gap-2 text-xs mt">
                                Password Match <IoIosCheckmarkCircleOutline />
                            </p>
                        )}
                    </div>

                    {/* Checkbox for Terms and Conditions */}
                    <div className="flex gap-6 items-center mt-12">
                        <input onChange={e => setAgree(e.target.checked)} type="checkbox" id="agree" name="agree" className="checkbox checkbox-sm" />
                        <label className="mt-px font-light dark:text-Description2 text-gray-700 cursor-pointer select-none" htmlFor="agree">
                            I agree the
                            <Link to="#" className="font-medium transition-colors dark:hover:text-heading2 hover:text-gray-900">
                                &nbsp;Terms and Conditions
                            </Link>
                        </label>
                    </div>
                    <button
                        disabled={!agree || passwordError}
                        className="mt-6 block bg-primary disabled:bg-[#6c9e89] w-full select-none rounded-lg py-2 text-white"
                    >
                        Sign up
                    </button>
                    <p className="mt-4 flex justify-center text-base antialiased font-normal leading-relaxed text-center text-gray-700 dark:text-Description2">
                        Already have an account? &nbsp; <Login></Login>
                        
                    </p>
                </form>
            </div>
            <div>
                <Lottie style={{width: 500 }} animationData={LoginLottie} ></Lottie>
            </div>
            <div><Toaster /></div>
        </div>
    );
}

export default SignUp;

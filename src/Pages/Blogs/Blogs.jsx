import React from 'react';
import { Helmet } from 'react-helmet-async';
import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>JobQuest | Blogs</title>
                </Helmet>
            </div>
            <div className='bg-gray-100 dark:bg-[#1f2d33] h-16 flex items-center px-[100px] w-full'>
                <Link to={'/'}><button className='flex items-center gap-3 text-primary'><IoMdArrowBack />Back To Home</button></Link>
            </div>
            <div className='max-w-[90%] mx-auto mt-10 space-y-8 lg:px-8 font-Montserrat'>

                <div className=' flex gap-4  lg:w-[900px]'>
                    <div>
                        <div className='size-2 mt-4 bg-primary dark:bg-white rounded-full'>

                        </div>
                    </div>
                    <div>
                        <h1 className='text-heading font-Montserrat dark:text-heading2 text-4xl font-semibold'>What is an access token and refresh token? How do they work and where should
                            we store them on the client side?</h1>
                        <p className='mt-6'>
                            An access token and a refresh token are commonly used in authentication systems, especially in OAuth 2.0 and similar protocols. Here's an overview of what they are, how they work, and where to store them on the client side: <Link to={'/blog1'} className='text-primary hover:underline cursor-pointer'>...Read More</Link>
                        </p>
                    </div>
                </div>
                <div className=' flex gap-4  lg:w-[900px]'>
                    <div>
                        <div className='size-2 mt-4 bg-primary dark:bg-white rounded-full'>

                        </div>
                    </div>
                    <div>
                        <h1 className='text-heading font-Montserrat dark:text-heading2 text-4xl font-semibold'> What is express js? What is Nest JS?</h1>
                        <p className='mt-6'>
                            Express.js, commonly referred to as Express, is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It is designed for building web applications and APIs quickly and easily. <Link to={'/blog2'} className='text-primary hover:underline cursor-pointer'>...Read More</Link>
                        </p>
                    </div>
                </div>
                <div className=' flex gap-4  lg:w-[900px]'>
                    <div>
                        <div className='size-2 mt-4 bg-primary dark:bg-white rounded-full'>

                        </div>
                    </div>
                    <div>
                        <h1 className='text-heading font-Montserrat dark:text-heading2 text-4xl font-semibold'> About my website features and code</h1>
                        <p className='mt-6'>
                            This is a one kind of job seeking website. heres users can find job and apply for. my website sounds like a comprehensive platform for job management. Let's break down its features and technologies used: <Link to={'/blog3'} className='text-primary hover:underline cursor-pointer'>...Read More</Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;
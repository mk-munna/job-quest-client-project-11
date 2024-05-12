import React from 'react';
import { Helmet } from 'react-helmet-async';
import { IoIosSearch, IoMdArrowBack } from 'react-icons/io';
import { Link, useLoaderData } from 'react-router-dom';

const AllJobs = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className=''>
            <div>
                <Helmet>
                    <title>Asian Escape Hub | Tourist spots</title>
                </Helmet>
            </div>
            <div className='bg-gray-100 h-16 flex items-center px-[100px] w-full'>
                <Link to={'/'}><button className='flex items-center gap-3 text-primary'><IoMdArrowBack />Back To Home</button></Link>
            </div>

            <div className='mt-10 max-w-[350px] md:max-w-screen-sm lg:max-w-6xl mx-auto'>
                <div className='flex justify-center'>
                    {/* search form */}
                    <form className=' border border-gray-600 dark:border-gray-500 rounded-md py-4 px-4  flex-col md:flex-row flex md:justify-evenly lg:justify-normal gap-4  lg:w-[550px]'>
                        <div className=' grow flex gap-2 items-center'>
                            <IoIosSearch />
                            <input className='w-full outline-none border-none bg-white dark:bg-dark focus:outline-none' type="text" placeholder='Type Any Title, Name Or Keyword' />
                        </div>
                        <button className='bg-primary dark:bg-primary2 px-3 rounded-md py-3 text-white dark:text-db'>Find Job</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AllJobs;
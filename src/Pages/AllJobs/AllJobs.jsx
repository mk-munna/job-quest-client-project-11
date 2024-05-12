import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { IoIosSearch, IoMdArrowBack } from 'react-icons/io';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';


import { Table } from "flowbite-react";
import { BsMenuUp } from 'react-icons/bs';
import { AuthContext } from '../../Provider/AuthContextProvider';
import toast, { Toaster } from 'react-hot-toast';

const AllJobs = () => {
    const loadedData = useLoaderData()
    const { user, clicked, setClicked,id,setId, openModal, setOpenModal,} = useContext(AuthContext)
    const [data, setData] = useState(loadedData)
    console.log(data);
    const handleSubmit = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        console.log(search);
        const resultData = loadedData.filter(job => job.title.toUpperCase().includes(search.toUpperCase()))
        setData(resultData)
    }
   
const navigate = useNavigate()
    const handleViewDetails = (id) => {
        console.log('id', id);
        setClicked(true)
        setId(id)
        if (user) {
            navigate(`/job/${id}`)
        }
        else {
            setOpenModal(true)
            // toast.error('You have to log in first to view details ')
        }
    }
    
    return (
        <div className=''>
            <div>
                <Helmet>
                    <title>Asian Escape Hub | Tourist spots</title>
                </Helmet>
            </div>
            <div className='bg-gray-100 dark:bg-[#1f2d33] h-16 flex items-center px-[100px] w-full'>
                <Link to={'/'}><button className='flex items-center gap-3 text-primary'><IoMdArrowBack />Back To Home</button></Link>
            </div>

            <div className='mt-10 max-w-[350px] md:max-w-screen-sm lg:max-w-6xl mx-auto'>
                <div className='flex justify-center'>
                    {/* search form */}
                    <form onSubmit={handleSubmit} className=' border border-gray-600 dark:border-gray-500 rounded-md py-4 px-4  flex-col md:flex-row flex md:justify-evenly lg:justify-normal gap-4  lg:w-[550px]'>
                        <div className=' grow flex gap-2 items-center'>
                            <IoIosSearch />
                            <input name='search' className='w-full outline-none border-none bg-white dark:bg-dark focus:outline-none' type="text" placeholder='Type Any Title, Name, Word Or Keyword' />
                        </div>
                        <button className='bg-primary dark:bg-primary2 px-3 rounded-md py-3 text-white dark:text-db'>Find Job</button>
                    </form>
                </div>
                <div className='mt-8'>
                    <p className='flex items-center gap-4'><span className='bg-primary p-2 rounded-md'><BsMenuUp className=' text-white' /> </span>1249 jobs recommended for you</p>
                    <div className="mt-6 overflow-x-auto">
                        <Table>
                            <Table.Head className=''>
                                <Table.HeadCell className='bg-gray-50 dark:bg-[#1b3a46] '> Job Title</Table.HeadCell>
                                <Table.HeadCell className='bg-gray-50 dark:bg-[#1b3a46] '> Job Posting Date</Table.HeadCell>
                                <Table.HeadCell className='bg-gray-50 dark:bg-[#1b3a46] '> Application Deadline</Table.HeadCell>
                                <Table.HeadCell className='bg-gray-50 dark:bg-[#1b3a46] '> Salary Range</Table.HeadCell>
                                <Table.HeadCell className='bg-gray-50 dark:bg-[#1b3a46] '>View Details</Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {
                                    data?.map(job => {
                                        return (
                                            <Table.Row key={job._id} className="bg-white dark:border-gray-700 dark:bg-[#132e31]">
                                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    {job.title}
                                                </Table.Cell>
                                                <Table.Cell>{job.postingDate }</Table.Cell>
                                                <Table.Cell>{job.deadline }</Table.Cell>
                                                <Table.Cell>{job.salaryRange}</Table.Cell>
                                                <Table.Cell>
                                                    {/* <Link state={location.pathname} to={`/job/${job._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                        Details
                                                    </Link> */}
                                                    <a onClick={() => handleViewDetails(job._id)} className="font-medium cursor-pointer text-cyan-600 hover:underline dark:text-cyan-500">Details</a>
                                                </Table.Cell>
                                            </Table.Row>
                                        )
                                    })
                                }
                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </div>
            <div><Toaster /></div>
        </div>
    );
};

export default AllJobs;
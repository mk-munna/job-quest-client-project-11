import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { IoIosSearch, IoMdArrowBack } from 'react-icons/io';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

import { Table } from "flowbite-react";
import { BsMenuUp } from 'react-icons/bs';
import { AuthContext } from '../../Provider/AuthContextProvider';
import toast, { Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// lottie
import Lottie from 'lottie-react';
import loadingLottie from '../../../public/loadingLottie.json'
import { MdOutlineDeleteOutline } from 'react-icons/md';
const MyJobs = () => {

    // data loading

    const { data: loadedData, isLoading, refetch, isError, error } = useQuery({
        queryFn: () => getData(),
        queryKey: ['my-jobs']
    })
    const getData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/my-jobs?email=${user.email}`)
        return data
    }
    console.log(loadedData)
    console.log({ isLoading, refetch, isError, error })
    // const loadedData = useLoaderData()
    const { user, clicked, setClicked, id, setId, openModal, setOpenModal, } = useContext(AuthContext)

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(loadedData)
    }, [loadedData, isLoading])

    console.log(data);
    const handleSubmit = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        console.log(search);
        const resultData = loadedData.filter(job => job.title.toUpperCase().includes(search.toUpperCase()))
        setData(resultData)
    }
    const currentPathname = window.location.pathname;
    const navigate = useNavigate()
    const handleViewDetails = (id) => {
        console.log('id', id);
        setClicked(true)
        setId(id)
        if (user) {
            navigate(`/job/${id}?from=${encodeURIComponent(currentPathname)}`)
        }
        else {
            setOpenModal(true)
        }
    }

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            iconColor: "#1CA774",
            showCancelButton: true,
            confirmButtonColor: "#1CA774",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/delete/${id}`)
                    .then(response => {
                        console.log(response.data)
                        if (response.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tourist spot has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting job:', error);
                    });
            }
        });
    }

    if (isLoading) {
        return (
            <div>
                <Lottie style={{ width: 550, marginLeft: 'auto', marginRight: 'auto' }} animationData={loadingLottie}></Lottie>

            </div>
        )
    }
    if (data?.length === 0) { 
        return (
            <div className=' max-w-[90%] relative mx-auto  lg:h-[400px]'>
                <div className='bg-gray-100 dark:bg-[#1f2d33] h-16 flex items-center w-full'>
                    <Link to={'/'}><button className='flex items-center gap-3 text-primary'><IoMdArrowBack />Back To Home</button></Link>
                </div>
                <p className=' h-full text-3xl text-gray-400 flex justify-center items-center '>Your have not posted any job yet</p>
            </div>
        )
    }
    return (
        <div className=''>
            <div>
                <Helmet>
                    <title>JobQuest | My jobs</title>
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
                    <p className='flex items-center gap-4'><span className='bg-primary p-2 rounded-md'><BsMenuUp className=' text-white' /> </span>You added {data?.length} jobs</p>
                    <div className="mt-6 overflow-x-auto">
                        <Table>
                            <Table.Head className=''>
                                <Table.HeadCell className='bg-gray-50 dark:bg-[#1b3a46] '> Job Title</Table.HeadCell>
                                <Table.HeadCell className='bg-gray-50 dark:bg-[#1b3a46] '> Job Posting Date</Table.HeadCell>
                                <Table.HeadCell className='bg-gray-50 dark:bg-[#1b3a46] '> Application Deadline</Table.HeadCell>
                                <Table.HeadCell className='bg-gray-50 dark:bg-[#1b3a46] '> Salary Range</Table.HeadCell>
                                <Table.HeadCell className='bg-gray-50 dark:bg-[#1b3a46] '> Applicants</Table.HeadCell>
                                <Table.HeadCell className='bg-gray-50 dark:bg-[#1b3a46] '> Details</Table.HeadCell>
                                <Table.HeadCell className='bg-gray-50 dark:bg-[#1b3a46] '>Update</Table.HeadCell>
                                <Table.HeadCell className='bg-gray-50 dark:bg-[#1b3a46] '>Delete</Table.HeadCell>

                            </Table.Head>
                            <Table.Body className="divide-y">
                                {
                                    data?.map(job => {
                                        const { postingDate, deadline } = job
                                        // Convert postingDate 
                                        const postingDateString = new Date(postingDate).toLocaleDateString();
                                        // console.log({postingDateString});
                                        // Convert deadline 
                                        const deadlineString = new Date(deadline).toLocaleDateString();
                                        return (
                                            <Table.Row key={job._id} className="bg-white dark:border-gray-700 dark:bg-[#132e31]">
                                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    {job.title}
                                                </Table.Cell>
                                                <Table.Cell>{postingDateString}</Table.Cell>
                                                <Table.Cell>{deadlineString}</Table.Cell>
                                                <Table.Cell>{job.salaryRange}</Table.Cell>
                                                <Table.Cell><span className='px-2 py-1 rounded-full bg-secondary'>{job.applicants}</span></Table.Cell>
                                                <Table.Cell>
                                                    <a onClick={() => handleViewDetails(job._id)} className="font-medium cursor-pointer text-primary hover:underline dark:text-[#6ac0ab]">Details</a>
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <Link to={`/update/${job._id}`}><button className='bg-primary text-white text-[12px] px-2 py-[2px] rounded-[4px]'>Update</button></Link>
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <button onClick={() => handleDelete(job._id)} className='bg-[#dbfde8] px-2 py-[2px] rounded-[4px]'><MdOutlineDeleteOutline className='text-xl ' /></button>
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


export default MyJobs;
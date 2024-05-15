import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContextProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init()
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { IoMdArrowBack } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const UpdateJob = () => {
    const { user } = useContext(AuthContext)
    const [desc, setDesc] = useState('')
    const [jobDeadline, setJobDeadline] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [job, setJob] = useState(null)
    const { id } = useParams()
    console.log(id)
    console.log(job);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/get-job/${id}`);
                setJob(response.data);
            } catch (error) {
                // Handle any errors here
                console.error('Error fetching job data:', error);
            }
        };

        fetchData();
    }, [id]); 

  
    // console.log(desc);
    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const bannerUrl = form.url.value;
        const title = form.jobName.value;
        const category = form.category.value;
        const postedBy = {
            name: user.displayName,
            email: user.email
        }
        const description = desc;
        const salaryRange = form.salaryRange.value;
        const postingDate = startDate
        const deadline = jobDeadline
        const applicants = parseInt(form.applicants.value);
        const newJob = { bannerUrl, title, category, postedBy, description : desc, salaryRange, postingDate, deadline, applicants }
        console.log({ newJob });
        try {
            axios.put(`${import.meta.env.VITE_API_URL}/update/${id}`, newJob)
            .then(data => {
                console.log(data.data)
                if (data.data.modifiedCount === 1) {
                    Swal.fire({
                        title: 'Updated Successfully!',
                        text: 'Your job data has been updated successfully',
                        icon: 'success',
                        iconColor: "#1CA774",
                        confirmButtonColor: "#1CA774",
                        confirmButtonText: 'Cool'
                    })

                } 
                if (data.data.modifiedCount === 0) { 
                    Swal.fire({
                        title: 'Error!',
                        text: 'Already updated the same value',
                        icon: 'error',
                        iconColor: '#F15656',
                        confirmButtonColor: "#1CA774",
                        confirmButtonText: 'Cool'
                    })
                }
            })
        } catch (error) {
            console.error('Error updating job:', error);
        }
    }
    // console.log(startDate)
    // console.log(jobDeadline) 

    useEffect(() => {
        if (job) {
            const { bannerUrl, title, category, postedBy, description, salaryRange, postingDate, deadline, applicants } = job
            // Convert postingDate 
            setDesc(description)
            const postingDateString = new Date(postingDate).toLocaleDateString();

            // Convert deadline 
            const deadlineString = new Date(deadline).toLocaleDateString();
            setJobDeadline(deadlineString);
            setStartDate(postingDateString);
            }
    },[job])
    if (job) {
        const { bannerUrl, title, category, postedBy, description, salaryRange, postingDate, deadline, applicants } = job
        // Convert postingDate 
        const postingDateString = new Date(postingDate).toLocaleDateString();
        
        // Convert deadline 
        const deadlineString = new Date(deadline).toLocaleDateString();

        return (
            <div className=''>
                <Helmet>
                    <title>JobQuest | Update Job</title>
                </Helmet>
                <div className='bg-gray-100 dark:bg-[#1f2d33] h-16 flex items-center px-[100px] w-full'>
                    <Link to={'/'}><button className='flex items-center gap-3 text-primary'><IoMdArrowBack />Back To Home</button></Link>
                </div>
                <div className='max-w-[350px] my-20 md:max-w-screen-sm lg:max-w-6xl mx-auto'>
                    <div>
                        <h1 data-aos="fade-in" data-aos-duration="5000" className='text-4xl  text-primary font-semibold font-sans'>Update Your Job</h1>
                    </div>
                    <div className='mt-8'>
                        <form onSubmit={handleAddJob} data-aos="fade-in" data-aos-duration="1500" >
                            <div className='flex flex-col md:flex-row  gap-8'>
                                <div className='grow w-full'>
                                    <label className=' text-sm  block mb-2 text font-medium'>Job Name <span className='text-red-500'>*</span></label>
                                    <input defaultValue={title} required name='jobName' type='text' placeholder='Frontend Developer' className=' border border-primary px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                                </div>
                                <div className='grow w-full'>
                                    <label className=' text-sm  block mb-2 text font-medium'> Salary Range ($)<span className='text-red-500'> *</span></label>
                                    <input defaultValue={salaryRange} required name='salaryRange' type='text' placeholder='$23000 - $60000' className=' border border-primary px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                                </div>

                            </div>
                            <br />
                            <div className='flex flex-col md:flex-row  gap-8'>
                                <div className='grow w-full'>
                                    <label className=' text-sm  block mb-2 text font-medium'>Job Banner Url<span className='text-red-500'> *</span></label>
                                    <input defaultValue={bannerUrl} required name='url' type='text' placeholder='http://example.jpg' className=' border border-primary px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                                </div>
                                <div className='grow w-full'>
                                    <label className=' text-sm  block mb-2 text font-medium'>Job Applicants (Default)<span className='text-red-500'></span></label>
                                    <input defaultValue={applicants} disabled  required name='applicants' type='text' placeholder='' className=' border border-primary px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                                </div>

                            </div>
                            <br />
                            <div className='flex flex-col md:flex-row  gap-8'>
                                <div className='grow w-full'>
                                    <label className=' text-sm  block mb-2 text font-medium'>Your Name (Default)<span className='text-red-500'></span></label>
                                    <input disabled name='name' type='text' defaultValue={user?.displayName} placeholder='Mk Munna' className=' border border-primary px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                                </div>
                                <div className='grow w-full '>
                                    <label className=' text-sm  block mb-2 text font-medium'>Your Email (Default)<span className='text-red-500'></span></label>
                                    <input disabled name='email' type='email' defaultValue={user?.email} placeholder='mkmunna@gmail.com' className=' border border-primary px-6 py-[10px] rounded-md focus:outline-none w-full text-primary' />
                                </div>
                            </div>
                            <br />
                            <div className='flex flex-col lg:flex-row  gap-8'>
                                <div className='flex flex-col md:flex-row gap-8'>
                                    <div className='grow w-full'>
                                        <label className=' text-sm  block mb-2 text font-medium'>jobDeadline<span className='text-red-500'> *</span></label>
                                        <DatePicker selected={jobDeadline}  className=' border border-primary px-6 py-[10px] rounded-md focus:outline-none w-[350px] md:w-[300px] lg:w-[350px] text-primary'  onChange={(date) => setJobDeadline(date)} />
                                    </div>
                                    <div className='grow w-full'>
                                        <label className=' text-sm  block mb-2 text font-medium'>Posting Date (Default)<span className='text-red-500'> </span></label>
                                        <DatePicker selected={startDate}  className=' border border-primary px-6 py-[10px] rounded-md focus:outline-none md:w-[300px]  w-[350px] lg:w-[350px] text-primary'  onChange={(date) => setStartDate(date)} />
                                    </div>
                                </div>
                                <div className='grow w-full'>
                                    <label className=' text-sm  block mb-2 text font-medium'>Category<span className='text-red-500'> *</span></label>
                                    <select required name='category' className='  text-primary border border-primary px-6 py-[10px] rounded-md focus:outline-none w-full'>
                                        <option className=' cursor-pointer' defaultChecked value="">Select Category</option>
                                        <option selected={category === "On Site"} className=' cursor-pointer' value="On Site,">On Site,</option>
                                        <option className=' cursor-pointer' selected={category === "Remote"} value=" Remote">Remote</option>
                                        <option selected={category === "Part-Time"} className=' cursor-pointer' value="Part-Time">Part-Time</option>
                                        <option selected={category === "Hybrid"} className=' cursor-pointer' value="Hybrid">Hybrid</option>
                                    </select>
                                </div>
                            </div>
                            <br />
                            <div className='grow w-full '>
                                <label className=' text-sm  block mb-2 text font-medium'>Job Description<span className='text-red-500'> *</span></label>
                                <textarea
                                    required
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)} // Update the description state
                                    placeholder='Write a description about this Job'
                                    className='border border-primary px-6 py-[10px] rounded-md focus:outline-none w-full text-primary'
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="4"
                                ></textarea>

                            </div>
                            <button
                                className="mt-6 block bg-primary disabled:bg-[#9fdf96] w-full select-none rounded-lg py-2 text-white">Update Your Job</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
   
};

export default UpdateJob;
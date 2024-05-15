import React from 'react';
import { Helmet } from 'react-helmet-async';
import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Blog3 = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>JobQuest | Blog | About this website</title>
                </Helmet>
            </div>
            <div className='bg-gray-100 dark:bg-[#1f2d33] h-16 flex items-center px-[100px] w-full'>
                <Link to={'/blogs'}><button className='flex items-center gap-3 text-primary'><IoMdArrowBack />Back To Blogs</button></Link>
            </div>

            <div className='max-w-[90%] mx-auto lg:px-8 mb-12 font-Montserrat mt-10'>
                <div className=' lg:w-[900px]'>
                    <div>
                        <h1 className='text-heading font-Montserrat dark:text-heading2 text-4xl font-semibold'>About my website features and code</h1>
                        <p className='mt-6'>
                            This is a one kind of job seeking website. heres users can find job and apply for. my website sounds like a comprehensive platform for job management. Let's break down its features and technologies used:
                        </p>


                        {/* list */}

                        <div className='space-y-6 mt-8'>
                            <div>
                                <p className='text-xl font-semibold'>1. User Authentication:</p>
                                <ol className='space-y-2 mt-4'>
                                    <li>
                                        Utilizing Firebase for user authentication provides a secure and reliable way for users to sign up, log in, and log out of the platform.
                                    </li>
                                    <li>
                                        Users can securely access their accounts and manage their personal information.
                                    </li>
                                </ol>
                            </div>
                            {/*  */}
                            <div>
                                <p className='text-xl font-semibold'>2. Job Management:</p>
                                <ol className='space-y-2 mt-4'>
                                    <li>
                                        Users can create job listings, specifying details such as job title, category, salary range, job description, application deadline, and more.
                                    </li>
                                    <li>
                                        MongoDB serves as the database to store and manage job data, allowing for efficient retrieval and manipulation of job listings.
                                    </li>
                                    <li>
                                        Axios facilitates seamless communication between the frontend and backend, enabling users to interact with the job management features without page reloads.
                                    </li>
                                </ol>
                            </div>
                            {/*  */}
                            <div>
                                <p className='text-xl font-semibold'>3. Job Application:</p>
                                <ol className='space-y-2 mt-4'>
                                    <li>
                                        Users can apply for job listings directly through the platform, providing necessary information such as their name, email, resume link, and application status.
                                    </li>
                                    <li>
                                        The application process is facilitated by forms integrated with Hook Form, ensuring smooth data submission and validation.
                                    </li>
                                    <li>
                                        Hot Toast provides user-friendly notifications, enhancing the user experience by providing real-time feedback on the application process.
                                    </li>
                                </ol>
                            </div>
                            <div>
                                <p className='text-xl font-semibold'>4. User Interface and Experience:</p>
                                <ol className='space-y-2 mt-4'>
                                    <li>
                                        Framer Motion is used to animate the user interface, creating engaging transitions and visual effects that enhance the overall user experience.
                                    </li>
                                    <li>
                                        Lottie animation adds interactive and visually appealing animations to the website, capturing users' attention and making the platform more engaging.
                                    </li>
                                    <li>
                                        Datepicker component allows users to easily select dates when specifying job posting dates and application deadlines, improving usability and convenience.
                                    </li>
                                    <li>
                                        SweetAlert enhances the presentation of alerts and dialog boxes, providing a sleek and modern interface for notifying users of important events or actions.
                                    </li>
                                </ol>
                            </div>
                            <p className='mt-4'>
                                Overall, this website combines a variety of technologies and features to create a robust and user-friendly platform for job management. By leveraging these tools effectively, you have developed a dynamic and engaging website that meets the needs of both job seekers and employers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog3;
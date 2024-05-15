import React from 'react';
import { Helmet } from 'react-helmet-async';
import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Blog2 = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>JobQuest | blog |  What is express js...</title>
                </Helmet>
            </div>
            <div className='bg-gray-100 dark:bg-[#1f2d33] h-16 flex items-center px-[100px] w-full'>
                <Link to={'/blogs'}><button className='flex items-center gap-3 text-primary'><IoMdArrowBack />Back To Blogs</button></Link>
            </div>

            <div className='max-w-[90%] mx-auto lg:px-8 mb-12 font-Montserrat mt-10'>
                <div className=' lg:w-[900px]'>
                    <div>
                        <h1 className='text-heading font-Montserrat dark:text-heading2 text-4xl font-semibold'>
                            What is express js? What is Nest JS?</h1>
                        <p className='mt-6'>
                            Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built on top of Express.js and provides an opinionated structure and a set of powerful features inspired by Angular, making it suitable for building both traditional server-side applications and modern, enterprise-grade applications.
                            <p className='mt-3 text-lg'>Key features of Nest.js include:</p>
                        </p>


                        {/* list */}

                        <div className='space-y-6 mt-8'>
                            <div>
                                <p className='text-xl font-semibold'>1. Modularity: </p>
                                <ol className='space-y-2 mt-4'>
                                    <li>
                                        Nest.js promotes a modular architecture, allowing developers to organize their application's code into modules with clear boundaries and dependencies. Modules encapsulate related functionality, making it easier to maintain and scale applications.
                                    </li>
                                </ol>
                            </div>
                            {/*  */}
                            <div>
                                <p className='text-xl font-semibold'>2. Dependency Injection</p>
                                <ol className='space-y-2 mt-4'>
                                    <li>
                                        Nest.js provides a built-in dependency injection (DI) container that allows developers to inject dependencies into components and modules. DI helps improve code maintainability, testability, and flexibility by decoupling components and making them easier to replace and extend.
                                    </li>
                                </ol>
                            </div>
                            {/*  */}
                            <div>
                                <p className='text-xl font-semibold'>3. Decorators and Metadata:</p>
                                <ol className='space-y-2 mt-4'>
                                    <li>
                                        Nest.js leverages TypeScript decorators and metadata to define controllers, services, middleware, and other components in a concise and declarative manner. Decorators are used to annotate classes and methods with metadata that Nest.js uses to configure and bootstrap the application.
                                        </li>
                                </ol>
                            </div>
                            <div>
                                <p className='text-xl font-semibold'>4. Middleware and Guards: </p>
                                <ol className='space-y-2 mt-4'>
                                    <li>
                                        Nest.js supports middleware and guards, which are similar to Express.js middleware but provide more powerful and flexible capabilities for handling requests and responses, authenticating users, and enforcing access control rules.
                                    </li>
                                
                                </ol>
                            </div>
                            <div>
                                <p className='text-xl font-semibold'>5. Integrated Testing: </p>
                                <ol className='space-y-2 mt-4'>
                                    <li>
                                        Nest.js provides built-in support for testing applications using tools like Jest, making it easy to write and run unit tests, integration tests, and end-to-end tests for Nest.js applications.
                                    </li>
                                
                                </ol>
                            </div>
                            <p>
                                Overall, We can say Nest.js offers a modern and developer-friendly approach to building Node.js applications, with a focus on productivity, maintainability, and scalability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog2;
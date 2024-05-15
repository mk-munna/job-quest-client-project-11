import React from 'react';
import { Helmet } from 'react-helmet-async';
import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Blog1 = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>JobQuest | Blog | What is an access token...</title>
                </Helmet>
            </div>
            <div className='bg-gray-100 dark:bg-[#1f2d33] h-16 flex items-center px-[100px] w-full'>
                <Link to={'/blogs'}><button className='flex items-center gap-3 text-primary'><IoMdArrowBack />Back To Blogs</button></Link>
            </div>

            <div className='max-w-[90%] mx-auto lg:px-8 mb-12 font-Montserrat mt-10'>
                <div className=' lg:w-[900px]'>
                    <div>
                        <h1 className='text-heading font-Montserrat dark:text-heading2 text-4xl font-semibold'>What is an access token and refresh token? How do they work and where should
                            we store them on the client side?</h1>
                        <p className='mt-6'>
                            An access token and a refresh token are commonly used in authentication systems, especially in OAuth 2.0 and similar protocols. Here's an overview of what they are, how they work, and where to store them on the client side:
                        </p>


                        {/* list */}
                    
                        <div className='space-y-6 mt-8'>
                            <div>
                                <p className='text-xl font-semibold'>1. Access Token:</p>
                                <ol className='space-y-2 mt-4'>
                                    <li>
                                        An access token is a credential that represents the authorization of a specific user to access resources on a server. It is usually short-lived (e.g., valid for minutes or hours) and grants access to specific resources on a server.
                                    </li>
                                    <li>
                                        When a user logs in or authenticates with a server, they receive an access token as proof of their identity and authorization level.
                                    </li>
                                    <li>
                                        Access tokens are commonly used in stateless authentication systems, where the server does not maintain session state for each user.
                                    </li>
                                </ol>
                            </div>
                            {/*  */}
                            <div>
                                <p className='text-xl font-semibold'>2. Refresh Token:</p>
                                <ol className='space-y-2 mt-4'>
                                    <li>
                                        A refresh token is a credential used to obtain a new access token after the current access token expires. It is typically long-lived (e.g., valid for days, weeks, or even months).
                                    </li>
                                    <li>
                                        Refresh tokens are used to maintain the user's session and avoid the need for frequent re-authentication.
                                    </li>
                                    <li>
                                        When the access token expires, the client can use the refresh token to request a new access token from the server without requiring the user to log in again.
                                    </li>
                                </ol>
                            </div>
                            {/*  */}
                            <div>
                                <p className='text-xl font-semibold'>3. How They Work:</p>
                                <ol className='space-y-2 mt-4'>
                                    <li>
                                        Initially, when a user logs in, both an access token and a refresh token are issued by the authentication server.
                                    </li>
                                    <li>
                                        The access token is used to authenticate API requests to protected resources on the server. It is sent with each API request in the HTTP headers.
                                    </li>
                                    <li>
                                        When the access token expires, the client can send the refresh token to the server to obtain a new access token. This process is usually done behind the scenes by client-side code.
                                        </li>
                                </ol>
                            </div>
                            <div>
                                <p className='text-xl font-semibold'>4. Where to Store Them on the Client Side:</p>
                                <ol className='space-y-2 mt-4'>
                                    <li>
                                        They are typically stored in memory (e.g., JavaScript variables or browser memory) during the user's session.
                                    </li>
                                    <li>
                                        Refresh tokens, being long-lived and more sensitive, should be stored securely. They are commonly stored in secure HTTP cookies with the HttpOnly and Secure flags set, making them inaccessible to client-side JavaScript and only sent over HTTPS connections.
                                    </li>
                                    <li>
                                        When the access token expires, the client can send the refresh token to the server to obtain a new access token. This process is usually done behind the scenes by client-side code.
                                        </li>
                                    <li>
                                        Alternatively, refresh tokens can be stored in browser storage mechanisms such as localStorage or sessionStorage, but this approach is less secure and may expose the tokens to certain types of attacks (e.g., XSS attacks).
                                        </li>
                                    <li>
                                        It's essential to consider the security implications of where and how tokens are stored on the client side and choose the appropriate storage mechanism based on the security requirements of your application.
                                        </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog1;
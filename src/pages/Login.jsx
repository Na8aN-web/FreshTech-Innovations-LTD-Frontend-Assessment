import React from 'react';
import LoginImg from '../assets/login-image.png';
import Google from '../assets/google.png'
import ArrowLeft from '../assets/leftarrow.png'
import { Link } from 'react-router-dom';
import RememberMeSwitch from '../components/RememberMeSwitch';

const Login = () => {
    return (
        <div className="flex min-h-screen bg-gradient-to-b from-[#ffffff] to-[#ededf6]">
            {/* Left Section with Image */}
            <div className="w-1/3 h-full hidden lg:flex">
                <img src={LoginImg} alt="login image" className="object-cover w-full h-full" />
            </div>

            {/* Right Section with Login Form */}
            <div className="flex items-center justify-center w-full lg:w-2/3 relative">
                <nav className='flex justify-between absolute top-0 w-full px-4 md:px-10 py-2 md:py-6'>
                    <div className='flex items-center font-inter text-[16px] text-[#4169E1] font-semibold'><img src={ArrowLeft} alt="arrow Icon" className=" mr-2" />Home</div>
                    <Link to={'/dashboard'}>
                        <button
                            type="submit"
                            className=" bg-[#4169E1] font-inter py-3 md:py-[17px] px-12 md:px-[50px] text-white font-semibold rounded-[10px] hover:bg-blue-900"
                        >
                            Sign Up
                        </button>
                    </Link>
                </nav>
                <div className='w-full flex justify-center relative p-4 md:p-0 bottom-12 md:bottom-24'>
                    <div className=" rounded-lg w-full md:max-w-[500px]">
                        <h2 className="text-[25px] text-[#4C689E] font-inter font-semibold mb-6 text-center">Login</h2>
                        <button className="flex font-brFirma items-center justify-center w-full bg-white text-[#2B3B5A] py-[12px] md:py-[19px] px-[12px] md:px-[52px] text-[20px] rounded-[12px] border-[1px] border-gray-300 ">
                            <img src={Google} alt="Google Icon" className="w-5 h-5 mr-2" />
                            <div>Login with Google</div>
                        </button>
                        <div style={{ display: 'flex', alignItems: 'center' }} className='py-6'>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#A9BADA' }} />
                            <div style={{ padding: '0 10px' }} className='font-brFirma text-[13px] font-normal'>Or Continue with</div>
                            <div style={{ flex: 1, height: '1px', backgroundColor: '#A9BADA' }} />
                        </div>

                        <form className='bg-white py-3 md:py-[40px] px-4 md:px-[42px] rounded-[12px] border-[1px] border-gray-300'>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-[#4C689E] font-inter text-[16px] font-normal">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-[8px] text-[#2B3B5A] border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-[#4C689E] font-inter text-[16px] font-normal">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex flex-col gap-8 md:gap-0 md:flex-row items-center justify-between my-8">
                                <div className="">
                                    <RememberMeSwitch />
                                </div>
                                <a href="#" className="text-[#EE5D50] text-[14px] font-inter hover:underline">Recover Password</a>
                            </div>
                            <Link to={'/dashboard'}>
                                <button
                                    type="submit"
                                    className="w-full bg-[#4169E1] text-white py-[12px] font-semibold rounded-[10px] hover:bg-blue-900"
                                >
                                    Log in
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

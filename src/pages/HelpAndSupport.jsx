import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Faq from '../assets/New folder/1.png';
import Whatsapp from '../assets/New folder/2.png';
import Report from '../assets/New folder/3.png';
import Chat from '../assets/New folder/4.png';
import Phone from '../assets/New folder/5.png';
import Review from '../assets/New folder/6.png';
import Coming from '../assets/coming.png'
import Right from '../assets/Icon.png'

const HelpAndSupport = () => {
    return (
        <DashboardLayout>
            <div className='flex flex-col lg:flex-row justify-end lg:justify-between items-center '>
                <h1 className="text-[13px] md:text-[20px] font-inter font-medium">Help and Support</h1>
                <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-2'>
                    <h1 className='text-[13px] md:text-[16px] font-inter font-semibold text-[#4169E1]'>Upgrade To Merchant</h1>
                    <div className='flex flex-row'>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EFF3FB] border border-[#D7E1F4] hover:bg-black">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.29309 13.5233C6.80262 13.9092 7.47547 14.1439 8.21309 14.1439C8.9507 14.1439 9.62355 13.9092 10.1331 13.5233M2.8186 11.5373C2.51504 11.5373 2.3455 11.0852 2.52912 10.834C2.95521 10.251 3.36646 9.39607 3.36646 8.36651L3.38404 6.87467C3.38404 4.10291 5.54608 1.85596 8.21309 1.85596C10.9194 1.85596 13.1133 4.13601 13.1133 6.94859L13.0957 8.36651C13.0957 9.40315 13.4928 10.2628 13.9015 10.8459C14.078 11.0978 13.9081 11.5373 13.6083 11.5373H2.8186Z"
                                    stroke="#4169E1"
                                    strokeWidth="1.27999"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EFF3FB] border border-[#D7E1F4] hover:bg-black">
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.58918 3.98783C9.58918 5.71752 8.49072 6.98051 7.1357 6.98051C5.78068 6.98051 4.68222 5.71752 4.68222 3.98783C4.68222 2.25814 5.78068 0.855957 7.1357 0.855957C8.49072 0.855957 9.58918 2.25814 9.58918 3.98783Z"
                                    stroke="#4169E1"
                                    strokeWidth="1.27999"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M2.13622 9.48601C2.31209 9.16529 2.63487 8.96807 2.98392 8.96807H11.0162C11.3653 8.96807 11.688 9.16529 11.8639 9.48601L13.0089 11.5739C13.3905 12.2699 12.9186 13.1439 12.1612 13.1439H1.83896C1.08153 13.1439 0.609612 12.2699 0.991259 11.5739L2.13622 9.48601Z"
                                    stroke="#4169E1"
                                    strokeWidth="1.27999"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {/* Grid Container */}
            <div className='grid grid-cols-1 md:grid-cols-2 mt-8 gap-4 w-full md:w-2/3'>
                <div className='flex items-center gap-2 border-[1px] border-gray-300 h-[90px] p-4 rounded-[24px]'>
                    <img src={Faq} alt="FAQ" className="" />
                    <div className='flex justify-between flex-col gap-2'>
                        <h1 className='text-[#6882B6] text-[16px] font-semibold'>Frequently Asked Questions</h1>
                        <h1 className='flex items-center gap-2 text-[#4169E1] font-semibold text-[16px]'>See FAQ <img src={Right} alt='right' /></h1>
                    </div>
                </div>
                <div className='flex items-center gap-2 border-[1px] border-gray-300 h-[90px] p-4 rounded-[24px]'>
                    <img src={Chat} alt="FAQ" className="" />
                    <div className='flex justify-between flex-col gap-2'>
                        <h1 className='text-[#6882B6] text-[16px] font-semibold'>Live Chat</h1>
                        <h1 className='flex items-center gap-2 text-[#4169E1] font-semibold text-[16px]'>Chat Now<img src={Right} alt='right' /></h1>
                    </div>
                </div>
                <div className='flex items-center gap-2 border-[1px] border-gray-300 h-[90px] p-4 rounded-[24px]'>
                    <img src={Whatsapp} alt="FAQ" className="" />
                    <div className='flex justify-between flex-col gap-2'>
                        <h1 className='text-[#6882B6] text-[16px] font-semibold'>Whatsapp</h1>
                        <h1 className='flex items-center gap-2 text-[#4169E1] font-semibold text-[16px]'>Drop a message <img src={Right} alt='right' /></h1>
                    </div>
                </div>
                <div className='flex items-center gap-2 border-[1px] border-gray-300 h-[90px] p-4 rounded-[24px]'>
                    <img src={Phone} alt="report" className="" />
                    <div className='flex justify-between flex-col gap-2'>
                        <h1 className='text-[#6882B6] text-[16px] font-semibold'>Phone Call</h1>
                        <h1 className='flex items-center gap-2 text-[#4169E1] font-semibold text-[16px]'>Call Us <img src={Right} alt='right' /></h1>
                    </div>
                </div>

                <div className='flex items-center gap-2 border-[1px] border-gray-300 h-[90px] p-4 rounded-[24px]'>
                    <img src={Report} alt="report" className="" />
                    <div className='flex justify-between flex-col gap-2'>
                        <h1 className='text-[#6882B6] text-[16px] font-semibold'>Report Our Support</h1>
                        <h1 className='flex items-center gap-2 text-[#4169E1] font-semibold text-[16px]'>Not Satisfied? <img src={Right} alt='right' /></h1>
                    </div>
                </div>

                <div className='flex items-center gap-2 border-[1px] border-gray-300 h-[90px] p-4 rounded-[24px]'>
                    <img src={Review} alt="chat" className="" />
                    <div className='flex justify-between flex-col gap-2'>
                        <h1 className='text-[#6882B6] text-[16px] font-semibold'>Review Our App</h1>
                        <h1><img src={Coming} alt='coming' /> </h1>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default HelpAndSupport;

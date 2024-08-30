import React, { useState, useEffect, useRef } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Etisalat from '../assets/Networks.png';


function AirtimeToCash() {
    const [phoneNumber, setPhoneNumber] = useState('08094562627');
    const [amount, setAmount] = useState(5000);
    const [airtimeSharePin, setAirtimeSharePin] = useState('3546576433');

    const [network, setNetwork] = useState(""); 
    const [showDropdown, setShowDropdown] = useState(false); 

 
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false); 
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ network, phoneNumber, amount, airtimeSharePin });
    };

    return (
        <DashboardLayout>
            <div className='flex flex-col lg:flex-row justify-end lg:justify-between items-center '>
                <h1 className="text-[13px] md:text-[20px] font-inter font-medium">Airtime to Cash</h1>
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
            <div className='w-full flex justify-center mt-12 gap-2'>
                <div className="font-inter text-[14px] font-semibold text-[#4169E1] border-b-[6px] flex justify-center w-[100px] md:w-[160px] border-[#4169E1]">
                    File Info
                </div>
                <div className='font-inter text-[14px] font-semibold text-[#D7E1F4] border-b-[6px] w-[100px] md:w-[160px] flex justify-center border-[#D7E1F4]'>Make Payment</div>
                <div className='font-inter text-[14px] font-semibold text-[#D7E1F4] border-b-[6px] w-[100px] md:w-[160px] flex justify-center border-[#D7E1F4]'>View Reciept</div>
            </div>
            <div className="mx-auto bg-[#F7F9FD] p-6 rounded-lg border-[1px] border-gray-300 w-full md:w-[500px] mt-12">
                <h2 className="text-[20px] font-semibold text-center font-inter text-[#6882B6] mb-4">Airtime to Cash</h2>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row justify-between ">
                        <div>
                            <label className="block text-[#6882B6] font-normal font-inter mb-2">
                                Select Network
                            </label>
                            <div className="relative w-full md:w-[220px]" ref={dropdownRef}>
                                <button
                                    type="button"
                                    className="w-full border bg-white font-inter text-[14px] text-[#6882B6] font-semibold border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 flex justify-between items-center"
                                    onClick={() => setShowDropdown(!showDropdown)} 
                                >
                                    {network ? (
                                        <span className="flex items-center">
                                            <img
                                                src={network === "Etisalat" ? Etisalat : ""}
                                                alt={network}
                                                className="inline-block w-5 h-5 mr-2"
                                            />
                                            {network}
                                        </span>
                                    ) : (
                                        "Select Network"
                                    )}
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transform transition-transform ${showDropdown ? 'rotate-180' : ''}`}>
                                        <path d="M10.8 1.5999L6.00005 6.3999L1.20005 1.5999" stroke='#0040F7' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </button>
                                {showDropdown && (
                                    <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                        <li
                                            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                                            onClick={() => {
                                                setNetwork("Etisalat"); 
                                                setShowDropdown(false);
                                            }}
                                        >
                                            <img
                                                src={Etisalat}
                                                alt="Etisalat"
                                                className="inline-block w-5 h-5 mr-2"
                                            />
                                            Etisalat
                                        </li>
                                        {/* Add more options here */}
                                    </ul>
                                )}
                            </div>
                        </div>

                        <div className="mb-2 md:mt-0 mt-2">
                            <label className="block text-[#6882B6] font-normal font-inter mb-2">Phone Number</label>
                            <input
                                type="text"
                                className="w-full md:w-[220px] border font-inter text-[14px] text-[#6882B6] font-semibold border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                    </div>



                    <div className="mb-2">
                        <label className="block text-[#6882B6] font-normal font-inter mb-2">Amount</label>
                        <input
                            type="number"
                            className="w-full border border-gray-300 font-inter text-[14px] font-semibold text-[#6882B6] rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block text-[#6882B6] font-normal font-inter mb-2">Airtime Share Pin</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 font-inter text-[14px] text-[#6882B6] font-semibold rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                            value={airtimeSharePin}
                            onChange={(e) => setAirtimeSharePin(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#4169E1] hover:font-medium py-3 px-8 w-full font-inter text-[#F7F9FD] rounded-[10px] mt-12"
                    >
                        Proceed
                    </button>
                </form>
            </div>
        </DashboardLayout>

    );
}

export default AirtimeToCash;
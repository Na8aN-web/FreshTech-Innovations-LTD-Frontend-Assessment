import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Card from '../assets/card.png';
import Copy from '../assets/copy.png';
import Share from '../assets/share.png';
import Edit from '../assets/edit.png';
import Cashout from '../assets/cashout.png';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className='flex flex-col lg:flex-row justify-end lg:justify-between items-center '>
        <h1 className="text-[13px] md:text-[20px] font-inter font-medium">Welcome, Lawal Wahab</h1>
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
      <div className='flex flex-col md:flex-row mx-auto mt-8 justify-left gap-12 w-full'>
        <div className="flex flex-col gap-4">
          <div className="bg-white flex justify-between items-center p-6 rounded-[24px] w-full md:w-[500px] border-[1px] border-gray-300">
            <div>
              <p className="text-gray-700 font-brFirma">Wallet Balance</p>
              <p className="text-[24px] md:text-[36px] text-[#3C517C] font-bold font-brFirma">₦3000</p>
            </div>
            <button
              type="submit"
              className=" bg-[#4169E1] font-brFirma py-[8px] md:py-[12px] px-[12px] md:px-[50px] text-[16px] text-white font-medium rounded-[10px] hover:bg-blue-900"
            >
              Fund Wallet
            </button>
          </div>
          {/* Referral */}
          <div className="bg-white p-6 rounded-[24px] border-[1px] border-gray-300 w-full md:w-[500px]">
            <p className="text-gray-700 text-[16px] font-brFirma">Referral</p>
            <p className="text-gray-500 text-[16px] font-brFirma my-2">
              Referral Code: <strong>18/52/WLM201</strong>
            </p>
            <div className="flex items-center gap-3">
              <button className="mt-2 flex font-inter font-semibold text-[16px] items-center gap-1 rounded text-blue-500">
                <img src={Copy} alt="copy" />
                Copy
              </button>
              {/* Updated Edit button to use Link */}
              <Link to="/profile" className="mt-2 flex font-inter font-semibold text-[16px] items-center gap-1 rounded text-blue-500">
                <img src={Edit} alt="edit" />
                Edit
              </Link>
              <button className="mt-2 flex font-inter font-semibold text-[16px] items-center gap-1 rounded text-blue-500">
                <img src={Share} alt="share" />
                Share
              </button>
            </div>
          </div>
          {/* Notification */}
          <div className="bg-white p-6 rounded-[24px] border-[1px] border-gray-300 w-full md:w-[500px]">
            <div className='flex justify-between gap-4 md:gap-2'>
              <div className='font-brFirma'>
                <p className="text-gray-700 text-[16px]">Total referals made</p>
                <p className="text-gray-700 text-[24px] font-semibold">0</p>
              </div>
              <div className='font-brFirma'>
                <p className="text-gray-700 text-[16px]">Current wallet Bonus</p>
                <p className="text-gray-700 text-[24px] font-semibold">0.00</p>
              </div>
            </div>
            <div className='flex items-center mt-4 font-semibold text-[16px] font-brFirma text-blue-500'>
              <img src={Cashout} alt='cashout' className='mr-1' /> Cashout
            </div>

          </div>
        </div>

        <div>
          <img src={Card} alt='card' />
        </div>

      </div>
    </DashboardLayout>
  );
};

export default Dashboard;


import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Upload from '../assets/upload.png'

const EditProfile = () => {
  const [toggleStatus, setToggleStatus] = useState(true);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [currentPin, setCurrentPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event
  ) => {
    setConfirmPin(event.target.value);
  };


  const handleCurrentPinChange = (event) => {
    setCurrentPin(event.target.value);
  };

  const handleNewPinChange = (event) => {
    setNewPin(event.target.value);
  };

  const handleConfirmPinChange = (
    event
  ) => {
    setConfirmPin(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Signup submitted');
  };

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
          <div className="bg-white flex justify-between">
            <img src={Upload} alt='upload' width={416} />
          </div>
          {/* Referral */}
          <div className="bg-white p-6 rounded-[24px] border-[1px] border-gray-300 font-inter text-[16px] w-full md:w-[416px] text-[#4C689E]">
            <div className='flex items-center justify-between pb-2'>
              <p>Name</p>
              <p className='font-semibold'>Lawal Wahab Babatunde</p>
            </div>
            <div className='flex items-center justify-between py-2'>
              <p>Email</p>
              <p className='font-semibold'>wabdotmail@gmail.com</p>
            </div>
            <div className='flex items-center justify-between py-2'>
              <p>Phone Number</p>
              <p className='font-semibold'>0906 856 2949</p>
            </div>
            <div className='flex items-center justify-between py-2'>
              <p>Account Status</p>
              <p className='font-semibold text-green-500'>Active</p>
            </div>
            <div className='flex items-center justify-between pt-2'>
              <p>Referral Link</p>
              <p className='font-semibold'>www.subsum.com/tre/wd...</p>
            </div>
            <div className='flex items-center justify-end'>
              <p className='font-semibold'>Copy</p>
            </div>
            <div className='flex items-center justify-start'>
              <p className='font-semibold'>Edit Details</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[432px]">
          <label
            htmlFor="Toggle4"
            className="inline-flex items-center  gap-4 cursor-pointer dark:bg-white border-2 dark:text-gray-800 mb-5 p-1 w-full rounded-3xl"
          >
            <input id="Toggle4" type="checkbox" className="hidden peer" />
            {/* Password Tab */}
            <span
              onClick={() => setToggleStatus(true)}
              className={`px-4 py-2 text-center text-[14px] w-full font-semibold font-inter rounded-3xl border-[1px] border-gray-300 ${toggleStatus ? "bg-[#EFF5FB] text-[#3C517C]" : "text-[#A9BADA] bg-white"
                } ${toggleStatus ? "dark:text-white" : "peer-checked:dark:text-black"}`}
            >
              Change Password
            </span>
            {/* Pin Tab */}
            <span
              onClick={() => setToggleStatus(false)}
              className={`px-4 py-2 text-center text-[14px] w-full font-semibold font-inter rounded-3xl border-[1px] border-gray-300 ${!toggleStatus ? "bg-[#EFF5FB] text-[#3C517C]" : "text-[#A9BADA] bg-white"
                } ${!toggleStatus ? "dark:text-white" : "peer-checked:dark:text-black"}`}
            >
              Change Pin
            </span>
          </label>

          {toggleStatus ? (
            <div className='border-[1px] border-gray-300 rounded-[24px] p-6'>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="block text-[#4C689E] font-inter text-[16px] font-normal">Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  placeholder="Enter Current Password"
                  onChange={handleCurrentPasswordChange}
                  className="w-full border-2 p-3 font-inter text-[#869DCB] text-[16px] mb-4 rounded-[4px]"
                />
                <br />
                <label htmlFor="email" className="block text-[#4C689E] font-inter text-[16px] font-normal">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  placeholder="Enter New Password"
                  onChange={handleNewPasswordChange}
                  className="w-full border-2 p-3 font-inter text-[#869DCB] text-[16px] mb-4 rounded-[4px]"
                />
                <br />
                <label htmlFor="email" className="block text-[#4C689E] font-inter text-[16px] font-normal">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  placeholder="Enter New Password"
                  onChange={handleConfirmPasswordChange}
                  className="w-full border-2 p-3 font-inter text-[#869DCB] text-[16px] mb-4 rounded-[4px]"
                />
                <button
                  type="submit"
                  className="bg-[#4169E1] hover:font-medium py-3 px-8 w-full font-inter text-[#F7F9FD] rounded-[10px] mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <div className='border-[1px] border-gray-300 rounded-[24px] p-6'>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="block text-[#4C689E] font-inter text-[16px] font-normal">Current Pin</label>
                <input
                  type="password"
                  value={confirmPin}
                  placeholder="Enter Current Pin"
                  onChange={handleCurrentPinChange}
                  className="w-full border-2 p-3 font-inter text-[#869DCB] text-[16px] mb-4 rounded-[4px]"
                />
                <br />
                <label htmlFor="email" className="block text-[#4C689E] font-inter text-[16px] font-normal">New Pin</label>
                <input
                  type="password"
                  value={newPin}
                  placeholder="Enter New Pin"
                  onChange={handleNewPinChange}
                  className="w-full border-2 p-3 font-inter text-[#869DCB] text-[16px] mb-4 rounded-[4px]"
                />
                <br />
                <label htmlFor="email" className="block text-[#4C689E] font-inter text-[16px] font-normal">Confirm Pin</label>
                <input
                  type="password"
                  value={confirmPin}
                  placeholder="Enter New Password"
                  onChange={handleConfirmPinChange}
                  className="w-full border-2 p-3 font-inter text-[#869DCB] text-[16px] mb-4 rounded-[4px]"
                />
                <button
                  type="submit"
                  className="bg-[#4169E1] hover:font-medium py-3 px-8 w-full font-inter text-[#F7F9FD] rounded-[10px] mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>

      </div>
    </DashboardLayout>
  );
};

export default EditProfile;

import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Filter from '../assets/filter.png';
import Init from '../assets/init.png';
import Success from '../assets/success.png';
import Failed from '../assets/failed.png';

const transactions = [
    {
        service: "MTN Airtime VTU",
        number: "09068562949",
        amount: "₦100.00",
        totalAmount: "₦100.00",
        status: "Initiated",
        paymentMethod: "Transfer",
        transactionNo: "17045621868053036938179613",
        date: "6th January, 2024, 06:29PM",
    },
    {
        service: "Airtel DATA VTU",
        amount: "₦2000.00",
        number: "09068562949",
        totalAmount: "₦100.00",
        status: "Successful",
        paymentMethod: "Wallet",
        transactionNo: "17045621868053036938179613",
        date: "6th January, 2024, 06:29PM",
    },
    {
        service: "Airtel DATA VTU",
        amount: "₦2000.00",
        number: "09068562949",
        totalAmount: "₦100.00",
        status: "Successful",
        paymentMethod: "Wallet",
        transactionNo: "17045621868053036938179613",
        date: "6th January, 2024, 06:29PM",
    },
    {
        service: "Airtel DATA VTU",
        amount: "₦2000.00",
        number: "09068562949",
        totalAmount: "₦100.00",
        status: "Successful",
        paymentMethod: "Card",
        transactionNo: "17045621868053036938179613",
        date: "6th January, 2024, 06:29PM",
    },
    {
        service: "Airtel DATA VTU",
        amount: "₦2000.00",
        number: "09068562949",
        totalAmount: "₦100.00",
        status: "Failed",
        paymentMethod: "Wallet",
        transactionNo: "17045621868053036938179613",
        date: "6th January, 2024, 06:29PM",
    },
    {
        service: "Airtel DATA VTU",
        amount: "₦2000.00",
        number: "09068562949",
        totalAmount: "₦100.00",
        status: "Failed",
        paymentMethod: "Wallet",
        transactionNo: "17045621868053036938179613",
        date: "6th January, 2024, 06:29PM",
    },
    {
        service: "Airtel DATA VTU",
        amount: "₦2000.00",
        number: "09068562949",
        totalAmount: "₦100.00",
        status: "Failed",
        paymentMethod: "Wallet",
        transactionNo: "17045621868053036938179613",
        date: "6th January, 2024, 06:29PM",
    },
    {
        service: "Airtel DATA VTU",
        amount: "₦2000.00",
        number: "09068562949",
        totalAmount: "₦100.00",
        status: "Initiated",
        paymentMethod: "Transfer",
        transactionNo: "17045621868053036938179613",
        date: "6th January, 2024, 06:29PM",
    },
    {
        service: "Airtel DATA VTU",
        amount: "₦2000.00",
        number: "09068562949",
        totalAmount: "₦100.00",
        status: "Failed",
        paymentMethod: "Wallet",
        transactionNo: "17045621868053036938179613",
        date: "6th January, 2024, 06:29PM",
    },
    {
        service: "Airtel DATA VTU",
        amount: "₦2000.00",
        number: "09068562949",
        totalAmount: "₦100.00",
        status: "Successful",
        paymentMethod: "Card Payment",
        transactionNo: "17045621868053036938179613",
        date: "6th January, 2024, 06:29PM",
    },
    {
        service: "Airtel DATA VTU",
        amount: "₦2000.00",
        number: "09068562949",
        totalAmount: "₦100.00",
        status: "Failed",
        paymentMethod: "Wallet",
        transactionNo: "17045621868053036938179613",
        date: "6th January, 2024, 06:29PM",
    },
    {
        service: "Airtel DATA VTU",
        amount: "₦2000.00",
        number: "09068562949",
        totalAmount: "₦100.00",
        status: "Failed",
        paymentMethod: "Wallet",
        transactionNo: "17045621868053036938179613",
        date: "6th January, 2024, 06:29PM",
    },
    {
        service: "Airtel DATA VTU",
        amount: "₦2000.00",
        number: "09068562949",
        totalAmount: "₦100.00",
        status: "Failed",
        paymentMethod: "Transfer",
        transactionNo: "17045621868053036938179613",
        date: "6th January, 2024, 06:29PM",
    },

    {
        service: "Airtel DATA VTU",
        amount: "₦2000.00",
        number: "09068562949",
        totalAmount: "₦100.00",
        status: "Initiated",
        paymentMethod: "Card Payment",
        transactionNo: "17045621868053036938179613",
        date: "6th January, 2024, 06:29PM",
    },
];

const TransactionHistory = () => {
    return (
        <DashboardLayout>
             <div className='flex flex-col lg:flex-row justify-end lg:justify-between items-center '>
        <h1 className="text-[13px] md:text-[20px] font-inter font-medium">Transaction History</h1>
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

            <div className="overflow-x-auto">
                <button className="flex items-center text-[16px] font-inter my-4 md:my-8 bg-[#F7F9FD] border-[1px] border-gray-300 text-[#6882B6] p-2 rounded-[10px] w-[190px] gap-2">
                    <img src={Filter} alt="filter" />
                    Filter
                </button>
                <table className="min-w-full bg-white mt-8 overflow-x-auto">
                    <thead>
                        <tr className="text-[#6882B6] text-[14px]">
                            <th className="py-2 px-4  text-left font-medium">Service</th>
                            <th className="py-2 px-4  text-left font-medium">Amount</th>
                            <th className="py-2 px-4 text-left font-medium">Total Amount</th>
                            <th className="py-2 px-4 text-left font-medium">Status</th>
                            <th className="py-2 px-4 text-left font-medium">Payment Method</th>
                            <th className="py-2 px-4 text-left font-medium">Transaction No</th>
                            <th className="py-2 px-4 text-left font-medium">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="border-b border-[#D7E1F4] py-2 px-4">
                                    <div className="flex items-center font-inter text-[#4C689E] text-[10px] md:text-[12px]">
                                        <div>
                                            <img
                                                src={
                                                    transaction.status === "Initiated"
                                                        ? Init
                                                        : transaction.status === "Successful"
                                                            ? Success
                                                            : Failed
                                                }
                                                alt={transaction.status}
                                                className=" mr-2"
                                            />
                                        </div>
                                        <div className="flex flex-col ">
                                            <span className="font-semibold">{transaction.service}</span>
                                            <span className="font-medium text-[11px] text-[#6B7B94]">{transaction.number}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b border-[#D7E1F4] font-inter text-[#4C689E] font-semibold text-[10px] md:text-[12px]">{transaction.amount}</td>
                                <td className="py-2 px-4 border-b border-[#D7E1F4] font-inter text-[#4C689E] font-semibold text-[10px] md:text-[12px]">{transaction.totalAmount}</td>
                                <td
                                    className={`py-2 px-4 border-b border-[#D7E1F4]  font-inter font-semibold text-[10px] md:text-[12px] ${transaction.status === "Successful"
                                        ? "text-green-500"
                                        : transaction.status === "Failed"
                                            ? "text-red-500"
                                            : "text-yellow-500"
                                        }`}
                                >
                                    {transaction.status}
                                </td>
                                <td className="py-2 px-4 border-b border-[#D7E1F4] font-inter text-[#4C689E] font-semibold text-[10px] md:text-[12px]">{transaction.paymentMethod}</td>
                                <td className="py-2 px-4 border-b border-[#D7E1F4] ">
                                    <div className="font-inter text-[#4C689E] text-[10px] md:text-[12px] flex flex-col">
                                        <span className="font-semibold">{transaction.transactionNo}</span>
                                        <span className="font-medium text-[11px] text-[#6B7B94]">{transaction.date}</span>
                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b border-[#D7E1F4] font-inter text-[#4C689E] ">
                                    <button className=" bg-[#EFF3FB] text-[#4169E1] text-[16px] font-semibold py-1 px-3 rounded">
                                        Open
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
};

export default TransactionHistory;

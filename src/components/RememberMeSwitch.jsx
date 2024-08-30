import { useState } from 'react';

const RememberMeSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center space-x-3">

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className="sr-only"
        />
        <div
          className={`w-11 h-6 bg-gray-300 rounded-full shadow-inner ${isChecked ? 'bg-blue-600' : 'bg-gray-300'
            }`}
        />
        <div
          className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow ${isChecked ? 'transform translate-x-5' : 'transform translate-x-0'
            } transition-transform`}
        />
        <span className="text-[#4C689E] font-inter text-[14px] ml-2">Remember me</span>
      </label>
    </div>
  );
};

export default RememberMeSwitch;

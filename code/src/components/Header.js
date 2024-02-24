import React from 'react';
import { useNavigate } from 'react-router-dom';

import profile from '../assets/profile.png';
const Header = () => {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    navigate('/');
  };
  return (
    <div className="flex justify-end">
      <div>
        <img className="w-14 my-4 " src={profile} />
      </div>
      <button
        className=" bg-[#121e92] py-2 px-6 my-6 ml-4 mr-10 cursor-pointer rounded-md text-white hover:bg-blue-800"
        onClick={handleLogoutClick}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;

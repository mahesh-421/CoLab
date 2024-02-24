import { useNavigate } from 'react-router';
import logo from '../assets/logo.png';
import { useState } from 'react';

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpForm, setSignUpForm] = useState(true);

  const handleHomePage = () => {
    navigate('/body');
  };

  const toggleSignUp = () => {
    setSignUpForm(!signUpForm);
  };
  return (
    <div className="bg-gradient-to-b from-[#4a536b] to-[#a8c66c] h-full w-full overflow-y-hidden ">
      <div className="bg-gray-400 rounded-full w-16 my-2 mx-6">
        <img className="p-3 " src={logo} alt="LOGO" />
      </div>
      <div>
        <button
          lassName="bg-blue-800 py-2 px-10 cursor-pointer rounded-md text-white hover:bg-[#121e92]"
          onClick={handleHomePage}
        >
          Home Page
        </button>
      </div>
      <div className="flex justify-center h-screen mb-40">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute top-52 w-[520px] h-[400px]  bg-black text-black bg-opacity-40 flex flex-col items-center justify-center text-white"
        >
          {signUpForm && (
            <input
              className="w-72 border-white border  p-2 my-4 rounded-md"
              type="text"
              placeholder="Name"
            ></input>
          )}
          <input
            className="w-72 border-white border p-2 my-4 rounded-md"
            type="text"
            placeholder="Email Address"
          ></input>
          <input
            className="w-72 border-white border p-2 my-4 rounded-md"
            type="password"
            placeholder="Password"
          ></input>
          <button
            className="bg-blue-800 py-2 px-10 cursor-pointer rounded-md text-white hover:bg-[#121e92]"
            onClick={toggleSignUp}
          >
            {signUpForm ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

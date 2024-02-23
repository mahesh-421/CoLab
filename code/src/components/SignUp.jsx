import OpenAI from 'openai';

import { useEffect, useRef } from 'react';

import logo from '../assets/logo.png';

const SignUp = () => {
  const searchText = useRef(null);
  const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true,
  });

  //Fetch Data from TMWB API and update store
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT API and get Movie Results
    // const gptQuery =
    //   'Act as a expert answer in consize manner' + searchText.current.value;
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: gptQuery }],
    //   model: 'gpt-3.5-turbo',
    // });
    // console.log(gptResults.choices);
  };
  useEffect(() => {
    handleGptSearchClick();
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#4a536b] to-[#a8c66c] h-full w-full overflow-y-hidden ">
      <div className="bg-gray-400 rounded-full w-16">
        <img className="p-3" src={logo} alt="LOGO" />
      </div>
      <div className="flex justify-center h-screen mb-40">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute top-52 w-[520px] h-[400px]  bg-black text-black bg-opacity-40 flex flex-col items-center justify-center text-white"
        >
          <input
            className="w-72 border-white border  p-2 my-4 rounded-md"
            ref={searchText}
            type="text"
            placeholder="Name"
          ></input>
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
            onClick={handleGptSearchClick}
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

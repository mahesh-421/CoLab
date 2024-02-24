import videoCall from '../assets/video_call.svg';
import compiler from '../assets/compiler.png';
import gpt from '../assets/gpt.png';
import audio from '../assets/audio.png';

import Header from './Header';

const Body = () => {
  return (
    <div className="bg-gradient-to-b from-[#4a536b] to-[#a8c66c] ">
      <Header />
      <div className="mt-52 h-screen w-full overflow-y-hidden flex justify-center">
        <div className=" w-52 h-52 mx-10 bg-slate-50 flex justify-center border-8 border-[#4a536b] rounded-3xl   hover:border-gray-400 hover:animate-pulse">
          <img className="w-36 p-1.5" src={videoCall} alt="Video Call" />
        </div>
        <div className="w-52 h-52 mx-10 p-2 bg-slate-50 flex justify-center flex-wrap border-8 border-[#4a536b] rounded-3xl  hover:border-gray-400 hover:animate-pulse">
          <img className="w-20 h-20 mx-5" src={compiler} />
          <div className="flex">
            <img className="w-20 h-20" src={gpt} />
            <img className="w-20 h-20 " src={audio} alt="CoLab" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

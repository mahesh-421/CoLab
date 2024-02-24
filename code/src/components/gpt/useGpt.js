import OpenAI from 'openai';
import { useEffect } from 'react';

const useGpt = () => {
  const openai = new OpenAI({
    apiKey: '',
    dangerouslyAllowBrowser: true,
  });

  //   //Fetch Data from TMWB API and update store
  //   const handleGptSearchClick = async () => {
  //     // Make an API call to GPT API and get Movie Results
  //     const gptQuery =
  //       'Act as a expert answer in consize manner' + searchText.current.value;
  //     const gptResults = await openai.chat.completions.create({
  //       messages: [{ role: 'user', content: gptQuery }],
  //       model: 'gpt-3.5-turbo',
  //     });
  //     console.log(gptResults.choices);
  //   };
  //   useEffect(() => {
  //     handleGptSearchClick();
  //   }, []);
};

export default useGpt;

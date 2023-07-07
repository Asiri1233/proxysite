"use client"
import { useState, useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const GetProxies = () => {
  const [proxies, setProxies] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const textareaRef = useRef();
  const [proxyCount, setProxyCount] = useState(0);

  const generateProxies = async () => {
    if (isGenerating) return; // Prevent generating proxies while already generating
    setIsGenerating(true);

    const response = await axios.get(
      'https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all'
    );
    setProxies(response.data);
    setProxyCount(response.data.split('\n').length);

  };

  const handleCopyToClipboard = () => {
    textareaRef.current.select();
    document.execCommand('copy');
    toast.success('Copied to clipboard!');
  };

  return (
    <div className="w-full h-[100%] flex-col">
      <div className="w-[100%] flex flex-row justify-center"></div>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <textarea
            readOnly
            ref={textareaRef}
            value={proxies}
            rows={20}
            className="outline-none border bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md border-white shadow-md rounded placeholder:text-white md:min-w-[50rem] sm:min-w-[40rem] min-w-[20rem] text-gray-300 sm:w-full md:w-auto"
          ></textarea>
          <div className="flex items-center gap-7 mt-2">
            <button
              onClick={handleCopyToClipboard}
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Copy
            </button>
            <button
              onClick={generateProxies}
              disabled={isGenerating}
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              {isGenerating ? 'Generated' : 'Generate Proxies'}
            </button>
            <p className='text-white'>You Have Generated {proxyCount} HTTP Proxies Please wait 3 minutes before generating again</p>
          </div>
          <p className="text-white text-center font-semibold border border-dotted outline-none bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md border-white shadow-md rounded">
            ✨ARE YOU TIRED OF FALLING TO <span className="animate-pulse text-red-400">SCAMS?</span> <br /> 🛑 LOOK NO FURTHER! 👀 DISCOVER THE MOST VOUCHED ✅ AND THE BEST SHOPS <br /> 💎When you shop through PixelMP, you can enjoy a 30% discount at various participating stores. <br /> Don't forget to check the shop descriptions for discount codes. Visit 💎<a href="https://pixelmp.store/" target="_blank" rel="noopener noreferrer">https://pixelmp.store/</a>💎
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetProxies;

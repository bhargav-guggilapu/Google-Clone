import React from "react";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "./Footer";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <img
            loading="lazy"
            className="h-10 w-10 rounded-full cursor-pointer object-cover transition duration-150 transform hover:scale-110"
            src="https://images.unsplash.com/photo-1667788383721-8fa5975e363b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            alt="profile"
          />
        </div>
      </header>
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="logo"
          className="h-24"
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl transition duration-150">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5 text-gray-500 cursor-pointer" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:flex-row sm:space-x-4 sm:space-y-0">
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
        <div className="flex mt-6 items-center justify-center">
          <p className="pr-1 text-sm">Google offered in:</p>
          <div className="flex flex-wrap">
            <p className="anchor">हिन्दी</p>
            <p className="anchor">বাংলা</p>
            <p className="anchor">తెలుగు</p>
            <p className="anchor">தமிழ்</p>
            <p className="anchor">ગુજરાતી</p>
            <p className="anchor">ಕನ್ನಡ</p>
            <p className="anchor">മലയാളം</p>
            <p className="anchor">ਪੰਜਾਬੀ</p>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Home;

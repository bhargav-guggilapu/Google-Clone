import React, { useState } from "react";
import { MicrophoneIcon, ViewGridIcon, XIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

function Home() {
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();

  const onSearch = (e) => {
    e.preventDefault();
    if (!searchValue) return;
    history.push(`/tooble/search/${searchValue}/1`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <a
            className="link"
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer"
          >
            Home
          </a>
          <a
            className="link"
            href="https://chrome.google.com/webstore/category/extensions"
            target="_blank"
            rel="noreferrer"
          >
            Store
          </a>
        </div>
        <div className="flex space-x-4 items-center">
          <a
            className="link"
            href="https://mail.google.com/mail/?authuser=0&ogbl"
            target="_blank"
            rel="noreferrer"
          >
            Gmail
          </a>
          <a
            className="link"
            href="https://www.google.co.in/imghp?hl=en&authuser=0&ogbl"
            target="_blank"
            rel="noreferrer"
          >
            Images
          </a>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <img
            loading="lazy"
            className="h-10 w-10 rounded-full cursor-pointer object-cover transition duration-150 transform hover:scale-110"
            src="https://images.unsplash.com/photo-1667788383721-8fa5975e363b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            alt="profile"
          />
        </div>
      </header>
      <form className="flex flex-col items-center justify-center mb-5 flex-grow flex-1 w-4/5">
        <img
          loading="lazy"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="logo"
          className="h-16 sm:h-24"
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl transition duration-150">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            type="text"
            className="flex-grow focus:outline-none"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div className={`${searchValue && "border-r-2"}`}>
            <XIcon
              className={`h-5 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 ${
                !searchValue && "invisible"
              }`}
              onClick={() => setSearchValue("")}
            />
          </div>

          <MicrophoneIcon className="h-5 text-blue-500 cursor-pointer pl-3" />
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button type="submit" className="btn" onClick={onSearch}>
            Google Search
          </button>
          <button className="btn">
            <a
              href="https://www.google.com/doodles"
              target="_blank"
              rel="noreferrer"
            >
              I'm Feeling Lucky
            </a>
          </button>
        </div>
        <div className="flex mt-6 items-center justify-center flex-col sm:flex-row">
          <p className="pr-1 text-sm pb-3 sm:pb-0">Google offered in:</p>
          <div className="flex">
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

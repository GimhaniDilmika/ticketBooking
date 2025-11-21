import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 px-6 md:px-16 lg:px-24 xl:px-44 py-12 mt-20">
      
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-between gap-12">
        
        {/* LEFT SIDE */}
        <div className="max-w-sm">
          <h1 className="text-2xl font-bold">
            <span className="text-red-500">Quick</span>Show
          </h1>
          <p className="mt-3 text-sm leading-relaxed">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

          {/* Store Buttons */}
          <div className="flex gap-3 mt-6">
            <img
              src="/images/googleplay.png"
              alt="Google Play"
             className="w-28 h-10 object-contain cursor-pointer"

            />
            <img
              src="/images/appstore.png"
              alt="App Store"
              className="w-28 h-10 object-contain cursor-pointer"

            />
          </div>
        </div>

        {/* COMPANY LINKS */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Contact us</li>
            <li className="hover:text-white cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        {/* GET IN TOUCH */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Get in touch</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">
              +1-234-567-890
            </li>
            <li className="hover:text-white cursor-pointer">
              contact@example.com
            </li>
          </ul>
        </div>
      </div>

      {/* LINE */}
      <div className="w-full h-px bg-gray-700 mt-12 mb-6"></div>

      {/* COPYRIGHT */}
      <p className="text-center text-sm text-gray-400">
        Copyright 2025 © GreatStack. All Rights Reserved.
      </p>
    </footer>
  );
}

import React from 'react';
import bri from './Assects/bri.jpg'
import Chicken from './Assects/chicken65.jpg'

const Favorites = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Your Favorites</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Browse your favorite dishes.</p>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              <li className="flex justify-between py-4 px-4">
                <div className="flex items-center">
                  <img src={bri} alt="Favorite dish" className="h-12 w-12 rounded-md mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold">Biryani</h4>
                    <p className="text-sm text-gray-500">Description of the dish.</p>
                  </div>
                </div>
                <button className="text-red-500 font-semibold">Remove</button>
              </li>
              <li className="flex justify-between py-4 px-4">
                <div className="flex items-center">
                  <img src={Chicken} alt="Favorite dish" className="h-12 w-12 rounded-md mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold">Chicken65</h4>
                    <p className="text-sm text-gray-500">Enjoy the breakfast.</p>
                  </div>
                </div>
                <button className="text-red-500 font-semibold">Remove</button>
              </li>
              {/* Add more favorite dishes here */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;

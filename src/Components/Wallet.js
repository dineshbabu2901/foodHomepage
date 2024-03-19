import React from 'react';

const Wallet = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Your Wallet</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Manage your wallet balance and transactions.</p>
          </div>
          <div className="border-t border-gray-200">
            <div className="py-6 px-4 sm:px-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Current Balance</dt>
                  <dd className="mt-1 text-lg font-semibold text-gray-900">$500</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Last Transaction</dt>
                  <dd className="mt-1 text-lg font-semibold text-gray-900">-$50</dd>
                </div>
                {/* Add more wallet information here */}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;

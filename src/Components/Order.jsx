import React from "react";

const Order = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Order Details
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Details of your recent order.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Order ID</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  Dinesh
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Date</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  January 1, 2024
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Total</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  $50.00
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Delivery Address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  123 Main Street, Vellore, Tamilnadu, 60000
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Items</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  <ul className="divide-y divide-gray-200">
                    <li className="flex justify-between py-2">
                      <span> Dosa 1</span>
                      <span>$10.00</span>
                    </li>
                    <li className="flex justify-between py-2">
                      <span> Briyani 2</span>
                      <span>$15.00</span>
                    </li>
                    <li className="flex justify-between py-2">
                      <span> Bread Omlet 3</span>
                      <span>$25.00</span>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

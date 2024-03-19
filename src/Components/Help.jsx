import React from 'react';

const Help = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Help Center</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Find answers to common questions and get support.</p>
          </div>
          <div className="border-t border-gray-200">
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2">Frequently Asked Questions</h4>
              <ul className="list-disc list-inside">
                <li className="mb-1">How do I place an order?</li>
                <li className="mb-1">Can I modify my order after placing it?</li>
                <li className="mb-1">What payment methods do you accept?</li>
                <li className="mb-1">How can I track my order?</li>
              </ul>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2">Contact Support</h4>
              <p className="text-sm text-gray-500 mb-2">If you can't find the answer to your question in our FAQ, please feel free to reach out to our support team.</p>
              <p className="text-sm text-gray-500">Email: <a href="mailto:support@foodindianapp.com">support@foodindianapp.com</a></p>
              <p className="text-sm text-gray-500">Phone: <a href="tel:+919876543210">+91 9876543210</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;


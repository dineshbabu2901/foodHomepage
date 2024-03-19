import React, { useState } from 'react';

const PromotionApply = () => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleApplyPromotion = () => {
    // Here you can implement logic to validate the promo code and apply the discount
    // For simplicity, let's assume a promo code 'SAVE20' gives a 20% discount

    if (promoCode === 'SAVE20') {
      setAppliedPromo(promoCode);
      setErrorMessage('');
      // Apply discount logic here
    } else {
      setAppliedPromo('');
      setErrorMessage('Invalid promo code');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Apply Promotion</h3>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter promo code"
              className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 flex-1 p-2"
            />
            <button
              onClick={handleApplyPromotion}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Apply
            </button>
          </div>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          {appliedPromo && <p className="text-green-500 mt-2">Promotion applied successfully: {appliedPromo}</p>}
        </div>
      </div>
    </div>
  );
};

export default PromotionApply;

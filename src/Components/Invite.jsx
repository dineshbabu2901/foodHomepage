import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaCopy } from "react-icons/fa";

const InviteFriends = () => {
  const shareOnWhatsApp = () => {
    const message =
      "Check out this amazing food delivery app! Get 50% off on your next order: [insert link here]";
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");

    console.log("Shared on WhatsApp");
  };

  const shareOnFacebook = () => {
    const message =
    "Check out this amazing food delivery app! Get 50% off on your next order: [insert link here]";
  const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappLink, "_blank");
    
    console.log("Shared on Facebook");
  };

  const shareOnInstagram = () => {
    const message =
    "Check out this amazing food delivery app! Get 50% off on your next order: [insert link here]";
  const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappLink, "_blank");
    console.log("Shared on Instagram");
  };

  const copyLink = () => {
    const message =
    "Check out this amazing food delivery app! Get 50% off on your next order: [insert link here]";
  const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappLink, "_blank");
    console.log("Link copied");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Invite Friends
          </h3>
          <p className="text-gray-600 mb-4">
            Share this link with your friends and get 50% off on your next
            order!
          </p>
          <div className="flex items-center space-x-4">
            <button
              onClick={shareOnWhatsApp}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center"
            >
              <FaWhatsapp className="mr-2" />
              Share on WhatsApp
            </button>
            <button
              onClick={shareOnFacebook}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center"
            >
              <FaFacebook className="mr-2" />
              Share on Facebook
            </button>
            <button
              onClick={shareOnInstagram}
              className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 flex items-center"
            >
              <FaInstagram className="mr-2" />
              Share on Instagram
            </button>
            <button
              onClick={copyLink}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center"
            >
              <FaCopy className="mr-2" />
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteFriends;

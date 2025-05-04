// components/FeedbackModal.tsx
"use client";

import { useState } from "react";

export default function FeedbackModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  return (
    <>
      {/* Floating Feedback Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        aria-label="Give Feedback"
      >
        💬
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-full max-w-md shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
               We&apos;d love your feedback!
            </h2>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Your feedback..."
              className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
              rows={4}
            />
            <button
              onClick={() => {
                alert("Thanks for your feedback!");
                setFeedback("");
                setIsOpen(false);
              }}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
}

import React, { useState } from 'react';

// This is a simple, self-contained React component that demonstrates
// how to use Tailwind CSS within a single file. All logic and styling
// are here.

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Toggles a class on the body to enable dark mode styling
    document.body.classList.toggle('dark');
  };

  return (
    // The main container. We use responsive classes to adapt to different screen sizes.
    // The background color changes based on the dark mode state.
    <div className={`flex flex-col items-center justify-center min-h-screen p-4 font-sans transition-colors duration-500 ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      
      {/* Container for the main content card */}
      <div className="w-full max-w-2xl bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 transform transition-all duration-300 hover:scale-105">
        
        {/* Header section with a responsive font size and margin */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 text-gray-800 dark:text-gray-100">
          Welcome to the App
        </h1>
        
        {/* A sub-heading with some additional styling */}
        <p className="text-lg text-center mb-8 text-gray-600 dark:text-gray-300">
          This is a sample layout using Tailwind CSS.
        </p>

        {/* Action buttons with interactive hover and focus states */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          <button
            onClick={() => alert('Button Clicked!')}
            className="px-6 py-3 font-semibold text-white bg-indigo-600 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Get Started
          </button>
          
          {/* A secondary button with a different style */}
          <button
            onClick={toggleDarkMode}
            className="px-6 py-3 font-semibold text-indigo-600 bg-gray-100 dark:bg-slate-700 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Toggle Dark Mode
          </button>
        </div>

        {/* A simple card demonstrating padding, background, and rounded corners */}
        <div className="bg-gray-50 dark:bg-slate-700 p-6 rounded-xl border border-gray-200 dark:border-slate-600">
          <p className="text-sm text-gray-700 dark:text-gray-200">
            You can build beautiful, responsive UIs quickly with Tailwind's utility-first approach.
            Try resizing your browser window to see the responsive behavior in action.
          </p>
        </div>

      </div>
    </div>
  );
};

export default App;

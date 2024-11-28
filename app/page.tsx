"use client";
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="relative min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-8 py-12 rounded-2xl shadow-xl w-full max-w-xs sm:w-80 md:w-96 lg:w-[450px] border border-gray-300">
        <h1 className="text-3xl font-bold text-center mb-6 tracking-wide text-gray-200">
          Counter
        </h1>

        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center justify-center h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-tr from-gray-700 to-gray-900 text-white text-4xl sm:text-5xl font-extrabold shadow-lg border-2 border-gray-600">
            {count}
          </div>
        </div>

        <div className="relative flex justify-between gap-7 items-center mt-4">
          <button
            onClick={decrement}
            className="absolute left-0 px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white text-lg font-medium rounded-lg shadow-lg hover:shadow-red-500/50 active:scale-95 transition-all duration-300"
          >
            -
          </button>
          <button
            onClick={increment}
            className="absolute right-0 px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white text-lg font-medium rounded-lg shadow-lg hover:shadow-green-500/50 active:scale-95 transition-all duration-300"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

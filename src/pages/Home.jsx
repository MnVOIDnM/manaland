import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 py-2 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
          社会
        </h2>
        <div className="mt-10 space-y-4 space-x-4">
          <Link to="../pref-quiz" relative="route" className="px-4 py-2 border-blue-500 border-2 text-lg font-bold rounded-lg  bg-white hover:bg-blue-500 hover:border-transparent hover:text-white">
            都道府県クイズ
          </Link>
          <Link to="../capital-quiz" className="px-4 py-2 border-blue-500 border-2 text-lg font-bold rounded-lg  bg-white hover:bg-blue-500 hover:border-transparent hover:text-white">
            県庁所在地クイズ
          </Link>
          <Link to="../map-icon-quiz" className="px-4 py-2 border-blue-500 border-2 text-lg font-bold rounded-lg  bg-white hover:bg-blue-500 hover:border-transparent hover:text-white">
            地図記号クイズ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

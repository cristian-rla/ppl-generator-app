'use client'

import React from "react";
import { useState } from "react";
import PeopleDataCard from "@/components/ui/PeopleDataCard";


const RandomUserPage: React.FC = () => {
  const [pplData, setPplData] = useState<{pplSpecifications:object}[]>([]);
  const [currentIndex, changeIndex] = useState<number>(0);

  const getNewPerson = () => {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      setPplData([...pplData, {pplSpecifications:data?.results[0]}]);
    })
    .catch();
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <header className="w-full py-6 bg-gray-800 text-center text-xl font-bold">
        RANDOM USER GENERATOR
        <p className="text-sm font-light">
          A free, <span className="text-blue-400 underline">open-source</span> API for generating random user data.
        </p>
        <button
          onClick={getNewPerson}
          className="px-6 py-3 mt-4 rounded-lg bg-blue-500 hover:bg-blue-400 transition-all active:bg-blue-600"
        >
          Generate</button>
      </header>
      <p>{JSON.stringify(pplData[pplData.length-1]) /*Just debugging. API works */}</p>

    </div>
  );
};

export default RandomUserPage;

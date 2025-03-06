'use client'

import React from "react";
import { useState } from "react";
import PeopleDataCard from "@/components/ui/PeopleDataCard";


const RandomUserPage: React.FC = () => {
  const [pplData, setPplData] = useState<{pplSpecs:object}[]>([]);
  const [currentIndex, changeIndex] = useState<number>(0);

  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    setPplData([...pplData, {pplSpecs:data}]);
  })
  .catch();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <header className="w-full py-6 bg-gray-800 text-center text-xl font-bold">
        RANDOM USER GENERATOR
        <p className="text-sm font-light">
          A free, <span className="text-blue-400 underline">open-source</span> API for generating random user data.
        </p>
      </header>
      <PeopleDataCard/>
    </div>
  );
};

export default RandomUserPage;

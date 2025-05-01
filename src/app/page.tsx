'use client'

import React from "react";
import { useState } from "react";
import PeopleDataCard from "@/components/ui/PeopleDataCard";

interface PersonData {
  id: number;
  name: string;
  email: string;
  birthday: string;
  phone: string;
  location: string;
  password: string;
  picture: string;
}

const fmt = new Intl.DateTimeFormat("es-ES", {
  day: "2-digit",
  month: "short",    // "ene" en lugar de "enero"
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false
});

const RandomUserPage: React.FC = () => {
  const [pplData, setPplData] = useState<PersonData[]>([]);
  const [currentIndex, changeIndex] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const getNewPerson = () => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const individualData = (({ id: { value: id }, email, phone, name: { first, last }, dob: { date: birthday }, location: { city, country, state, street }, login: { password }, picture: { large: picture } }) => ({ id, email, phone, name: `${first}  ${last}`, birthday: fmt.format(new Date(birthday)), location: `${country}, ${state}, ${city}`, password, picture }))(data.results[0])

        // Usar el callback para actualizar el estado de manera segura
        setPplData(prevData => [...prevData, individualData]);

        if (selectedIndex === null) { // Verificar si es el primer elemento
          setSelectedIndex(0);
        }
      })
      .catch();
  }

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const selectedPerson = selectedIndex !== null ? pplData[selectedIndex] : undefined;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <header className="w-full py-6 bg-gray-800 text-center text-2xl font-bold">
        RANDOM USER GENERATOR
        <p className="text-sm font-light text-xl mt-3">
          A free, <span className="text-blue-400 underline">open-source</span> API for generating random user data.
        </p>
        <button
          onClick={getNewPerson}
          className="px-6 py-3 mt-4 rounded-lg bg-blue-500 hover:bg-blue-400 transition-all active:bg-blue-600"
        >
          Generate</button>
      </header>

      <div className="w-full flex mt-4">
        {/* Lista de Usuarios a la izquierda */}
        <aside className="w-1/4 bg-white shadow-lg overflow-y-auto h-[80vh]">
          <ul className="divide-y text-black">
            {pplData.map((person, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left p-4 hover:bg-gray-100 transition-colors ${selectedIndex === idx ? 'bg-blue-50 border-l-4 border-blue-600' : ''
                    }`}>
                  {person.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Tarjeta con la información seleccionada */}
        <main className="flex-1 mt-12">
          {selectedPerson && <PeopleDataCard pplSpecifications={selectedPerson} />}
        </main>
      </div>
    </div>
  );
};

export default RandomUserPage;

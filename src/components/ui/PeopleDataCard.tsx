import { FaUser, FaEnvelope, FaCalendar, FaMapMarkerAlt, FaPhone, FaLock } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

// Definir la interfaz para las especificaciones de la persona
interface PeopleSpecifications {
  name: string;
  email: string;
  birthday: string;
  phone: string;
  location: string;
  password: string;
}

interface PeopleDataCardProps {
  selected: keyof PeopleSpecifications; // Cambiado para asegurar que el valor de selected sea una clave válida
  pplSpecifications: PeopleSpecifications;
}

const PeopleDataCard: React.FC<PeopleDataCardProps> = ({pplSpecifications}) => {
  // Mantener el estado de la selección con un tipo de clave específica de PeopleSpecifications
  const [innerSelected, setSelected] = useState<keyof PeopleSpecifications>("name");

  // Crear un objeto que contiene los datos de las especificaciones
  const data = {
    name: pplSpecifications.name,
    email: pplSpecifications.email,
    birthday: pplSpecifications.birthday,
    phone: pplSpecifications.phone,
    location: pplSpecifications.location,
    password: pplSpecifications.password
  };

  return (
    <Card className="mt-10 p-6 bg-white text-gray-900 rounded-lg shadow-lg w-96 text-center">
      <div className="flex justify-center">
        <Avatar className="w-24 h-24 border-4 border-gray-300 rounded-full">
          <AvatarImage src="https://randomuser.me/api/portraits/men/2.jpg" alt="User" />
        </Avatar>
      </div>
      <CardContent>
        <h2 className="text-2xl font-semibold">{data[innerSelected]}</h2>
        <div className="flex justify-center gap-4 mt-4 text-gray-500 text-lg">
          <FaUser onClick={() => setSelected("name")} className="text-green-600" />
          <FaEnvelope onClick={() => setSelected("email")} />
          <FaCalendar onClick={() => setSelected("birthday")} />
          <FaMapMarkerAlt onClick={() => setSelected("location")} />
          <FaPhone onClick={() => setSelected("phone")} />
          <FaLock onClick={() => setSelected("password")} />
        </div>
      </CardContent>
    </Card>
  );
};

export default PeopleDataCard;

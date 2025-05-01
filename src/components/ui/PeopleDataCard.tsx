import {
  FaUser,
  FaEnvelope,
  FaCalendar,
  FaMapMarkerAlt,
  FaPhone,
  FaLock,
} from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

// Las claves que podemos seleccionar
type InfoKey = "name" | "email" | "birthday" | "location" | "phone" | "password";

interface PeopleSpecifications {
  id: number;
  name: string;
  email: string;
  birthday: string;
  phone: string;
  location: string;
  password: string;
  picture: string;
}

interface PeopleDataCardProps {
  pplSpecifications: PeopleSpecifications;
}

const LABELS: Record<InfoKey, string> = {
  name: "Hi, my name is",
  email: "My email address is",
  birthday: "My birthday is",
  location: "My location is",
  phone: "My phone number is",
  password: "My password is",
};

const ICONS: { key: InfoKey; icon: any }[] = [
  { key: "name", icon: <FaUser /> },
  { key: "email", icon: <FaEnvelope /> },
  { key: "birthday", icon: <FaCalendar /> },
  { key: "location", icon: <FaMapMarkerAlt /> },
  { key: "phone", icon: <FaPhone /> },
  { key: "password", icon: <FaLock /> },
];

const PeopleDataCard: React.FC<PeopleDataCardProps> = ({ pplSpecifications }) => {
  const [innerSelected, setSelected] = useState<InfoKey>("name");

  return (
    <Card className="relative mt-10 w-[50%] m-auto bg-white shadow-lg ">
      {/* Top colored bar - Fondo negro extendido */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gray-300 z-0  " />

      {/* Avatar overlaps */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 ">
        <Avatar className="w-28 h-28 border-4 border-white rounded-full shadow-md">
          <AvatarImage src={pplSpecifications.picture} alt="User avatar" />
        </Avatar>
      </div>

      <CardContent className="mt-16 pt-16 text-center z-10">
        {/* Label */}
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          {LABELS[innerSelected]}
        </p>
        {/* Main value */}
        <h2 className="mt-2 text-2xl font-semibold text-gray-900">
          {pplSpecifications[innerSelected]}
        </h2>

        {/* Icon bar */}
        <div className="mt-6 flex justify-center items-center gap-6 text-xl">
          {ICONS.map(({ key, icon }) => (
            <button
              key={key}
              onMouseEnter={() => setSelected(key)}
              className={
                "p-2 rounded-full transition-colors " +
                (innerSelected === key
                  ? "text-green-500 bg-green-100"
                  : "text-gray-300 hover:text-gray-500")
              }
            >
              {icon}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PeopleDataCard;

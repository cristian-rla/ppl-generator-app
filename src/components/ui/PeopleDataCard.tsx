import { FaUser, FaEnvelope, FaCalendar, FaMapMarkerAlt, FaPhone, FaLock } from "react-icons/fa";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const PeopleDataCard = () =>{

    return(
    <Card className="mt-10 p-6 bg-white text-gray-900 rounded-lg shadow-lg w-96 text-center">
        <div className="flex justify-center">
          <Avatar className="w-24 h-24 border-4 border-gray-300 rounded-full">
            <AvatarImage src="https://randomuser.me/api/portraits/men/2.jpg" alt="User" />
          </Avatar>
        </div>
        <CardContent>
          <p className="text-gray-500 mt-2">Hi, My name is</p>
          <h2 className="text-2xl font-semibold">Justin Thompson</h2>
          <div className="flex justify-center gap-4 mt-4 text-gray-500 text-lg">
            <FaUser className="text-green-600" />
            <FaEnvelope />
            <FaCalendar />
            <FaMapMarkerAlt />
            <FaPhone />
            <FaLock />
          </div>
        </CardContent>
      </Card>
    );
};

export default PeopleDataCard;
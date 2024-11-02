import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  const [employees, setEmployees] = useState([
    {
      name: "Johnsan Wood",
      role: "Front End Developer",
      email: "Johnsanwood@microft.com",
      image: "/1.jpg",
    },
    {
      name: "John Doe",
      role: "Team Lead",
      email: "Johndoe@microft.com",
      image: "/2.jpg",
    },
    {
      name: "Fakhar Naveed",
      role: "UI/UX Designer",
      email: "Fakharnaveed@microft.com",
      image: "/3.jpg",
    },
    {
      name: "Alex Made",
      role: "Software Engneer",
      email: "Alexmade@microft.com",
      image: "/4.jpg",
    },
    {
      name: "Jane Lane",
      role: "Software Engneer",
      email: "Janelane@microft.com",
      image: "/5.jpg",
    },
    {
      name: "Amma Stark",
      role: "Software Engneer",
      email: "Ammastark@microft.com",
      image: "/6.jpg",
    },
  ]);

  const updateEmployees = (newEmployees) => {
    setEmployees(newEmployees);
  };

  return (
    <>
      <Header updateEmployees={updateEmployees} employees={employees} />

      <HeroSection employees={employees} />
    </>
  );
}

export default App;

"use client";

import React from "react";

function AboutTeam() {
  const teamMembers = [
    {
      name: "Dianne Russell",
      role: "Co-Founder & CEO",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Mike Fisher",
      role: "Co-Founder & CFO",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Wade Warren",
      role: "Co-Founder & CTO",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Esther Howard",
      role: "Vice President",
      img: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      name: "Mike Fisher",
      role: "Co-Founder & CFO",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Wade Warren",
      role: "Co-Founder & CTO",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Dianne Russell",
      role: "Co-Founder & CEO",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <div
      className="relative py-16 px-4"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/white-texture.png')",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">Meet our Team</h2>
        <p className="text-gray-600 font-handwritten text-2xl font-bold mb-10">
          Passionate. Proactive. Expert.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* First row: 4 members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center mb-8">
          {teamMembers.slice(0, 4).map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Second row: 3 members centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {teamMembers.slice(4).map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutTeam;

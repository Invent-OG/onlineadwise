"use client";
import React from "react";
import Image from "next/image";

function AboutMissions() {
  const missions = [
    {
      title: "MISSION",
      img: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg",
      description:
        "Act as the Canadian leader in distribution, manufacturing, and assembly of seasonal products",
    },
    {
      title: "VISION",
      img: "https://images.pexels.com/photos/1069588/pexels-photo-1069588.jpeg",
      description:
        "Innovation, continuous improvement, and the search for reliable and cost-effective solutions are at the heart of the company's development and nationwide success.",
    },
    {
      title: "VALUES",
      img: "https://images.pexels.com/photos/10199446/pexels-photo-10199446.jpeg",
      description: "Respect, Commitment, Rigor",
    },
  ];

  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          MISSION, VISION & VALUES
        </h2>
        <p className="text-gray-600  font-handwritten text-2xl font-bold ">
          Our clients and their customers always come first.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {missions.map((mission, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center px-4 md:w-1/3">
                <div className="w-64 h-64 relative mb-4">
                  <Image
                    src={mission.img}
                    alt={mission.title}
                    fill
                    className="object-contain rounded"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-500">
                  {mission.title}
                </h3>
                <p className="text-gray-700">{mission.description}</p>
              </div>

              {/* Vertical line between cards */}
              {index < missions.length - 1 && (
                <div className="hidden md:block w-[2px] h-72 bg-neutral-400"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMissions;

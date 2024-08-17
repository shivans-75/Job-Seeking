import React from "react";
import { FaMicrosoft, FaApple,FaGoogle,FaAmazon } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Prestige Business Park, 33,Bengaluru",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Google",
      location: "Unitech Signature Tower 2, Gurgaon",
      openPositions: 5,
      icon: <FaGoogle />,
    },
    {
      id: 3,
      title: "Apple",
      location: "UB City, 19th Floor,Bengaluru",
      openPositions: 20,
      icon: <FaApple />,
    },
   
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions : {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
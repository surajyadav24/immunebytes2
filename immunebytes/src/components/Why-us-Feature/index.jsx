import React from "react";
import './style.css'
import team from "../../assets/images/services-main/team.gif"
import comp from "../../assets/images/services-main/Comprehensive Audit Process.gif"
import centric from "../../assets/images/services-main/Client-Centric Approach.gif"
import Post from "../../assets/images/services-main/Post-Audit Support.gif"
import Tailored from "../../assets/images/services-main/Tailored Approach.gif"
import Focus from "../../assets/images/services-main/Focus on Innovation.gif"
import Proven  from "../../assets/images/services-main/Proven Track Record.gif"
import Seal  from "../../assets/images/services-main/ImmuneBytes Seal of Trust.gif"
const FeatureSection = () => {
  const features = [
    {
      title: "Team of Highly Skilled Auditors",
      icon: team , // Replace with your GIF URL
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
      backgroundColor: "bg-blue-500", // Unique background color
    },
    {
      title: "Client-Centric Approach",
      icon: centric, // Replace with your GIF URL
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
      backgroundColor: "bg-green-500", // Unique background color
    },
    {
      title: "Comprehensive Audit Process",
      icon: comp, // Replace with your GIF URL
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
      backgroundColor: "bg-red-500", // Unique background color
    },
    {
      title: "Post-Audit Support",
      icon: Post, // Replace with your GIF URL
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
      backgroundColor: "bg-yellow-500", // Unique background color
    },
    {
      title: "Tailored Approach",
      icon: Tailored, // Replace with your GIF URL
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
      backgroundColor: "bg-purple-500", // Unique background color
    },
    {
      title: "Focus on Innovation",
      icon: Focus, // Replace with your GIF URL
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
      backgroundColor: "bg-teal-500", // Unique background color
    },
    {
      title: "Proven Track Record",
      icon: Proven , // Replace with your GIF URL
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
      backgroundColor: "bg-orange-500", // Unique background color
    },
    {
      title: "Immunebytes Seal of Trust",
      icon: Seal, // Replace with your GIF URL
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
      backgroundColor: "bg-pink-500", // Unique background color
    },
  ];

  return (<> 
      <h2 className="text-center text-3xl font-bold mb-8 heading-why py-1 pt-5" >Why Us?</h2>  
    <section className="why-sec-feature text-white p-8">
   
      <div className="container mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 card-container">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-6 border-b border-gray-700 pb-4"
            >
              {/* Icon with Unique Background */}
              <div
                className={`${feature.backgroundColor} icon-why rounded-full p-4 flex items-center justify-center`}
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-16 w-16 object-contain"
                />
              </div>
              {/* Content */}
              <div className="why-disc">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>

  );
};

export default FeatureSection;

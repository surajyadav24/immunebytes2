import React from "react";
import "./style.css";

const FeatureSection = ({ title, features }) => {
  return (
    <>
      <h2 className="text-center text-3xl font-bold mb-8 heading-why py-1 pt-5">
        {title}
      </h2>
      <section className="why-sec-feature text-white p-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 card-container">
            {features.map((feature, index) => (
              <div
                key={index}
                className="contain-why-us flex items-center space-x-6 border-b border-gray-700 pb-4"
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

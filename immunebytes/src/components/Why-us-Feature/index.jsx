import React from "react";
import "./style.css";

const FeatureSection = ({ title, features }) => {
  return (
    <>
      <h2 className="text-center text-3xl font-bold  heading-why  pt-5">
        {title}
      </h2>
<div className="container">
<section className="why-sec-feature text-white ">
        <div className="container mx-auto">
          <div className="grid  sm:grid-cols-2 lg:grid-cols-2 gap-8 card-container">
            {features.map((feature, index) => (
              <div
                key={index}
                className="contain-why-us flex items-center space-x-6 border-b border-gray-700 pb-4"
              >
                {/* Icon with Unique Background */}
                <div
                  className={`${feature.backgroundColor} icon-why   flex items-center justify-center`}
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className=""
                  />
                </div>
                {/* Content */}
                <div className="why-disc">
                  <h3 className="text-xl font-bold mb-2 feauture-title">{feature.title}</h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
</div>
    </>
  );
};

export default FeatureSection;

// src/components/PricingCard.js
import React from "react";

const PricingCard = ({ title, price, features, availableFeatures }) => {
  return (
    <div className="pricing-card">
      <h2>{title}</h2>
      <h3>{price}</h3>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className={availableFeatures.includes(index) ? "enabled" : "disabled"}>
            {feature}
          </li>
        ))}
      </ul>
      <button>Button</button>
    </div>
  );
};

export default PricingCard;

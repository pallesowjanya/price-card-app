// src/App.js
import React from "react";
import { pricingPlans } from "./data";
import PricingCard from "./components/PricingCard";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="pricing-cards-container">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            availableFeatures={plan.availableFeatures}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

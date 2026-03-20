# SafeShift – AI-Powered Parametric Insurance for Delivery Partners

## Problem Statement

India’s food delivery partners (Swiggy, Zomato) depend on daily deliveries for income. However, external disruptions such as heavy rain, extreme heat, and high pollution significantly reduce their working hours and earnings.

Currently, there is no financial protection for this income loss caused by uncontrollable environmental conditions.

---

## Target Persona and Scenario

### Persona:

Food delivery partners operating in urban cities like Chennai.

### Scenario 1: Heavy Rain

A delivery partner typically completes 20 deliveries per day. During heavy rainfall, road conditions worsen and orders decrease, reducing deliveries to 5–8 per day, leading to a 60–70% income loss.

### Scenario 2: Extreme Heat

During temperatures above 40°C, delivery partners reduce working hours due to health risks, directly impacting earnings.

### Scenario 3: High Pollution

When AQI exceeds safe levels, delivery partners may limit outdoor activity, resulting in fewer completed deliveries.

---

## Why Parametric Insurance?

Traditional insurance requires manual claim submission and verification, which is time-consuming and inefficient for gig workers.

Parametric insurance eliminates this by:

* Using predefined triggers (rain, heat, pollution)
* Automatically initiating payouts
* Ensuring fast and transparent compensation

This model is ideal for gig workers who require immediate financial support.

---

## Proposed Solution

SafeShift is an AI-powered parametric insurance platform that compensates delivery partners for income loss caused by external disruptions.

The system uses predefined environmental triggers to automatically initiate payouts without requiring manual claim submission.

---

## Application Workflow

1. User registers and selects their working city
2. System assigns a weekly premium based on risk level
3. External conditions are continuously monitored (simulated in Phase 1)
4. When a predefined disruption threshold is met, the system validates conditions
5. If valid, payout is automatically triggered
6. If invalid, the system rejects the payout with a reason

---

## Weekly Pricing Model

The pricing is structured on a weekly basis to align with gig workers’ earning cycles.

| Risk Level | Premium (₹/week) | Description            |
| ---------- | ---------------- | ---------------------- |
| Low        | ₹50              | Low-risk areas         |
| Medium     | ₹80              | Moderate-risk cities   |
| High       | ₹120             | High-risk metro cities |

### Pricing Logic:

* Risk is determined based on historical environmental data
* Higher disruption probability leads to higher premiums
* Example: Chennai is classified as a medium-risk city with a premium of ₹80/week

---

## Parametric Triggers

| Disruption Type | Condition          | Payout |
| --------------- | ------------------ | ------ |
| Heavy Rain      | Rainfall > 50mm    | ₹500   |
| Extreme Heat    | Temperature > 40°C | ₹400   |
| High Pollution  | AQI > 300          | ₹300   |

These triggers directly represent situations where delivery partners are unable to work effectively, resulting in income loss.

---

## Payout Justification

The payout values are designed to approximate average daily income loss:

* Heavy Rain: ₹500 (major disruption, minimal work possible)
* Extreme Heat: ₹400 (reduced working hours)
* High Pollution: ₹300 (partial work reduction)

These values ensure fair compensation without over-insuring.

---

## AI/ML Integration Plan

### 1. Risk Assessment

* Use historical weather and environmental data to classify cities into risk categories

### 2. Dynamic Premium Calculation

* Adjust weekly premiums based on predicted disruption probability

### 3. Fraud Detection

* Detect anomalies in claims behavior
* Validate user activity status
* Validate user location
* Prevent duplicate claims

### 4. Predictive Risk Modeling

* Predict high-risk days using historical weather and pollution patterns
* Enable proactive premium adjustment and risk planning

---

## Fraud Prevention Mechanisms

* No payout if the user is inactive
* No payout if the location is invalid
* Duplicate claims are blocked for the same event
* Weekly payout capped at ₹1000
* Cooldown period applied during initial usage

---

## System Architecture (High-Level)

1. User Interface (React)

   * Displays dashboard and controls

2. Risk Engine

   * Calculates weekly premium based on risk

3. Trigger Engine

   * Monitors environmental conditions (simulated)

4. Fraud Detection Module

   * Validates activity, location, and claims

5. Payout Engine

   * Processes and displays compensation

---

## Platform Choice Justification

A web-based platform is chosen for Phase 1 because:

* Faster development and deployment
* Easy demonstration and accessibility
* Suitable for prototype validation

A mobile application can be developed in later phases for better user accessibility.

---

## Tech Stack

Frontend:

* React.js

Backend (Planned for future phases):

* Node.js

Database (Future scope):

* MongoDB

APIs (Simulated in Phase 1):

* Weather data (mocked)
* AQI data (mocked)

Payments:

* Mock payout system

---

## Development Plan

Phase 1:

* Build a single-page dashboard using React
* Implement simulated parametric triggers
* Add automated payout logic
* Implement fraud detection checks

Phase 2:

* Integrate real-time APIs
* Add backend services
* Implement real payment systems

---

## Prototype Scope (Phase 1)

* User dashboard
* Weekly premium display
* Risk level display
* Simulated disruption triggers
* Automated payout system
* Fraud detection validation

---

## Demo Flow

1. User opens the dashboard
2. User views premium and risk level
3. A disruption is simulated
4. System validates conditions
5. Payout is triggered or rejected based on validation

---

## Integration Plan (Future)

* Weather APIs for real-time rainfall and temperature
* AQI APIs for pollution monitoring
* Platform APIs (Swiggy/Zomato) for activity validation
* Payment gateways for real payouts

---

## Limitations (Phase 1)

* Uses simulated data instead of real APIs
* No real payment integration
* Basic rule-based AI instead of full ML models

These limitations will be addressed in future phases.

---

## Additional Considerations

* The system strictly focuses on income loss and excludes health, accident, and vehicle-related coverage
* The parametric model ensures fast and transparent payouts
* The solution is scalable across different gig platforms

---

## Conclusion

SafeShift provides an efficient and scalable approach to protect delivery partners from income loss using AI-driven parametric insurance with automated payouts and fraud prevention mechanisms.

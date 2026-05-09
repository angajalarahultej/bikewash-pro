# Detailed Product Report + PRD

## Subscription-Based Bike Wash Platform for Corporate Employees

---

# 1. Executive Summary

## Product Concept

A subscription-based bike wash platform focused on:

* corporate employees
* office parking servicing
* recurring monthly memberships
* frictionless scheduling

The platform allows users to:

* subscribe monthly
* schedule washes in seconds
* get vehicles cleaned while working
* track wash progress in real time

This is not positioned as:

> “a bike wash app”

Instead, it is positioned as:

# “A workplace vehicle care subscription platform.”

---

# 2. Core Product Philosophy

The app experience should combine:

| Product            | Inspiration   |
| ------------------ | ------------- |
| Booking Simplicity | Uber          |
| Subscription Feel  | Cult/Gym      |
| Service Trust      | Urban Company |
| Live Tracking      | Swiggy/Zomato |

---

# 3. Product Vision

## Goal

To make bike washing:

* habitual
* frictionless
* subscription-based
* workplace integrated

The customer should feel:

> “My bike gets cleaned automatically while I work.”

---

# 4. Core UX Principle

The entire app should answer one question:

# “How quickly can I schedule my wash without thinking?”

This is the most important product philosophy.

The app should:

* reduce decision fatigue
* minimize taps
* maximize repeat usage

---

# 5. Business Model Overview

## Revenue Model

Monthly recurring subscription plans.

Example:

| Plan    | Price | Included       |
| ------- | ----- | -------------- |
| Basic   | ₹299  | 4 washes/month |
| Premium | ₹499  | 8 washes/month |

---

## Corporate Model

Companies may:

* subsidize employee memberships
* fully sponsor wash plans
* provide parking-area servicing

This creates:

# B2B2C recurring revenue.

---

# 6. User Types

## A. Customer

Corporate employee using the app.

Can:

* subscribe
* schedule washes
* track services
* view history

## B. Worker

Operational workforce performing washes.

Can:

* view assignments
* upload photos
* complete jobs

## C. Corporate Admin

Company representative.

Can:

* onboard employees
* monitor usage
* view analytics

## D. Platform Admin

Startup operations/admin team.

Can:

* manage workforce
* track revenue
* manage subscriptions
* monitor performance

---

# 7. Customer App Flow

# SCREEN 1 — Splash Screen

## Purpose

Create premium first impression.

### UI Requirements

* clean branding
* minimal UI
* premium vehicle imagery

### CTA

# “Clean Vehicle. Zero Hassle.”

---

# SCREEN 2 — Login / Signup

## Login Methods

* Mobile OTP
* Google Login
* Corporate Login

## Corporate Login Flow

Employee enters:

* company email
  OR
* employee ID

System validates:

* approved company domain
* employee database

---

# SCREEN 3 — Add Vehicle

## User Inputs

* Vehicle type
* Brand
* Model
* Vehicle number
* Color (optional)

Optional:

* upload vehicle image

## Operational Reason

Vehicle photos help workers:

* identify vehicles quickly
* reduce servicing errors

---

# SCREEN 4 — Subscription Plans

## Plans Example

### Basic

₹299/month

* 4 washes

### Premium

₹499/month

* 8 washes

## Important UX Element

Show:

# “Per wash savings”

Example:

> ₹75/wash instead of ₹120 single wash

This improves conversion psychology.

---

# SCREEN 5 — Select Office Location

User selects:

* office name
* building/tower
* parking floor

---

# SCREEN 6 — Payment

## Payment Methods

* UPI
* Cards
* Wallets
* Corporate Credits

After successful payment:

# membership activates instantly.

---

# 8. Home Dashboard

This is the MOST important screen.

The dashboard should:

* feel premium
* encourage repeat usage
* make scheduling effortless

---

# Dashboard Components

## A. Subscription Status

Example:

> Gold Plan
> 3/4 washes remaining

## B. Quick Action Button

# “Schedule Wash”

This should be:

* visually dominant
* one-tap accessible

## C. Upcoming Wash

Example:

> Tomorrow — 8:00 AM

## D. Service History

Includes:

* completed washes
* before/after photos
* ratings

Purpose:

# Build trust and transparency.

---

# 9. Booking Flow

The booking flow must remain extremely lightweight.

## Step 1 — Select Vehicle

If user has multiple vehicles:

* choose one

## Step 2 — Select Time Slot

Example:

* 7–9 AM
* 9–11 AM
* Office Hours Slot

## Step 3 — Confirm Parking Location

User enters:

* Tower
* Basement
* Parking Slot

Optional:

* upload parking image

## Operational Importance

Parking information:

* reduces worker delays
* improves servicing efficiency

---

# 10. Live Service Tracking

Purpose:

# Build service trust.

## Status Flow

* Assigned
* Worker On-Site
* Wash Started
* Wash Completed

Optional:

* before/after photos

This increases:

* transparency
* perceived service value

---

# 11. Ratings & Referral System

After completion:

* user provides rating
* optional feedback
* tipping option

## Referral Logic

Example:

> Refer friend → earn free wash credit

Purpose:

# organic low-cost growth.

---

# 12. Corporate Employee Flow

This is the key business differentiator.

## Corporate Dashboard

### Employee View

Employee can see:

* sponsored credits
* available bookings
* subscription status

### Corporate Admin View

Admin can monitor:

* employee participation
* total washes
* monthly reports
* billing
* sustainability metrics

Example:

> “12,000 liters water saved”

---

# 13. Worker App (Critical)

The business requires:

# TWO separate apps.

| App          | Purpose                |
| ------------ | ---------------------- |
| Customer App | booking & subscription |
| Worker App   | operations             |

Without worker tooling:

# operations will fail.

## Worker Dashboard

Worker sees:

* assigned jobs
* vehicle details
* parking location
* special notes

## Worker Flow

### Step 1

Reach vehicle

### Step 2

Upload BEFORE image (Mandatory)

### Step 3

Start wash

### Step 4

Complete wash

### Step 5

Upload AFTER image (Mandatory)

### Step 6

Mark completed

Customer notified instantly.

---

# 14. Operations Dashboard (Founder/Admin)

This is the business control center.

## Dashboard Metrics

### A. Active Subscriptions

* total active users
* plan distribution

### B. Daily Bookings

* total jobs
* completed jobs
* pending jobs

### C. Worker Productivity

* washes/day
* ratings
* completion time

### D. Revenue Metrics

* Monthly Recurring Revenue (MRR)
* churn rate
* retention
* add-on revenue

---

# 15. MVP Scope (Version 1)

# Customer App

✅ Login
✅ Subscription purchase
✅ Booking
✅ Payment
✅ Live tracking
✅ Ratings

# Worker App

✅ Assigned jobs
✅ GPS/location
✅ Photo uploads
✅ Job completion tracking

# Admin Dashboard

✅ Customer management
✅ Subscription tracking
✅ Workforce management
✅ Revenue analytics

---

# 16. Features NOT Required in MVP

Avoid building:

* AI scheduling
* loyalty gamification
* advanced automation
* license plate recognition
* dynamic pricing

Focus on:

# operational excellence first.

---

# 17. Technical Requirements

## Suggested Stack

| Component      | Suggested Tech                                                             |
| -------------- | -------------------------------------------------------------------------- |
| Frontend       | React Native                                                               |
| Backend        | Node.js                                                                    |
| Database       | PostgreSQL                                                                 |
| Authentication | Firebase/Auth0                                                             |
| Payments       | [Razorpay](https://razorpay.com?utm_source=chatgpt.com)                    |
| Hosting        | [Amazon Web Services (AWS)](https://aws.amazon.com?utm_source=chatgpt.com) |

---

# 18. Success Metrics

## Product Metrics

* booking completion rate
* subscription conversion %
* monthly retention

## Operational Metrics

* washes per worker/day
* average completion time
* service ratings

## Financial Metrics

* MRR
* churn
* customer acquisition cost
* lifetime value

---

# 19. Launch Strategy

Do NOT launch city-wide.

Initial rollout should target:

# ONE tech park or corporate campus.

Reason:

* dense customer concentration
* easier operations
* lower logistics cost
* easier quality control

---

# 20. Final Strategic Insight

This startup is NOT:

# “a washing business.”

It is:

# a recurring workplace convenience platform.

The moat will come from:

* operational reliability
* recurring subscriptions
* corporate partnerships
* habit formation
* dense hyperlocal servicing

Not from the app alone.

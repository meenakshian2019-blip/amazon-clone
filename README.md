# 🛒 Amazon Clone - Full Stack React E-Commerce Application

A fully functional Full-Stack Amazon Clone built using **React**, **Firebase**, and **Stripe API**. This application includes user authentication, a working shopping cart with real-time calculations, dynamic order history tracking via a Firestore database, and a fully secure checkout flow.

## ✨ Features

- **Full User Authentication:** Secure Sign-in, Account Creation, and Sign-out capabilities powered by Firebase Auth.
- **Dynamic Shopping Cart:** Add or remove items seamlessly, with real-time subtotal updates using `react-number-format`.
- **Secure Payment Processing:** Simulated real-world credit card transactions fully integrated via Stripe API (CardElement).
- **Real-time Order History:** Saves user purchases instantaneously to a Firebase Cloud Firestore database upon successful checkout.
- **Responsive UI:** Styled closely to the original Amazon interface with responsive CSS layouts.

## 🛠️ Tech Stack

- **Frontend:** React (Hooks, Context API, Redux-style `useStateValue` pattern)
- **Routing:** React Router v6 (`useNavigate`, `Link`)
- **Styling:** Custom CSS Grid & Flexbox
- **Database & Auth:** Firebase Firestore & Firebase Authentication
- **Payment Gateway:** Stripe API & Stripe React Elements
- **Formatting Engine:** `react-number-format` (`NumericFormat`)
- **HTTP Client:** Axios (for connecting to Stripe backend functions)

## 📦 Installation & Setup

To get this project up and running locally, follow these steps:

### 1. Clone the repository

```bash
git clone [https://github.com/meenakshian2019-blip/amazon-clone.git]
cd amazon-clone
```

### 2. Install dependencies

npm install

### 3.Run the application

npm start

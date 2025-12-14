# Deals On Wheels — Used Car Resale Platform (MVP)

Deals On Wheels is a full-stack web application that simulates a modern used-car resale platform.
Users can browse used cars, apply filters, view detailed listings, and proceed through a
checkout-style flow via a clean, responsive UI.

This project was built as an **end-to-end MVP**, with emphasis on real-world backend structure,
REST APIs, and frontend–backend integration.

🔗 **Live Demo:**  
https://dealsonwheels.vercel.app/
> Recommended to view on laptop/desktop (mobile not optimized yet)

---

## ✨ Features

- 🚘 Browse used cars with detailed specifications
- 🎛️ Multi-parameter filtering
- 📄 Dedicated vehicle detail pages
- 🛒 Checkout-style booking flow (simulated)
- 🔗 RESTful backend with MongoDB
- 📦 Clear separation of frontend and backend

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- React Router
- Firebase Authentication (email/password)

### Backend
- Node.js
- Express.js
- RESTful API design

### Database
- MongoDB (Mongoose)

### Tools
- Postman

---

## 🔐 Authentication Note (Design Choice)

Firebase email/password authentication with auth-based routing is already implemented
in the frontend. For this MVP, authentication is intentionally bypassed to allow
**public browsing of the marketplace**.

The app supports two entry components:

- `Home`  → Auth-enabled entry (login/signup → dashboard)
- `Home1` → Public entry (direct redirect to marketplace)

### Current MVP Behavior
```jsx
<Route path="/" element={<Home1 />} />
```

### Enable Authentication
```jsx
<Route path="/" element={<Home />} />
```

Authentication will be fully enabled once seller-side flows and payment integration
are introduced.

---

## ⚠️ Development Port Note (macOS)

On macOS, port `5000` may be occupied by system-level services
(Control Center / AirPlay Receiver). When this happens, requests to
`localhost:5000` can return `403 Forbidden` without ever reaching the backend.

For local development, the backend is configured to run on a different port
(e.g. `5002` or `5003`) via environment variables.

---

## 📸 Screenshots & API Preview

- Home page with car listings and filters
  ![Shop Page](Screenshots/shop_page.jpeg)
- Vehicle Listing page
  ![Listing Page](Screenshots/listing.jpeg)
- Checkout page
  ![Checkout Page](Screenshots/checkout.jpeg)
- API POST requests used to add cars (Shown in Postman)
  ![API Request](Screenshots/api_query.jpeg)
- MongoDB collection storing car data
  ![MongoDB Collection](Screenshots/atlas_db.jpeg)

---

## 🔮 Planned Enhancements

- 🧑‍💼 Seller onboarding and listings
- 💳 Real payment integration
- 📱 Mobile responsiveness

---

## 🗂 Repository Structure

This project uses a **parent (meta) repository** with Git submodules.

- `/` → (Frontend in root) React + Vite application  
- `/backend`  → Node.js + Express backend repository  

**Backend structure note:**  
The backend repository keeps its application source inside a `/backend` directory,
with `package.json` located at the repository root.

---

## 🛠️ Local Setup

```bash
# Clone meta repo
git clone https://github.com/your-username/deals-on-wheels.git
cd deals-on-wheels

# Initialize submodules
git submodule update --init --recursive

# Backend
cd backend
npm install
npm run dev

# Frontend (separate terminal)
npm install
npm run dev
```

> Backend configuration is managed via `.env`.

---

## 📬 Feedback

This project is still evolving. Feedback, suggestions, and discussions are welcome.
Feel free to open an issue or reach out.

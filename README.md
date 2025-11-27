# Modern React Shopping Cart

A premium, fully responsive e-commerce demo built with React, Vite, and the Context API. This project demonstrates a modern shopping experience with real product data (FakeStoreAPI), global state management, and a polished UI.

Live demo: https://shopping-cart-haroon.netlify.app/

## Features

- Dynamic product feed powered by FakeStoreAPI
- Global cart state using React Context API
- Add items with custom quantities and prevent duplicate entries
- Increase / decrease / remove items with real-time total calculation
- Responsive layout with polished UI effects (glassmorphism, neumorphism, animated gradients)

## Tech stack

- React (Vite)
- React Router v6
- Context API + Hooks (useState, useEffect, useContext)
- CSS3 (variables, flexbox, grid, animations)

## Getting started

Prerequisites:

- Node.js v14+ and npm or yarn

Installation and development:

```bash
# clone the repository
git clone https://github.com/H4ROOON/shopping-cart.git
cd shopping-cart

# install dependencies
npm install

# start the dev server
npm run dev
```

## Project structure

```
shopping-cart/
├── components/
│   └── Navbar.jsx
├── context/
│   └── CartContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   └── Cart.jsx
├── styles/
│   └── main.css
├── App.jsx
└── main.jsx
```

## Design highlights

- Dark / vibrant aesthetic with a 4-color animated gradient background
- Semi-transparent cards with backdrop blur for glassmorphism
- Interactive buttons with subtle glow and scale effects
- Fully responsive for mobile, tablet, and desktop

---
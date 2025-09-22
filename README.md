# 🍔 My React Food Delivery App

This project is my initial practice with **React.js**. It's a UI clone of a food delivery application, built to help me learn and apply fundamental React concepts.

## About the Project

I built this application to solidify my understanding of core React principles, including:
* **Component-based Architecture**: Breaking down the UI into reusable components like `Header`, `RestaurantCard`, and `Footer`.
* **State Management**: Managing the application's state, such as search input and the list of restaurants.
* **Props**: Passing data from parent components to child components.
* **Conditional Rendering**: Displaying elements based on certain conditions (e.g., showing filtered restaurants).
* **Hooks**: Using hooks like `useState` to manage component state.

---

## Features

The app includes basic UI features of a food delivery service:
* **Restaurant Listing**: Displays a grid of restaurant cards.
* **Live Search**: Allows users to filter restaurants by name.
* **Top-Rated Filter**: A button to show only restaurants with a rating of 4.0 or higher.
* **Responsive Design**: The UI adapts to different screen sizes.
* **Interactive Routing**: Navigate between the Home, About, and Contact pages seamlessly.
* **Graceful Error Page**: A custom "404 Not Found" page for invalid routes.
* **Live Search**: Filter restaurants by name.
* **Top-Rated Filter**: A button to show only restaurants with a rating of 4.0 or higher.

---

## Data Source

Due to **CORS (Cross-Origin Resource Sharing)** policy restrictions, I was unable to use a live API to fetch restaurant data. To work around this and focus on the React UI development, I've used **mock data** located in the `/src/utils/mockData.js` file.

---


## 🚀 What's New? Key Learnings & Features

I have significantly expanded the application's functionality and structure. During this process, I learned and implemented the following key concepts:

### 🌐 Routing with React Router DOM

* **`createBrowserRouter`**: I used this powerful API to set up a robust routing system, defining a clear structure for my application's pages.
* **Nested Routes & `<Outlet />`**: By nesting routes, I created a consistent page layout with a persistent header and footer. The `<Outlet />` component dynamically renders the content of the current route, enabling a Single-Page Application (SPA) experience.
* **Error Handling (`useRouteError` & `errorElement`)**: I implemented a custom error page that is displayed gracefully when a route is not found or an unexpected error occurs. This provides a better user experience than a default browser error.

### 🔗 Single-Page Application (SPA)

* **`<Link />` vs. `<a>` tag**: I learned the crucial difference between the two. Using the `<Link />` component prevents the entire page from refreshing, which is essential for creating a fast and seamless SPA. In contrast, an `<a>` tag triggers a full-page reload, which is undesirable for modern web apps.

### 🎨 Enhanced UI & Components

* **Modular Components**: I refined the component-based architecture, creating separate, reusable components for the `Header`, `Body`, `About`, `Contact`, `Footer`, and `Error` pages.
* **Styling**: I focused on creating distinct, engaging UI/UX for each page:
    * **About Page**: A playful and fun UI that tells the app's story, using dynamic CSS and emojis.
    * **Contact Page**: A clean, professional layout with a form and contact details.
    * **Error Page**: A cute, user-friendly design to make a bad experience less frustrating.

---


## 🛠️ Tech Stack & Concepts Used

* **React.js**: The core library for building the UI.
* **React Router DOM**: For client-side routing.
* **JSX**: A syntax extension for React.
* **Functional Components & Hooks**: Utilizing modern React patterns.
* **Conditional Rendering**: Displaying UI based on logic.
* **`createBrowserRouter`**, **`<Outlet />`**, **`<Link />`** and **`useRouteError`**.
* **CORS Workaround**: Using mock data to bypass CORS policy restrictions and focus on UI development.

---

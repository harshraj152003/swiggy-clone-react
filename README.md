# My First React Project: A Food Ordering App UI Clone

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

---

## Data Source

Due to **CORS (Cross-Origin Resource Sharing)** policy restrictions, I was unable to use a live API to fetch restaurant data. To work around this and focus on the React UI development, I've used **mock data** located in the `/src/utils/mockData.js` file.

---
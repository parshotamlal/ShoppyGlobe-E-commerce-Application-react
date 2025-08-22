# 🛒 ShoppyGlobe – E-commerce Application

Welcome to **ShoppyGlobe**, a modern, fully functional **e-commerce website** built with **React, Redux Toolkit, and React Router**.  
This project provides an **intuitive shopping experience** and demonstrates **real-world use of state management, dynamic routing, mock API integration, and UI/UX best practices**.

---

## 🚀 Features

### Core Features
- The app has a root component that manages the overall flow.
- Navigation menu includes a cart icon for easy access.
- Displays a dynamic list of products fetched from the API.
- Each product is shown as a card with an "Add to Cart" option.
- Detailed product information is displayed on the product detail page.
- Cart shows added items with options to update quantity or remove items.
- A 404 page is displayed for unmatched routes.
- Footer added for additional project information and links.

### Props & Components
- Props are used to pass data from parent to child components.
- Components are functional, reusable, and use proper prop-types.

### Data Fetching
- Products are fetched from the DummyJSON API.
- A custom hook is used for fetching the product list.
- Product details are fetched dynamically using the product ID.
- Error handling is implemented for failed fetch requests.

### State Management
- The cart is managed using Redux Toolkit.
- Search functionality is implemented via a Redux slice.
- Actions include adding, removing, and updating cart items.

### Event Handling
- Users can add products to the cart.
- Users can remove or update products directly in the cart.

### Routing
- Home page displays the product list.
- Product detail page shows selected product information.
- Cart page displays all added items.
- Checkout page allows users to complete their orders.
- A fallback 404 page is provided for unknown routes.

### Performance & Styling
- Product and cart lists are rendered dynamically with unique keys.
- Components are lazy loaded using `React.lazy` and `Suspense` for better performance.
- Styled using TailwindCSS and CSS to ensure responsive design.


## 🧩 Tech Stack

- **React** – UI Library  
- **Redux Toolkit** – State Management  
- **React Router DOM** – Client-side Routing  
- **React Toastify** – Toast Notifications  
- **DummyJSON API** – Mock product data  
- **CSS Modules** – Component-level styling  
- **React Responsive Carousel** – Homepage carousel  

---

## 📁 Folder Structure

<img width="277" height="557" alt="image" src="https://github.com/user-attachments/assets/b66186e9-bc20-459f-83d1-319853a0de57" />



---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository

git clone https://github.com/your-username/ShoppyGlobe-E-commerce-Application-react.git


### 2. Change the directory
cd ShoppyGlobe-E-commerce-Application-react

### 3. Install dependencies
npm install

### 4. Start the development server
npm run dev

---

🛒 APIs Used

### All product data is powered by DummyJSON

- API integration ([DummyJSON](https://dummyjson.com/products)) 
a free mock API for products, categories, and search functionality.

---

## 🔗 GitHub Link
[View Project on GitHub](https://github.com/parshotamlal/ShoppyGlobe-E-commerce-Application-react.git)

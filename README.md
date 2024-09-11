# Shopping Cart Application

This is a simple shopping cart application built using React. The app includes a home page, shop page with products, and a cart page that displays items added to the cart.

## Table of Contents
- [Project Setup](#project-setup)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Demo](#demo)
- [Contributing](#contributing)

## Project Setup

Follow these steps to run the project on your local machine:

1. Clone the repository:
    ```bash
    git clone https://github.com/dicle-123/Shopping-cart.git
    ```

2. Navigate into the project directory:
    ```bash
    cd Shopping-cart
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Folder Structure

```bash
src/
│
├── assets/                   # Stores images and static files
├── components/                # All UI components
│   ├── Navbar/                # Navbar component
│   ├── HomePage/              # HomePage component
│   ├── ShopPage/              # ShopPage component with products
│   ├── Cart/                  # Cart component showing selected items
│   └── Product/               # Product card component
├── context/                   # CartContext for managing global cart state
├── App.js                     # Main application file
└── index.js                   # React entry point



Key Components:

1.Navbar: Provides navigation between the Home, Shop, and Cart pages.
2.HomePage: Displays a welcome message and image.
3.ShopPage: Lists products with a quantity input and an "Add to Cart" button.
4.Cart: Displays the items added to the cart and their quantities.
5.Product: Each product card includes increment/decrement controls and an "Add to Cart" button.
6.CartContext: Manages the state of items in the cart across the app.


Features
1.Home Page: Displays basic information about the store.
2.Shop Page: Displays product cards with adjustable quantity and "Add to Cart" functionality.
3.Cart: Displays all items added to the cart with their respective quantities and total price.
4.Context API: Used to manage global state for the shopping cart.
5.Routing: React Router is used to navigate between the Home, Shop, and Cart pages.


Demo
You can check out the live demo of the project at the following link:

Live Demo

Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. All contributions are welcome!

1.Fork the repository
2.Create a new feature branch (git checkout -b feature-name)
3.Commit your changes (git commit -am 'Add new feature')
4.Push to the branch (git push origin feature-name)
5.Create a new Pull Request

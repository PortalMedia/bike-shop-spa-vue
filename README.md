# Technical Interview Exercise: Vue Bike Shop SPA

The PortalParts Bike Shop website needs a new shopping cart and our team has decided to use Vue for the frontend framework. We have collected feedback from our customers about the features they would like and our project manager has written out a list of user stories for our development team.

The cart page consists of two main components:
1. the CartBody component which will display the products in the customer’s cart
1. the CartSummary component which needs to display calculated totals based on the price, quantity, and tax of each product.

A backend developer has created an API endpoint that returns a JSON object with the customer’s cart data. 

**API Endpoint**: https://62rng0wpc5.execute-api.us-east-1.amazonaws.com/cart

Using the AJAX client of your choice, make a GET request to the API endpoint to load the cart data into the App component’s state. Using whatever tools, resources, and coding patterns you see fit, update the CartBody and CartSummary components to fulfill each of the user-stories outlined below (Bonus stories are optional).

### User Stories
- As a user, I want to see the brand name, product name, image, and unit price of each product in my cart so I have a product-level view of my shopping cart.
- As a user I want to see both the sale price and original price of each product so that I know when I’m saving money. (Hint consider the salePrice, regularPrice, and onSale properties of each product).
- As a user, I want to see a line-item breakdown of my cart total consisting of subtotal, shipping, and tax so that I can understand the total amount. (Hint: Assume the tax rate is 5.5%).
- As a user, I want to see the total amount I saved on products that are on sale in my cart summary so that I know how much money I am saving.
- **Bonus** (optional): As a user, I want a responsive cart design so that I can easily view and navigate my shopping cart on a mobile device.
- **Bonus** (optional): As a user, I want to be able to increase or decrease the quantity of each item in my cart so that I change my purchase and can see the updated totals in CartSummary.

## As a Take-Home Exercise
### Instructions
- Using Git, pull this repository and create a new branch
- Install project dependencies with `npm install`
- Run the project with `npm start`
- Implement solutions to the user stories given above
- When you are finished, open a pull request on the Github repo with a description of your changes

The estimated time to complete this project is 3 hours.

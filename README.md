# Shopping Site

Implements of a basic Shopping site and CRUD of the products use firebase.

## Deploy

Web URL: https://shoppingcart-79404.web.app

## Video

YouTube Video: https://youtu.be/JhGDGVn4wTo

## Run

1. Clone this repository
2. cd ShoppingSite
3. npm install
4. npm run dev

## Database

All the products data are stored at Firebase.

Every document have 4 attributes.

- createdDate
- image
- name
- price

## Functionality

- Adding and removing products from the shopping cart.
- Implement pagination to divide the product into multiple pages.
- Implementing CRUD operations for products using Firebase Firestore.
- Implementing sorting functionality based on the created date of the products.
- Implementing pagination to divide the products into multiple pages.
- Displaying product images, names, and prices on the website.

## Methods

All the Styling are implemented by Bootstrap.

### Firebase

The MyFirebase.jsx file implements CRUD (Create, Read, Update, Delete) operations for managing data in a Firebase Firestore database.

1. Initialization: The file initializes the Firebase app using the provided configuration and obtains a reference to the Firestore database.
2. Read (Retrieve) Operations:
   - The `getProducts` function retrieves product data from the Firestore database by querying the "Products" collection. It orders the results by the "createdDate" field in descending order and populates an array with the retrieved data.
3. Create Operation:
   - The `addProduct` function adds a new product to the Firestore database under the "Products" collection.
4. Delete Operation:
   - The `deleteProduct` function removes a product from the Firestore database based on the provided product ID.
5. Update Operation:
   - The `updateProduct` function updates an existing product in the Firestore database.

The file encapsulates these CRUD functionalities within the `MyFirebase` module, and the modules using Functions style by **John**.

### Product

The Product component represents a single product item. It receives props such as product (the product object to display), onAddProductToBuy (a function to add the product to the cart), onDeleteProduct (a function to delete the product), and onUpdateProduct (a function to update the product details).

Inside the component, it manages state using the useState hook to control the visibility of the edit modal.

The onAddToCart function is triggered when the "Add to Cart" button is clicked, invoking the onAddProductToBuy function with the product as an argument. The onDelete function is triggered when the "Delete Product" button is clicked, invoking the onDeleteProduct function with the product's ID as an argument.

The toggleUpdateProductModal function toggles the visibility of the edit modal when the "Edit Product" button is clicked.

The component renders the product details, including the image, name, and price. It also provides buttons for adding the product to the cart, deleting the product, and editing the product.

If the showEditModal state is true, the UpdateModal component is rendered, allowing users to edit the product details.

Finally, the Product component defines propTypes to specify the expected types for the props passed to it, ensuring proper data validation and usage. In this case, the product prop is required and must be an object, and the parameters prop is required and must be a function.

### Pagination

The Pagination.jsx file implements a pagination component for displaying page numbers and allowing users to navigate through different pages of content.

It receives props such as pageCount (total number of pages), currentPage (currently active page), and setProductPage (a function to set the active page).

Inside the component, it generates a list of page numbers based on the pageCount prop. Each page number is wrapped in a list item with a link that triggers the setPage function when clicked, updating the active page.

The pagination component is styled using Bootstrap's pagination classes and is aligned to the center of the page using flexbox.

### UpdateModal

The UpdateModal component is a form for updating product details. It receives props such as product (the current product object), toggleUpdateProductModal (a function to toggle the visibility of the modal), and onUpdateProduct (a function to update the product).

Inside the component, it maintains state using the useState hook to track changes to the current product being edited. The handleChange function updates the currentProduct state whenever a form input value changes.

The handleSubmit function is triggered when the form is submitted. It prevents the default form submission behavior, calls the onUpdateProduct function with the updated product data, and then closes the modal by calling toggleUpdateProductModal.

The form consists of inputs for the product name, price, and image URL. Each input is controlled by its respective state value from the currentProduct state.

The two buttons at the bottom of the modal allow users to close the modal without making changes or submit the form to update the product details. These buttons are evenly distributed using flexbox to ensure proper alignment.

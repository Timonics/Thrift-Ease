# ThriftEase

ThriftEase is a platform where users can buy and sell second-hand products with ease. It allows users to list items for sale, search for products, and negotiate prices. The platform focuses on making second-hand trading simple, transparent, and efficient.

---

## Features

### User Features

- **User Registration and Authentication**

  - Google OAuth integration for quick and secure sign-in.

- **Sell Items**

  - List second-hand items with details like name, description, price, condition, and delivery options.
  - Add multiple images to showcase products.

- **Search and Explore**

  - Search for products by keywords and categories.
  - Filter by condition, price, and location.

- **Negotiate Deals**

  - Option to mark prices as negotiable and communicate directly with sellers.

- **Dashboard**

  - Manage listings and view favorite items and past orders.

### Admin Features

- **Moderation**
  - Approve or reject listings.
  - Monitor user activity to ensure a safe trading environment.

---

## Tech Stack

### Backend

- **Node.js** with **Express.js** for the server-side logic.
- **PostgreSQL** as the relational database.
- **Sequelize ORM** for database operations.
- **Cloudinary** for image storage and management.

### Frontend

- **React** for building a dynamic and responsive user interface.
- **TypeScript** for type safety.
- **Tailwind CSS** for styling.

### Other Tools

- **JWT** for secure session management.
- **js-cookie** for managing cookies.

---

## Installation

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v13 or higher)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/thriftease.git
   ```

2. Navigate to the project directory:

   ```bash
   cd thriftease
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up the database:

   - Create a PostgreSQL database.
   - Update the `config/database.js` file with your database credentials.

5. Run migrations to create tables:

   ```bash
   npx sequelize-cli db:migrate
   ```

6. Seed initial data (optional):

   ```bash
   npx sequelize-cli db:seed:all
   ```

7. Start the development server:

   ```bash
   npm run dev
   ```

8. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

---

## API Endpoints

### Authentication

- **POST** `/api/auth/login` - Log in a user.
- **POST** `/api/auth/register` - Register a new user.
- **POST** `/api/auth/logout` - Log out the user.

### Products

- **GET** `/api/products` - Get all products.
- **GET** `/api/products/:id` - Get details of a specific product.
- **POST** `/api/products` - Create a new product listing.
- **PUT** `/api/products/:id` - Update a product.
- **DELETE** `/api/products/:id` - Delete a product.

### Search

- **GET** `/api/products/search?query=<term>` - Search for products.

---


## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions, suggestions, or support, please reach out at [support@thriftease.com](mailto\:support@thriftease.com).


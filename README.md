# ThriftEase

ThriftEase is a platform where users can buy and sell second-hand products with ease. It allows users to list items for sale, search for products, and negotiate prices. The platform focuses on making second-hand trading simple, transparent, and efficient.

---

## ✨ Features
- **User Authentication** – secure sign-up/login with JWT & refresh tokens  
- **Product Listings** – add, edit, and manage thrifted items with images  
- **Search & Filtering** – find products by category, price, or keywords  
- **Featured Products** – admin-controlled spotlight items  
- **Shopping Cart** – add/remove items, persistent across sessions  
- **Order Management** – checkout flow and order tracking  
- **Responsive UI** – mobile-friendly design built with modern React tooling
- **Dashboard** - Manage listings and view favorite items and past orders.

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
   git clone https://github.com/timonics/thrift-ease.git
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
   - Update the `config/config.js` and `config/config.ts` file with your database credentials.

5. Run migrations to create tables:

   ```bash
   npm run migrate
   ```

6. Seed initial data (optional):

   ```bash
   npm run seed
   ```

7. Start the development server:

   ```bash
   npm run dev
   ```

8. Open your browser and navigate to:

   ```
   http://localhost:3002
   ```


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


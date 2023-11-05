**Joker Tribute & Authentication App**

**Description:**
This GitHub repository is a comprehensive project that combines a tribute page to the Joker with a sophisticated authentication system. The tribute page introduces users to the iconic character, Joker, while offering an option to read more. To access the extended content, users need to log in. The app leverages the MERN (MongoDB, Express, React, Node.js) stack, as well as JWT (JSON Web Tokens) for user authentication.

**Frontend: React Tribute Page**
- The frontend is built using React and includes a tribute page dedicated to the Joker.
- The tribute page provides information about the Joker character's history, evolution, and impact on pop culture.
- Users can access the "Read More" option, but it's only available to authenticated users.

**Frontend: React User Authentication**
- The app includes components for user registration and login.
- It uses `react-router-dom` for client-side routing, allowing users to navigate between different views.
- User registration enforces validation for the username, password, and email, ensuring secure account creation.

**Frontend: UserContext and JWT**
- The app manages user authentication and profiles through the `UserContext`.
- Upon successful login, the app generates JWT tokens for secure authentication.
- JWTs grant access to the "Read More" content.

**Frontend: Toast Notifications**
- `react-toastify` is employed for user-friendly notifications and feedback, enhancing the user experience.

**Backend: Node.js and Express**
- The backend is developed using Node.js and Express.
- It features endpoints for user registration, login, profile retrieval, and logout.
- User data is securely stored in a MongoDB database, ensuring data integrity.

**Security: JWT and Bcrypt**
- User authentication is strengthened through the use of JSON Web Tokens (JWT).
- Passwords are hashed using bcrypt before they are stored, bolstering security practices.

**How It Works:**
1. **Tribute Page**: The app starts with the tribute page to the Joker, providing information and engaging content.
2. **Read More**: To access the extended content, users click on "Read More." However, this option is only available to authenticated users.
3. **Register**: Users can register by clicking on "Register" if they don't have an account.
4. **Log In**: After registration, users can log in using their credentials.
5. **Read More Content**: Once logged in, users gain access to the "Read More" content, enriching their experience.
6. **Profile**: Users can access their profiles, where user data is loaded securely via JWT.
7. **Log Out**: Logging out is secure and clears the JWT token, protecting users from unauthorized access.

**Getting Started:**
1. Clone or download the repository.
2. Navigate to the project's root folder.
3. Run npm install to install dependencies for both the frontend and backend.
4. Create a `.env` file at the root of the *Backend folder* with `port at 8000`, `MONGODB_URI`, and `SECRET_KEY` inside the dotenv.
5. Start the server by running `npm run dev`.
6. Start the React app by running `npm run dev` in the frontend folder.

**Contributions:**
Contributions and improvements are encouraged. Fork the repository, implement changes, and submit a pull request to enhance the project further.

**Author:**
- Okunola Olayemi

**Acknowledgments:**
- The project is a result of the powerful MERN stack and various libraries and tools. It wouldn't be possible without their contributions.

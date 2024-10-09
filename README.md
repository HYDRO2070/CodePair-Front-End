# CodePair Frontend

Welcome to the **CodePair Frontend** repository! CodePair is an innovative platform designed to help users enhance their coding skills through a wide array of Data Structures and Algorithms (DSA) challenges. Built with **React**, our frontend provides a seamless and interactive user experience.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Interactive User Interface**: A modern and responsive design for an optimal coding experience.
- **User Authentication**: Secure sign-up and login functionalities with JWT.
- **Problem Sets**: Explore a wide variety of coding problems, categorized by difficulty.
- **Code Editor**: An integrated code editor that supports syntax highlighting and error detection.
- **Real-Time Code Execution**: Write, run, and test your code in multiple programming languages.
- **User Profiles**: View your coding stats, including solved problems and challenges completed.

## Technology Stack

- **Frontend**: 
  - **React**: A powerful JavaScript library for building user interfaces.
  - **Redux**: For state management, ensuring a consistent application state.
  - **Axios**: For making HTTP requests to the backend API.
  - **React Router**: For seamless navigation between different pages.

- **Styling**: 
  - **CSS/SCSS**: For custom styling and layout designs.
  - **Bootstrap/Tailwind CSS** (if applicable): For responsive design.

## Getting Started

To set up the CodePair frontend locally, follow these instructions:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/YOUR_GITHUB_USERNAME/CodePair-Frontend.git
    cd CodePair-Frontend
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Environment Variables**: Create a `.env` file in the root directory and add your API URL:
    ```
    REACT_APP_API_URL=http://localhost:3000
    ```

4. **Start the Development Server**:
    ```bash
    npm start
    ```

5. **Access the Application**: Open your browser and go to `http://localhost:3000`.

## Usage

- **Sign Up / Log In**: Create a new account or log in to an existing account.
- **Explore Problems**: Navigate to the problem sets and select challenges to solve.
- **Code Submission**: Write and submit your code, and receive immediate feedback.
- **View Profile**: Check your user profile for statistics on solved problems.

## API Integration

The CodePair frontend communicates with the backend API to fetch data. Key API endpoints include:

- **`POST /api/signup`**: Register a new user.
- **`POST /api/login`**: Authenticate a user and obtain a JWT.
- **`GET /api/problemset`**: Retrieve all available problems.
- **`POST /api/run-code`**: Submit code for execution and get results.

For a complete list of API endpoints, refer to the [backend repository](https://github.com/HYDRO2070/CodePair-Back-End).

## Contributing

We welcome contributions! If you'd like to contribute to CodePair, please fork the repository and create a pull request. Make sure to follow the project's coding standards and guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Thank you for checking out CodePair! We hope you find it useful for sharpening your coding skills. Happy coding!

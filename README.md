<<<<<<< HEAD
## User List and Details Application

This project is a simple React-based application to display a list of users with the ability to view detailed information about each user. The application supports both light and dark modes and includes sorting and search functionalities for better user experience.

# Features
## Home Page
User List: Displays a grid of users fetched from a backend or API.

Sort A-Z Button: Allows sorting users alphabetically by name.

Search Bar: Enables searching users by name.

Dark Mode Toggle: Switches between light and dark themes for the entire application.

## User Details Page
Displays detailed information about the selected user, including name, email, and city.

Includes a Go Back Button to return to the home page.

# Project Setup
## Prerequisites
Ensure the following are installed on your local system:

1)Node.js (v14 or later)

2)npm (Node Package Manager) or yarn

# Installation Steps
## Clone the Repository:
git clone https://github.com/Yashwanth1124/Wisdom-peak-Analytics.git

cd <project-folder>

## Install Dependencies: Run the following command to install all the required packages:
npm install

## Start the Development Server: Launch the application on your local machine:
npm start

This will start the React development server, and the application will be accessible at http://localhost:3000.

# Folder Structure
## The project is organized as follows:
src/
  ├── components/
  │   ├── Home/
  │   │   ├── index.js
  │   │   ├── index.css
  │   ├── UserDetails/
  │       ├── index.js
  │       ├── index.css
  ├── App.jsx
  ├── index.js
  └── styles/
      └── variables.css

# Key Files and Their Roles
## App.js:
The main entry point that renders the application and handles routing between Home and User Details pages.

## Home/index.js: 
The component for the home page, displaying the user list and controls (search, sort, dark mode toggle).

## UserDetails/index.js:
The component for the user details page, displaying information about a single user.

## Home/index.css:
Contains the styles specific to the home page.

## UserDetails/index.css: 
Contains the styles specific to the user details page.

# Responsive Design
The application is fully responsive and adapts to various screen sizes.

On smaller screens, the dark mode toggle button appears below the title to avoid overlap.

# Technologies Used
React.js: For building the user interface.

CSS: For styling the application, including light and dark modes.

# License
This project is licensed under the MIT License. See the LICENSE file for details.

# Contributing
Contributions are welcome! Please fork this repository and submit a pull request with your changes.

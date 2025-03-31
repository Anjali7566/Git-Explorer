# GitHub Explorer Mobile App

## Overview
GitHub Explorer is a React Native mobile application that allows users to search for GitHub repositories and view detailed information about them. Users can also mark repositories as favorites for easy access. The app provides a seamless user experience with a responsive design, error handling, and additional features like dark mode and pagination.

## Features

### 1. Search for Repositories
- Users can search for repositories using a search bar.
- Fetches and displays repository results from the GitHub REST API.

### 2. Repository Details
- Displays essential details for each repository:
  - Repository name
  - Description
  - Number of stars
  - Number of forks
  - Primary programming language
  - Owner's username and avatar
- Clicking on a repository opens a detailed view with all the above information.

### 3. Favorites
- Users can mark repositories as "favorites."
- A separate screen lists all favorited repositories.

### 4. Responsive Design
- Ensures a smooth experience across different screen sizes.

### 5. Error Handling
- Gracefully handles API errors, including:
  - No internet connection
  - No repositories found
  - API rate limits

### 6. Additional Features (Bonus)
- **Infinite Scrolling/Pagination:** Efficiently loads search results as the user scrolls.
- **Dark Mode Toggle:** Allows users to switch between light and dark themes.
- **Additional Repository Details:** Displays repository creation date and last update date.
- **List of Contributors:** Provides a list of contributors for a selected repository.

## Tech Stack
- **React Native**: Framework for building mobile apps.
- **Redux**: State management.
- **React Navigation**: Navigation between screens.
- **GitHub REST API**: Fetching repository data.
- **UI Library/Custom CSS**: Styling the application.

## Installation and Setup

### Prerequisites
- Node.js and npm/yarn installed
- Git installed
- React Native development environment set up ([Guide](https://reactnative.dev/docs/environment-setup))

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/github-explorer.git
   cd github-explorer
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Run the app on an emulator or physical device:
   ```sh
   npx expo start  # If using Expo
   npm run android  # For Android
   npm run ios  # For iOS (Mac only)
   ```


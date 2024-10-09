# Nutrition App

## Introduction

The Nutrition App is a React-based web application that allows users to input ingredients and receive detailed nutritional information for their meals or recipes. This app is designed to help users make informed decisions about their diet by providing easy access to nutritional data.

## Features

- Input multiple ingredients with quantities
- Fetch and display detailed nutritional information
- User-friendly interface with clear instructions
- Loading indicator for API requests
- Error handling with user-friendly messages
- Link to a related Recipes app

## Technologies Used

- **React**: Chosen for its component-based architecture and efficient rendering.
- **useState and useEffect Hooks**: For managing component state and side effects.
- **Fetch API**: For making HTTP requests to the Edamam Nutrition API.
- **SweetAlert2**: For displaying user-friendly error messages.
- **CSS**: For styling the application.

These technologies were chosen to create a modern, efficient, and user-friendly web application with smooth data fetching and state management capabilities.


## How to Use

1. Enter ingredients with their quantities in the input field. Separate each ingredient with a comma.
Example: "1 apple, 2 bananas, 100g chicken breast"
2. Click the "Submit" button or press Enter.
3. The app will fetch and display the nutritional information for the entered ingredients.
4. If there's an error, the app will show a user-friendly error message.

## API Integration

This app uses the Edamam Nutrition API to fetch nutritional data. The API call is made using the following credentials:

- API_ID
- API_KEY

Note: In a production environment, these credentials should be stored securely and not exposed in the client-side code.

## Component Structure

- **App.js**: The main component that handles state management, API calls, and renders child components.
- **Info.js**: Displays individual nutritional information items.
- **Ingr.js**: Likely displays the list of entered ingredients.
- **LoaderPage.js**: Displays a loading indicator during API requests.


---

This Nutrition App provides a simple yet powerful tool for users to quickly access nutritional information for their meals and recipes. By leveraging modern web technologies and a reliable nutrition API, it offers valuable insights to help users make informed dietary choices.

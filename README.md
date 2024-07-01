# Weather forecast

Welcome to the Weather forecast site. Find out what your local weather is looking like.



This web application provides real-time weather for different cities. Users can input a city name and get the current weather details.

This project uses REST API Tech Stack

- NodeJS
- ExpressJS
- EJS
- API from openweathermap.org

## Getting started

### Prerequisites
Before running the application, make sure you have Node.js installed.

- Node.js: [Download](https://nodejs.org/en)

### Installation
1. Clone this repository to your local machine:

    `git clone git@github.com:rehanshami/weather-app.git`

2. Navigate to the project directory:

    `cd weather-app`

3. Install the required dependencies using npm:

    `npm install`

(IMP: Remember to log in to [api.weatherstack.com](https://weatherstack.com/documentation) using your username and password. This will generate a bearer token that you can use in your project. -(index.js code line 9 - 14))

## Usage
1. Run the application:

    `nodemon index.js` / `npm start`

    This will start the development server.

2. Open your web browser and go to `http://localhost:3000` to access the Weather Forecast Website.

3. Enter a city's name in the search bar to get weather details for that city.

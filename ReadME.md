

# Node News App

Node News App is a web application built with Node.js and Express that allows users to view the latest news headlines, search for specific news articles, and filter news based on search queries.

## Features

- **Latest News Headlines:** View the latest news headlines with images, publication dates, titles, and descriptions.

- **Search Functionality:** Search for news articles based on specific keywords.

- **Country Filtering:** Filter news headlines by selecting a specific country.

- **Default Image Handling:** In case an article lacks an image, a default image is displayed.

## Prerequisites

Before you run the application, ensure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/inaveed-git/NodeNews.git
   ```

2. Navigate to the project directory:

   ```bash
   cd NodeNews
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Obtain a News API key from [https://newsapi.org/](https://newsapi.org/).

2. Open `src/routes/news.js` and replace `'YOUR_API_KEY'` with your actual News API key.

```javascript
const apiKey = 'YOUR_API_KEY';
```

## Running the App

1. Start the application:

   ```bash
   node app.js
   ```

2. Open your web browser and go to [http://localhost:8080](http://localhost:8080) to view the Node News App.

## Customization

Feel free to customize the application further, such as adding additional features, enhancing the user interface, or incorporating more APIs.


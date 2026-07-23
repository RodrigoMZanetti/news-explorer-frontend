# News Explorer — Frontend

A full-stack news search application where users can search for articles by keyword, save favorites, and manage their personal collection. Built with React and connected to a Node.js/Express backend with JWT authentication.

## Live Demo

https://newsexplorerzanetti.mooo.com

## Tech Stack

- **Frontend:** React, JavaScript, CSS, Vite
- **Auth:** JWT, protected routes, session persistence
- **API:** NewsAPI (third-party news source)

## Features

- Search news articles by keyword via NewsAPI
- Save favorite articles to a personal collection
- Register and log in with secure JWT authentication
- Session restored automatically on page reload
- View and delete saved articles
- Responsive layout for mobile and desktop

## Environment Variables

To run locally, create a `.env` file in the project root:

VITE_NEWS_API_KEY=your_key_here

Get your free key at [newsapi.org](https://newsapi.org).

## Running Locally

```bash
git clone https://github.com/RodrigoMZanetti/news-explorer-frontend
cd news-explorer-frontend
npm install
npm run dev
```

## Related Repository

- Backend: [news-explorer-backend](https://github.com/RodrigoMZanetti/news-explorer-backend)

## Author

Rodrigo Zanetti — [LinkedIn](https://linkedin.com/in/rodrigomaturanozanetti) · [GitHub](https://github.com/RodrigoMZanetti)

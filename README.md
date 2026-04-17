# EduFlow | EdTech Aggregator

A minimalist web application designed to help students find premium courses at low prices and curated YouTube revision paths.

## Key Features
- **Smart Aggregation**: Tie-ups with platforms like PW and Unacademy.
- **Panic Mode**: A dramatic UI shift that filters for only "One-Shot" revision videos for the night before exams.
- **Dynamic Filters**: Automatically hides/shows semester options based on the selected stream.
- **Live Search**: Real-time fuzzy searching for courses and providers.

## Tech Stack
- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB Atlas (Cloud).

## How to Run
1. Clone the repo.
2. Run `npm install`.
3. Create a `.env` file with your `MONGO_URI`.
4. Run `node seed.js` to populate the database.
5. Run `node server.js` to start the app.
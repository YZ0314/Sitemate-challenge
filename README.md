# Sitemate Challenge📝

## Project Overview

This project includes a backend API and a frontend React application. The backend API is built using Node.js and Express framework, and uses SQLite for data storage. The frontend React application interacts with the API and displays data. 
## Features

### Backend API

- **Create Issue**: POST `/api/issues`
- **Get All Issues**: GET `/api/issues`
- **Update Issue**: PUT `/api/issues/:id`
- **Delete Issue**: DELETE `/api/issues/:id`

### Frontend React Application

- Create new issue
- Display all issues
- Update issue
- Delete issue

## Local Development

### Frontend

1. Navigate to the frontend directory:

```sh
cd client/my-app
```

2. Install dependencies:
```sh
npm install
```

3. Run the development server:
```sh
npm start
```

### Backend

1. Navigate to the backend directory:
```sh
cd server
```

2. Install dependencies
```sh
npm install
```

3. Run the development server:
```sh
npm run build
npm start
```

### Unit Test
1. Navigate to the backend directory:
```sh
cd server
```
2. Run the tests

```sh
npx playwright test
```

### Bonus point achieved 😃
- A polished UI ✨(I hope it lives up to expectations)
- Add unit tests ✅ (playwright)
- Introduce a data store ✅ (sqlite)
- Create an interactive client ✅ (React)




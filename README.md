# Rick and Morty Explorer

This application allows users to explore characters, episodes, and locations from the Rick and Morty universe. With an intuitive interface, users can browse and filter detailed information about characters, episodes, and locations using data from the [Rick and Morty API](https://rickandmortyapi.com/).

### Demo

The application is hosted on Vercel and is accessible [here](https://rick-and-morty-shindiri.vercel.app/).

### Technologies

- **React** + **Vite** – For building a responsive and fast user interface.
- **TypeScript** – Provides static typing for improved code quality.
- **React Router** – Client-side routing to navigate between pages.
- **TanStack Query** – For efficient data fetching and caching.
- **Axios** – HTTP client to make API requests.
- **Lucide React** – Icon library used throughout the UI.
- **CSS Modules / Tailwind CSS** – For component-based styling.
- **ShadCN**: A set of UI components built with Radix UI and Tailwind CSS for accessible and customizable design.
- **Vercel** – Deployment platform for hosting the application.
- **Firebase Auth** – Authentication powered by Firebase, enabling secure user login and registration

### Features

- **Character Search**: Filter characters by name and status.
- **Episode and Location Browsing**: View episode and location details.
- **Infinite Scrolling**: Automatically loads more items as you scroll.
- **Auth Protected Routes**: Restrict access to certain routes for authenticated users only.
- **Responsive Design**: Optimized for both mobile and desktop screens.

### Getting Started

#### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

#### Environment Variables

For Firebase authentication, add the following environment variables to a `.env` file at the root of the project:

```bash
  VITE_FIREBASE_API_KEY=API_KEY
  VITE_FIREBASE_AUTH_DOMAIN=AUTH_DOMAIN
  VITE_FIREBASE_PROJECT_ID=PROJECT_ID
  VITE_FIREBASE_STORAGE_BUCKET=STORAGE_BUCKET
  VITE_FIREBASE_MESSAGING_SENDER_ID=MESSAGING_SENDER_ID
  VITE_FIREBASE_APP_ID=APP_ID
  VITE_FIREBASE_MEASUREMENT_ID=MEASUREMENT_ID
```

#### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Lukiano99/Rick-and-Morty-Shindiri.git
   cd Rick-and-Morty-Shindiri
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

#### Running the Application

1. Install dependencies:
   ```bash
   npm run dev
   ```
2. Open http://localhost:5173 to view the application in your browser:
   ```bash
   npm run dev
   ```

The application should be available at [http://localhost:5173](http://localhost:5173).

### Project Structure

- **src/components**: Reusable UI components.
- **src/pages**: Pages corresponding to different routes.
- **src/hooks**: Custom hooks for API requests and intersection observer.
- **src/routes**: Routing setup and configurations.
- **src/types**: Type definitions for better type safety.

Thank you for checking out this project! Contributions and feedback are welcome.

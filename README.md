# Meditation-app

## Overview

This project is a web application built with Next.js that includes user authentication via Firebase. It uses environment variables to store configuration securely. Users can clone this repository and set up their own environment for local development.

## Prerequisites

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16.x or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

    2. Install dependencies
Run the following command to install the required dependencies:

npm install

    3. Set up Firebase
Go to the Firebase Console.
Create a new Firebase project or use an existing one.
Navigate to Project settings > General and scroll down to Your apps.
Choose Web app and register your app.
Copy the Firebase configuration keys.

    4. Create a .env.local file
In the root directory of your project, create a .env.local file and add the following environment variables:

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here

Note: Ensure that the .env.local file is not tracked by Git. Check that the following line is in your .gitignore:

How It Works
This project uses the Next.js App Router for routing, React components for building the UI, and Firebase for authentication. The firebaseConfig is securely accessed through environment variables stored in .env.local.

    Troubleshooting
If you encounter an error related to missing environment variables, double-check that your .env.local file is correctly configured and named.
Ensure you are running the project with Node.js version 16.x or higher.

    Contributing
Feel free to open issues and submit pull requests if you have suggestions or improvements!
```

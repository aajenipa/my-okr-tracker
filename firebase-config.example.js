// Copy this file to firebase-config.js and fill in the settings from
// Firebase console > Project settings > Your apps > Web app.
// firebase-config.js is listed in .gitignore so real values never get committed.
// In production the GitHub Actions workflow writes it from the FIREBASE_CONFIG secret.
export const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

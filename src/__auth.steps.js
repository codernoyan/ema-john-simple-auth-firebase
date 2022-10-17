/**
 * -----------
 * AUTH SETUP
 * -----------
 * 1. create firebase project
 * 2. enable web
 * 3. enable sign in method
 * 4. install firebase into project
 * 5. get firebase config in your firebase.config.js file
 * 6. export firebase app from firebase.config.js file
 */

/**
 * 1. create UserContext (AuthContext): UserContext ----> component name
 * useContext provides AuthContext
 * 2. create AuthContext
 * 3. set AuthContext.Provider
 * 4. make sure you set the children
 * 5. export AuthContext to be used inside useContext hook
 * 6. get form data
 * 7. getAuth in the UserContext
 */

/**
 * -----------------
 * FIREBASE HOSTING
 * -----------------
 * one time for each computer
 * 1. npm install -g firebase-tools
 * 2. firebase login
 * 
 * for each project one time
 * 3. firebase init
 * Make sure for public directory: you select : build
 * single page application: yes
 * github: y | n
 * 
 * for every deploy
 * npm run build
 * firebase deploy
 */
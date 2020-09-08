import { environment } from './environments/environment';
// import * as firebase from 'firebase'; THIS IMPORT BREAKS THE SCRIPT EXECUTION IN BROWSER BUT WITHOUT IT firebase OBJECT IS UNDEFINED

console.log('background.ts start');

firebase.initializeApp(environment.firebaseConfig);

// auto login on startup
/*chrome.runtime.onStartup.addListener(() => {*/
console.log('login start');

firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((userCredential) => console.log(`Logged in: ${userCredential.user}`))
    .catch((error) => console.log(`Sign in error: ${error}`));
// });

chrome.contextMenus.create({
        title: 'Add Task',
        id: 'addTask',
        contexts: ['selection']
});

chrome.runtime.onInstalled.addListener(() => {
});

console.log('background.ts end');

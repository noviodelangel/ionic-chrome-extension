import { environment } from '../environments/environment';

// @ts-ignore
firebase.initializeApp(environment.firebaseConfig);

// auto login on startup
// @ts-ignore
firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((userCredential) => alert(`Logged in: ${userCredential.user?.uid}`))
    .catch((error) => console.log(`Sign in error: ${error}`));

chrome.contextMenus.create({
        title: 'Add Task',
        id: 'addTask',
        contexts: ['selection']
});

chrome.runtime.onInstalled.addListener(() => {
});


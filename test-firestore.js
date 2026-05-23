const firebase = require('firebase/compat/app');
require('firebase/compat/firestore');

const firebaseConfig = {
  "projectId": "tera-physics-t07pf",
  "appId": "1:388054171548:web:5d041352ec6b776da25259",
  "apiKey": "AIzaSyAM0GeYvvc82IRY9Lycrs1x8M8LjbC92Bc"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app, "ai-studio-3981d5da-68d7-40ff-a8e2-20fe21ccec97");
console.log(db);

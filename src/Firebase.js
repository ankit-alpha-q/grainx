import firebase, { analytics, auth, firestore } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

firebase.initializeApp({
  apiKey: "AIzaSyDHpug7s3lCSGW2ETiwa8mTbHrN-0GmFOo",
    authDomain: "grainx-16962.firebaseapp.com",
    databaseURL: "https://grainx-16962.firebaseio.com",
    projectId: "grainx-16962",
    storageBucket: "grainx-16962.appspot.com",
    messagingSenderId: "1096965293907",
    appId: "1:1096965293907:web:77ab82587ab5e76e5d43a6",
    measurementId: "G-E78Z05D4SD"
})

const auth1 = firebase.auth();
const firestore1 = firebase.firestore();
const analytics1 = firebase.analytics();

export {auth1};
export {firestore1};
export default {analytics1};

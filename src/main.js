import { FIREBASE_CONFIG } from './config.js';
import firebase from 'firebase'

const fb = firebase.initializeApp(FIREBASE_CONFIG);
fb.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

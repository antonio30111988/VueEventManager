import Firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCOJVk1QEU91PL2_YOPiLh1NbqO7qFS3P4",
  authDomain: "vueeventmanager.firebaseapp.com",
  databaseURL: "https://vueeventmanager.firebaseio.com",
  projectId: "vueeventmanager",
  storageBucket: "",
  messagingSenderId: "286653459435"
};

export const firebaseApp=Firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')

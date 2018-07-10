import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// firebase init
const config = {
    apiKey: "AIzaSyAXpshTRhotw_y1zucOj9mUq1qvg90q_1g",
    authDomain: "nouvomo.firebaseapp.com",
    databaseURL: "https://nouvomo.firebaseio.com",
    projectId: "nouvomo",
    storageBucket: "nouvomo.appspot.com",
    messagingSenderId: "701748038915"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const wordsCollection = db.collection('words')
const ideasCollection = db.collection('ideas')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    wordsCollection,
    ideasCollection
}

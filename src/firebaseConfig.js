import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// firebase init
const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
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

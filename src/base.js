import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAvxORRrv2foejdTx0BYfFaRpuGjcJuXpo",
  authDomain: "recettes-app-bb45a.firebaseapp.com",
  databaseURL: "https://recettes-app-bb45a.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base

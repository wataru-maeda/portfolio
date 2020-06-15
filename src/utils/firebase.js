import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import config from './config'

firebase.initializeApp(config)

export const auth = firebase.auth()
export const storage = firebase.storage().ref()

export default firebase

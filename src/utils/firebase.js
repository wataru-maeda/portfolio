import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/performance'
import 'firebase/analytics'
import { firebaseConfig } from './config'

firebase.initializeApp(firebaseConfig)
firebase.analytics()

export const auth = firebase.auth()
export const storage = firebase.storage().ref()
export const performance = firebase.performance()

export default firebase

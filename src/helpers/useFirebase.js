import firebase from 'firebase/app'
import { useAuth } from '@vueuse/firebase'
import 'firebase/auth'

import { firebaseConfig } from '-/config/firebase'

firebase.initializeApp(firebaseConfig)

const { auth } = firebase
const { GoogleAuthProvider } = auth

const { isAuthenticated, user } = useAuth()

export const authetication = () => useAuth()
    const googlePopup = () => auth().signInWithPopup(new GoogleAuthProvider())
    const signOut = () => auth().signOut()
    return { googlePopup, signOut, isAutheticated, user }

export const database = () => {}
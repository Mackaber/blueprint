import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './navigation';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAyvNWwnZaxu1InlMiNiuRVsqn9JbvttM0",
  authDomain: "navigation-85a0f.firebaseapp.com",
  databaseURL: "https://navigation-85a0f-default-rtdb.firebaseio.com",
  projectId: "navigation-85a0f",
  storageBucket: "navigation-85a0f.appspot.com",
  messagingSenderId: "136690178681",
  appId: "1:136690178681:web:4b52b369cb22eac9de92a8"
};

export default function App() {

  firebase.initializeApp(firebaseConfig);

  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
}


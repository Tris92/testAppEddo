import React from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBNw9f2cVDdb3uB00TSOupaS8iI1zygw1U",
  authDomain: "apptest-af6ba.firebaseapp.com",
  databaseURL: "https://apptest-af6ba.firebaseio.com",
  projectId: "apptest-af6ba",
  storageBucket: "apptest-af6ba.appspot.com",
  messagingSenderId: "130288428657",
  appId: "1:130288428657:web:4b271c25d7af5ed0cd9dd0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics().logEvent('notification_received');


// import the different screens
import Loading from "./screens/Loading";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Main from "./screens/Main";
// import Otp from "./components/Phone/Otp";

// create our app's navigation stack
const RootStack = createSwitchNavigator(
  {
    Loading: Loading,
    SignUp: SignUp,
    Login: Login,
    Main: Main,
    // Otp: Otp
  },
  {
    initialRouteName: "Loading"
  }
);

const App = createAppContainer(RootStack);
export default App;

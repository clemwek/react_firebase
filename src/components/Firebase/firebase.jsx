import app from 'firebase/app';
require('firebase/auth')

const firebaseConfig = {
  apiKey: "AIzaSyAuotF1baocIQNHj48FGh6un5V5NACpdN8",
  authDomain: "test-eb719.firebaseapp.com",
  databaseURL: "https://test-eb719.firebaseio.com",
  projectId: "test-eb719",
  storageBucket: "test-eb719.appspot.com",
  messagingSenderId: "491590089111",
  appId: "1:491590089111:web:35e3a841cebedebe"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.default.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;

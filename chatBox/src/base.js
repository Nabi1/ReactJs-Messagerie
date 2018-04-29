import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzXXXXXXXXXXXXXXtxMd63x3g6cw",
    authDomain: "my-very-first-chatbox.firebaseapp.com",
    databaseURL: "https://my-very-first-chatbox.firebaseio.com",
};

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())


export default base;

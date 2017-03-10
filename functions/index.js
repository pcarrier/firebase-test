const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.hello = functions.https.onRequest((req, resp) => resp.send('hello!'));

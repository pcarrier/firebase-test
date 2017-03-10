require('@google-cloud/debug-agent').start();

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const murmur3 = require('node-murmur3');

admin.initializeApp(functions.config().firebase);

exports.hello = functions.https.onRequest((req, resp) => resp.send(murmur3.hash32(req.body).toString(16)));

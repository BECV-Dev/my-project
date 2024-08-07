const admin = require('firebase-admin');
const serviceAccount = require('./tareas-firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Opcional si usas Firestore sin Realtime Database
});

module.exports = admin;
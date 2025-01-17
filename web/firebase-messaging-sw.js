importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCGwHvbCTCmmZHI1AG_2LW62zIGZl_eAEo",
  authDomain: "dashboard-iith.firebaseapp.com",
  projectId: "dashboard-iith",
  storageBucket: "dashboard-iith.firebasestorage.app",
  messagingSenderId: "472121739465",
  appId: "1:472121739465:web:c209e655440be93f9d6518",
  measurementId: "G-H0YXVRV2BZ"
};


firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title || 'Background Message Title';
  const notificationOptions = {
    body: payload.notification.body || 'Background Message body.',
    icon: '/icons/Icon-192.png',
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

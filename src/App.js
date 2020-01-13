import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Scanner from './components/Scanner';
import Home from './components/Home';
import Generator from './components/Generator';

const App = () => {

  const pushServerPublicKey = "BIN2Jc5Vmkmy-S3AUrcMlpKxJpLeVRAfu9WBqUbJ70SJOCWGCGXKY-Xzyh7HDr6KbRDGYHjqZ06OcS3BjD7uAm8";
  const isPushNotificationSupported = () => {
    return "serviceWorker" in navigator && "PushManager" in window;
  }

  const registerServiceWorker = () => {
    return navigator.serviceWorker.register("/sw.js");
  }

  const askUserPermission = async() => {
    return await Notification.requestPermission();
  }

  async function createNotificationSubscription() {
    //wait for service worker installation to be ready
    const serviceWorker = await navigator.serviceWorker.ready;
    // subscribe and return the subscription
    return await serviceWorker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: pushServerPublicKey
    });
  }

  function sendNotification() {
    console.log('Here')
    const img = "/images/jason-leung-HM6TMmevbZQ-unsplash.jpg";
    const text = "Take a look at this brand new t-shirt!";
    const title = "New Product Available";
    const options = {
      body: text,
      // icon: "/images/jason-leung-HM6TMmevbZQ-unsplash.jpg",
      // vibrate: [200, 100, 200],
      // tag: "new-product",
      // image: img,
      // badge: "https://spyna.it/icons/android-icon-192x192.png",
      // actions: [{ action: "Detail", title: "View", icon: "https://via.placeholder.com/128/ff0000" }]
    };
    navigator.serviceWorker.ready.then(function(serviceWorker) {
      serviceWorker.showNotification(title, options);
    });
  }

  sendNotification();

  return (
    <Router basename="/">
      <div>
        <ul>
          <li><Link to="/scanner">QR Scanner</Link></li>
          <li><Link to="/generator">QR Generator</Link></li>
        </ul>
        <Route exact path="/" component={Home}/>
        <Route exact path="/scanner" component={Scanner}/>
        <Route exact path="/generator" component={Generator}/>
      </div>
    </Router>
  );
}

export default App;

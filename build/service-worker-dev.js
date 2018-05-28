// This service worker file is effectively a 'no-op' that will reset any
// previous service worker registered for the same host:port combination.
// In the production build, this file is replaced with an actual service worker
// file that will precache your site's local assets.
// See https://github.com/facebookincubator/create-react-app/issues/2272#issuecomment-302832432

console.log('Inject service-worker-dev.js')


self.addEventListener('install', () => {
  self.skipWaiting()
});

self.addEventListener('activate', () => {
  self.clients.matchAll({ type: 'window' }).then(windowClients => {
    for (let windowClient of windowClients) {
      // Force open pages to refresh, so that they have a chance to load the
      // fresh navigation response from the local dev server.
      windowClient.navigate(windowClient.url);
    }
  });
});

navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
  // 检查订阅
  serviceWorkerRegistration.pushManager.getSubscription()
    .then(function(subscription) {
      // 检查是否已经被订阅
      if (!subscription) {
        // 没有
        return;
      }
      // 有
      // doSth();
    })
    .catch(function(err) {
      window.Demo.debug.log('Error during getSubscription()', err);
    });
});

//
// // 在 SW 中使用
// self.registration.showNotification("New mail from Alice", {
//   actions: [{action: 'archive', title: "Archive"}]
// });

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if (event.action === 'archive') {
    alert('archive your email');
  } else {
    clients.openWindow("/settings");
  }
}, false);


self.addEventListener('push', function(event) {
  var title = 'Yay a message.';
  var body = 'We have received a push message.';
  var icon = '/images/icon-192x192.png';
  var tag = 'simple-push-demo-notification-tag';
  var data = {
    doge: {
        wow: 'such amaze notification data'
    }
  };
  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag,
      data: data
    })
  );
});

/* global cordova */
document.addEventListener('deviceready', onDeviceReady, false);

async function onDeviceReady () {
  // Cordova is now initialized. Have fun!

  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

  const requiredPermissionsList = [
    cordova.plugins.diagnostic.permission.CAMERA,
    cordova.plugins.diagnostic.permission.RECORD_AUDIO
  ];

  cordova.plugins.diagnostic.requestRuntimePermissions(function (statuses) {
    for (const permission in statuses) {
      switch (statuses[permission]) {
        case cordova.plugins.diagnostic.permissionStatus.GRANTED:
          console.log('Permission granted to use ' + permission);
          break;
        case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
          console.log('Permission to use ' + permission + ' has not been requested yet');
          break;
        case cordova.plugins.diagnostic.permissionStatus.DENIED_ONCE:
          console.log('Permission denied to use ' + permission + ' - ask again?');
          break;
        case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
          console.log('Permission permanently denied to use ' + permission + ' - guess we wont be using it then!');
          break;
      }
    }
  }, function (error) {
    console.error('The following error occurred: ' + error);
  }, requiredPermissionsList);
}

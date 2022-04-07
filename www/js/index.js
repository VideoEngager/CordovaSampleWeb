document.addEventListener('deviceready', onDeviceReady, false);

async function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    var permissions = cordova.plugins.permissions;
    permissions.checkPermission(permissions.CAMERA, function( status ){
        if ( status.checkPermission ) {
          console.log("Yes :D ");
        }
        else {
            permissions.requestPermission(permissions.CAMERA, success, error);
            function error() {
              console.warn('Camera permission is not turned on');
            }
            function success( status ) {
              if( !status.checkPermission ) error();
            }
        }
      });

      permissions.checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function( status ){
        if ( status.checkPermission ) {
          console.log("Yes :D ");
        }
        else {
            permissions.requestPermission(permissions.WRITE_EXTERNAL_STORAGE, success, error);
            function error() {
              console.warn('WRITE_EXTERNAL_STORAGE permission is not turned on');
            }
            function success( status ) {
              if( !status.checkPermission ) error();
            }
        }
      });

      permissions.checkPermission(permissions.RECORD_AUDIO, function( status ){
        if ( status.checkPermission ) {
          console.log("Yes :D ");
        }
        else {
            permissions.requestPermission(permissions.RECORD_AUDIO, success, error);
            function error() {
              console.warn('RECORD_AUDIO permission is not turned on');
            }
            function success( status ) {
              if( !status.checkPermission ) error();
            }
        }
      });
      await permissions.requestPermission(permissions.CAPTURE_AUDIO_OUTPUT);
      await permissions.requestPermission(permissions.READ_MEDIA_AUDIO);
      await permissions.requestPermission(permissions.READ_MEDIA_VIDEO);
      await permissions.requestPermission(permissions.ACCESS_LOCATION_EXTRA_COMMANDS);
      await permissions.requestPermission(permissions.ACCESS_FINE_LOCATION);
      await permissions.requestPermission(permissions.ACCESS_COARSE_LOCATION);
      await permissions.requestPermission(permissions.CALL_PHONE);
      await permissions.requestPermission(permissions.MODIFY_PHONE_STATE);


        permissions.checkPermission(permissions.MODIFY_AUDIO_SETTINGS, function( status ){
        if ( status.checkPermission ) {
          console.log("Yes :D ");
        }
        else {
            permissions.requestPermission(permissions.MODIFY_AUDIO_SETTINGS, success, error);
            function error() {
              console.warn('MODIFY_AUDIO_SETTINGS permission is not turned on');
            }
            function success( status ) {
              if( !status.checkPermission ) error();
            }
        }
      });

      // First check whether we already have permission to access the microphone.
window.audioinput.checkMicrophonePermission(function(hasPermission) {
	if (hasPermission) {
		console.log("We already have permission to record.");
	} 
	else {	        
		// Ask the user for permission to access the microphone
		window.audioinput.getMicrophonePermission(function(hasPermission, message) {
			if (hasPermission) {
				console.log("User granted us permission to record.");
			} else {
				console.warn("User denied permission to record.");
			}
		});
	}
});
}

cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-android-permissions/www/permissions-dummy.js",
        "id": "cordova-plugin-android-permissions.Permissions",
        "pluginId": "cordova-plugin-android-permissions",
        "clobbers": [
            "cordova.plugins.permissions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-audioinput/www/audioInputCapture.js",
        "id": "cordova-plugin-audioinput.AudioInput",
        "pluginId": "cordova-plugin-audioinput",
        "clobbers": [
            "audioinput"
        ]
    },
    {
        "file": "plugins/cordova-plugin-audioinput/src/browser/AudioInputCaptureProxy.js",
        "id": "cordova-plugin-audioinput.AudioInputCaptureProxy",
        "pluginId": "cordova-plugin-audioinput",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-android-permissions": "1.1.3",
    "cordova-plugin-audioinput": "1.0.2"
}
// BOTTOM OF METADATA
});
# Cordova Sample Web
Demonstrates usage of SmartVideo web widget in Cordova App

## Prerequesties

We use **cordova version 10**

You should use **jdk version 1.8 or 8** to be able to compile cordova 10.

If you are a mac m1 user, you can use azul jdk 8 binaries from here: https://www.azul.com/downloads/?version=java-8-lts&os=macos&package=jdk#download-openjdk
Then set env variables
```
export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-8.jdk/Contents/Home
export JAVA_SDK=/Library/Java/JavaVirtualMachines/zulu-8.jdk/
```

You should install **android sdk**. The easiest way to do this is installing android studio.

Open your android studio, sdk manager and install **Android api level 30**

Install **sdk platform tools** from sdk tools section in sdk manager.

Sen android environment variables
```
export ANDROID_HOME=~/Library/Android/sdk
export ANDROID_SDK_ROOT=~/Library/Android/sdk
export ANDROID_AVD_HOME=~/.android/avd
PATH=$PATH:$HOME/Library/Android/Sdk/emulator
PATH=$PATH:$HOME/Library/Android/Sdk/tools
PATH=$PATH:$HOME/Library/Android/Sdk/tools/bin
PATH=$PATH:$HOME/Library/Android/Sdk/platform-tools
```

install gradle

` npm install -g Gradle`

install ios deploy

`npm install -g ios-deploy`

install cordova by

`npm install cordova@10.0.0  -g`

run this command to see leftover requirements

`cordova requirements`

Other requirements can be found here: https://cordova.apache.org/docs/en/10.x/guide/cli/

#### Note
A cordova plugin **cordova-diagnostic-plugin** is used in this example. It will be downloaded automatically when you run build command for the first time.

### Emulators
Setup xcode emulator for ios.

Setup android emulator from android studio.

## Installation

npm install required

`npm install`

## Configuration
### Cordova Spesific Code
`./www/js/index.js` has cordova spesific code. 

In this example you will find permission request commands for android using cordova-diagonistic-plugin.

### Global Policy Configuration
./config.xml file has access control. set it according to your restriction policy.
```
<allow-intent href="*" />
<access origin="*" />
<allow-navigation href="*" />
```

### Android Configuration
`/platforms/android/app/src/main/AndroidManifest.xml` has android permissions which is required.

`/platforms/android/app/src/main/res/xml/config.xml` has android spesific restrictions.
```
<allow-intent href="*" />
<access origin="*" />
<allow-navigation href="*" />
```

### iOS Configuration

`/platforms/ios/SingleButtonPage/SingleButtonPage-Info.plist` has ios spesific permission settings.

`platforms/ios/SingleButtonPage/config.xml` has ios spesific restrictions.

```
<allow-intent href="*" />
<access origin="*" />
<allow-navigation href="*" />
<preference name="AllowInlineMediaPlayback" value="true" />
```

### Video Engager Configuration
#### Client Side Configuration
Configuration parameters should be set in `www/index.html`.

There are several configuration parameters such as :
- tennantId
- videoengagerUrl
- environment
- deploymentId
- organizationId
- queue

```
// configuration example from the code:
window._genesys.widgets.videoengager.tenantId = parameters[env].tennantId;
window._genesys.widgets.videoengager.veUrl = parameters[env].videoengagerUrl;
window._genesys.widgets.webchat.transport.dataURL = parameters[env].environment;
window._genesys.widgets.webchat.transport.deploymentKey = parameters[env].deploymentId;
window._genesys.widgets.webchat.transport.orgGuid = parameters[env].organizationId;
window._genesys.widgets.webchat.transport.interactionData.routing.targetAddress = parameters[env].queue;
```

You can read below documentation to learn how to get customer side parameters:
https://github.com/VideoEngager/SmartVideoWebSDK/blob/master/click2videoguide.pdf

#### Agent Side Configuration
Agent side settins parameters are explained in this document:
https://drive.google.com/file/d/1ZKyLnzp14xczEoKLaoca29uYthLly0M9/view?usp=sharing

- Go to Genesys -> Apps -> SmartVideo_Settings
- Enter agent side parameters in Genesys section for each parameter


## Build and Test

### Building

First ever build command will return an error about plugins. It will download and install plugin. After the first failed build command, you can safely run build command as regular.

Build command:

`cordova build`

### Testing

Run android emulator from android studio AVD manager to test your code in android emulator.

`cordova run android ` will run app in android emulator

Run iPhone emulator from xcode developer tools to test your code in iPhone emulator.

`cordova run ios` will run app in ios emulator

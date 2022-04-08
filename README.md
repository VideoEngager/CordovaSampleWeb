# Cordova Sample Web
Demonstrates usage of SmartVideo web widget in Cordova App

## Prerequests and installation

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

npm install required

`npm install`

run this command to see leftover requirements

`cordova requirements`

Other requirements can be found here: https://cordova.apache.org/docs/en/10.x/guide/cli/

Setup ios and android emulators from xcode and android studio.

## configuration
./config.xml file has access control. set it according to your restriction policy.
```
<allow-intent href="*" />
<access origin="*" />
<allow-navigation href="*" />
```
`./www/js/index.js` has cordova spesific code. In this example you will find permission request commands for android.

### android
`/platforms/android/app/src/main/AndroidManifest.xml` has android permissions which is required.

`/platforms/android/app/src/main/res/xml/config.xml` has android spesific restrictions.
```
<allow-intent href="*" />
<access origin="*" />
<allow-navigation href="*" />
```

### ios

`/platforms/ios/SingleButtonPage/SingleButtonPage-Info.plist` has ios spesific permission settings.

`platforms/ios/SingleButtonPage/config.xml` has ios spesific restrictions.

```
<allow-intent href="*" />
<access origin="*" />
<allow-navigation href="*" />
<preference name="AllowInlineMediaPlayback" value="true" />
```

## build and test

`cordova build` will build the app

`cordova run android ` will run app in android emulator

`cordova run ios` will run app in ios emulator

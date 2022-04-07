# Cordova Sample Web
Demonstrates usage of SmartVideo web widget in Cordova App

## Prerequests and installation

We use **cordova version 10**

You should use **jdk version 15** or lesser to be able to compile cordova.

If you are a mac m1 user, you can use azul jdk 15 binaries from here: https://www.azul.com/downloads/?package=jdk

You should install **android sdk**. the easiest way to do this is installing android studio.

open your android studio, sdk manager and install **Android api level 30**

nstall **sdk platform tools** from sdk tools section in sdk manager

install gradle
` npm install -g Gradle`

install cordova by
`npm install cordova@10.0.0  -g`

run this command to see leftover requirements
`cordova requirements`

Other requirements can be found here: https://cordova.apache.org/docs/en/10.x/guide/cli/

Setup ios and android emulators from xcode and android studio.

## configuration
./config.xml file has access control. set it as your restrictions.
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

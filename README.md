# React Native Lab 1

Welcome to this crash course on how to create a mobile app with React Native! Today's lab has three parts.

# Part 1: Set Up
*This heavily adapts content from [Expo Docs](https://docs.expo.io/get-started/installation/) and [React Native Docs](https://reactnative.dev/docs/environment-setup)*.

### 1. ✨ A quick overview 
We'll be using the following tools from Expo to develop apps: 

1. a command line app called Expo CLI to initialize and serve your project
2. VSCode as our text editor 
3. either Expo Go, which allows us to open our projects on the phone, or any web browser to open the project on the web.

We'll be using `yarn` instead of `npm` as our package manager; you can read more about the difference [here](https://www.sitepoint.com/yarn-vs-npm/)! In short, `yarn` is becoming more popular than 

### 2. 👾 In your terminal, type the following:

```
brew install watchman

yarn global add expo-cli
````
* Watchman was developed by Facebook to watch for file changes. It'll help with hot reloading later!
* The second command will download the Expo CLI using yarn. 

### 3. 📲 On your phone, download the Expo Go app:

[🤖 Android Play Store - Android Lollipop (5) and greater.
](https://play.google.com/store/apps/details?id=host.exp.exponent)

[🍎 iOS App Store - iOS 11 and greater.](https://search.itunes.apple.com/WebObjects/MZContentLink.woa/wa/link?path=apps%2fexponent)

### 4. 👾 In your terminal, initialize an Expo project:

```
cd desktop/sea
# or, wherever you want your files to be located!

expo init my-app
```
You might be asked to choose a template. For now, let's go with Managed workflow -> blank. 

<img width="671" alt="image" src="https://user-images.githubusercontent.com/26272095/124736028-7655e480-decb-11eb-8658-600256726c9e.png">

Then, navigate to the project directory and open up the files in VSCode. 

```
cd my-app

code .
```
### 5. 👾 Finally, let's launch the project on both web and mobile. 

Start the development server with the following: 

```
expo start
```

This should open up a web browser!

You should also try scanning the QR code with your Expo app. 

From the Expo Docs: "When you run `expo start`, Expo CLI starts Metro Bundler, which is an HTTP server that compiles the JavaScript code of our app using Babel and serves it to the Expo app. It also pops up Expo Dev Tools, a graphical interface for Expo CLI."

# Part 2: Components


# Part 3: Getting Down to Business with State and Props

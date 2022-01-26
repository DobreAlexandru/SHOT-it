# SHOT-it

SHOT-it is a cloud based image storage app. \
You can preview a live version of this app on [Netlify](https://shotit.netlify.app/).

## Description

This app was created using the React Javascript library.\
Some features I've thought about while building this app were authentication, where I've learned how to use React contexts, for storing the user throughout the whole page.\
Authentication for this app includes functions for logging in, logging out, updating or deleting an account, account validation and storing data.

## Design

Almost all of this app's design has been built using the [Material UI](https://mui.com/) library, where I've learned a lot about its components and responsive design.\
The scroll animations on the home page were created using the [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) library.\
[Framer Motion](https://www.framer.com/motion/) helped polishing up pretty much every hover animation on the page.

## Firebase

To fully implement the app's functionality I've used Google's [Firebase](https://firebase.google.com/):\
-Authentication, for creating and storing users.\
-Firestore, to store information about every single user, such as links to every picture they upload to the platform.\
-Cloud Storage, for keeping the uploaded pictures saved on the cloud for quick access.\

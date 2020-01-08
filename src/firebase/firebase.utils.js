import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAXj-DMXM6mr6_B81VhHL4oLLSQ7IDUilU",
  authDomain: "crwn-clothing-tut.firebaseapp.com",
  databaseURL: "https://crwn-clothing-tut.firebaseio.com",
  projectId: "crwn-clothing-tut",
  storageBucket: "crwn-clothing-tut.appspot.com",
  messagingSenderId: "706936750330",
  appId: "1:706936750330:web:1aec53d21b303a7724c943"
};

//////// User Login ////////
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

/////// Temp code to move data into firestore programmatically to use later (batch)
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

////////
export const auth = firebase.auth();

////////
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

//////// Shop Data ////////
export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((result, item) => {
    result[item.title.toLowerCase()] = item;
    return result;
  }, {});

};

export default firebase;

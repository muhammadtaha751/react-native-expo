// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAH7EhFL3FCKoXyDSrjqk055Z33xtL2rPw",
  authDomain: "signup-daccc.firebaseapp.com",
  projectId: "signup-daccc",
  storageBucket: "signup-daccc.appspot.com",
  messagingSenderId: "911250737262",
  appId: "1:911250737262:web:f603b9a52b048b71623e7f",
  measurementId: "G-DB853J8JVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();


  function create(name,email, password,number) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            try {
                const docRef = await addDoc(collection(db, "users"), {
                    name,
                    email,
                    number
                    
                });

                alert('successfully register')
               
            } catch (e) {
                console.error("Error adding document", e);
                alert(e.message)
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message
            alert(errorMessage)
        });
}

function Login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          alert('successfully login')
        
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert('incorrect email or password')
      });
}

export{
  create,
  Login
}


import React, { useRef, useState } from 'react';
import './App.css';
import Dashboard from './Dashboard.jsx'
import Body from './Body.jsx'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {auth1,firestore1} from './Firebase.js'
const auth = auth1
const firestore = firestore1

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
        {user ? <SignOut /> : <SignIn />}  
        <div className="gallery">
          <Dashboard/>
          <Body signedIn={user} isAdmin={IsAdmin()} adminData={GetAdmin()}/>
        </div>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )
}

function SignOut() {
  return auth.currentUser && (
    <div className="avatar">
      <img className="avatarPic" title="Logout" onClick={() => auth.signOut()} src={auth.currentUser.photoURL}></img>
    </div>
  )
}

function IsAdmin() {
    const adminRecords = GetAdmin()
    return adminRecords ? adminRecords.some((i)=>{return auth.currentUser && i.email === auth.currentUser.email }) : false
}

function GetAdmin() {
    const adminData = firestore.collection('admin');
    const query = adminData.orderBy('email').limit(25);
    const [adminRecords] = useCollectionData(query, { idField: 'id' });
    return adminRecords 
}

function ChatRoom() {
//   const dummy = useRef();
//   const messagesRef = firestore.collection('messages');
//   const query = messagesRef.orderBy('createdAt').limit(25);

//   const [messages] = useCollectionData(query, { idField: 'id' });

//   const [formValue, setFormValue] = useState('');


//   const sendMessage = async (e) => {
//     e.preventDefault();

//     const { uid, photoURL } = auth.currentUser;

//     await messagesRef.add({
//       text: formValue,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL
//     })

//     setFormValue('');
//     dummy.current.scrollIntoView({ behavior: 'smooth' });
//   }

//   return (<>
//     <main>

//       {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

//       <span ref={dummy}></span>

//     </main>

//     <form onSubmit={sendMessage}>

//       <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

//       <button type="submit" disabled={!formValue}>🕊️</button>

//     </form>
//   </>)
}

function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;

//   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

//   return (<>
//     <div className={`message ${messageClass}`}>
//       <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
//       <p>{text}</p>
//     </div>
//   </>)
}

export default App;

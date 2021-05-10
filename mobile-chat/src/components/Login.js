import { auth, firebaseRef } from "../config";

const Login = () => (
    <div className="login">
        <button
            onClick={() => {
                auth.signInWithPopup(new firebaseRef.auth.GoogleAuthProvider());
            }}
        >
            Login with Google
        </button>
    </div>
);

export default Login;

//

import { useState } from "react";
import { db, auth, firebaseRef } from "../config";
import { useCollectionData } from "react-firebase-hooks/firestore"
import MessageCard from './MessageCard'

const ChatRoom = ({ currentRoom }) => {
    const [message, setMessage] = useState("");

    const messagesRef = db.collection("messages");

    const query = messagesRef 
        .where("room", "==", currentRoom)
      //  .orderBy("createdAt")
      //  .limit(20);

    const [messages] = useCollectionData(query, { idField: "id" });


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;
        const createdAt = firebaseRef.firestore.FieldValue.serverTimestamp();
            await messagesRef.add({
                uid,
                photoURL,
                createdAt,
                text: message,
                room: currentRoom,
            });
            setMessage("");
    };
    console.log({ messages })

    return (
        <div className="messages">
            {messages &&
              messages.map((message) => (
                 <MessageCard
                  message={message}
                  key={message.id}
                  handleDelete={handleDelete} 
                />
              ))}
            <form onSubmit={handleSubmit}>
             <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter message"
            />
                <button type="submit" disabled={!message}>Send</button>
            </form>
        </div>
    );
};

export default ChatRoom

//

import React, {useState, useEffect} from 'react'
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";


function CreatePost({isAuth}) {
  const [title,setTitlte] = useState ("");
  const [postText,setpostText] = useState ("");
  const [postDate,setpostDate] = useState ("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
      await addDoc(postsCollectionRef, {
        title,
        postText,
        postDate: {date: new Date().toLocaleString()},
        author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      });
      navigate("/");
    };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);


  return (
     <div className="createPostPage">
       <div className="cpContainer">
         <h1>Create A Post</h1>
         <div className="inputGp">
           <label> Title:</label>
           <input
             placeholder="Title..."
             onChange = {(event) => {
               setTitlte(event.target.value);
             }}
            />
         </div>
         <div className="inputGp">
           <label> Post:</label>
           <textarea
             placeholder="Post..."
             onChange = {(event) => {
               setpostText(event.target.value);
             }}
            />
         </div>
         <div className="inputGp">
           <label> DATE:</label>
           <span className="xyz">
              {`${new Date().toLocaleString()}`}
           </span>
         </div>
         <button onClick= {createPost}>Submit Post </button>
       </div>
     </div>
   );
 }

 export default CreatePost;

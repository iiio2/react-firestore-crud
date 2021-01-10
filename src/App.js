import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom"; 
//import uuid from "uuid/v1"; 
import AddPost from "./components/AddPost";
import Update from "./components/Update";
import { db } from "./firebase/init"; 
import {collectionIdsAndDocs} from "./utilities"; 


function App() {
  //console.log(db); 
  const [posts, setPosts] = useState([]); 

  const getPosts = () => {

    // Normal get method with async await

    // const res = await db.collection('posts').get(); 
    // const posts = res.docs.map(collectionIdsAndDocs); 
    // setPosts(posts); 

    // Real-Time data change (without async await)

    db.collection('posts').orderBy('title','desc').onSnapshot(snapshot=> {
      const posts = snapshot.docs.map(collectionIdsAndDocs);  
      setPosts(posts);  
    })

  }


  useEffect(()=>{
    getPosts(); 
    
  },[]); 


  const handleAdd = async (title,content) => {
    
    const docRef = await db.collection('posts').add({title,content});
    
    const doc = await docRef.get(); 

    const newPost = collectionIdsAndDocs(doc);
    console.log(newPost); 
    
    setPosts([...posts, newPost ]);
  }

  const deletePost = async (id) => {
    setPosts(posts.filter(post=> post.id !== id )); 

    await db.collection('posts').doc(id).delete(); 

}

  if(posts.length === 0) return <p className="lead container">Loading...</p>

  return (
    <div className="container">
        <h3 className="text-center">React & Firestore CRUD</h3>
        <Switch>

        <Route path="/edit/:id" component={Update}  />
          <Route path="/" render={(props)=> <AddPost      posts={posts} 
            deletePost={deletePost} 
            handleAdd={handleAdd} {...props} />  } />
          <Route />
        </Switch>
    </div>
  );
}

export default App;

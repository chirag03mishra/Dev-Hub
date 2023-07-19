import React from 'react'
import { useState, useEffect } from "react"
import { auth } from '../../confiq/firebase';
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from '../../confiq/firebase';
import Display from '../../Components/display/Display';
import Scroller from '../../Components/display/Scroller';



const Home = ({isAuth}) => {

  const usercollection = collection(db, "Blogs");
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const data = await getDocs(usercollection);
      setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    getdata();
  }, )


  const deletePost = async (id) => {
    const postDoc = doc(db, "Blogs", id)
    await deleteDoc(postDoc);
  }

  return (
    <>
    <Display />
    <Scroller />
      {posts.map((post) => {
        return (
          <div>
            {" "}
            <h1>
              Title: {post.title}
              id: {post.id}
              {
                isAuth && post.author.id === auth.currentUser.uid &&
                <button onClick={()=>{deletePost(post.id)}}> &#128465; </button>
              }
            </h1>
            <h2>name: {post.author.name}</h2>
            <img src={post.imgUrl} alt="" />
          </div>
        )
      })}
    </>

  )
}

export default Home

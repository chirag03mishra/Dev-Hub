import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React from "react";
import { auth } from "../../confiq/firebase";
import { useState, useEffect } from "react";
import { storage } from "../../confiq/firebase";
import { db } from "../../confiq/firebase";
import { useNavigate } from "react-router";

const initialState = {
    title: "",
    category: "",
    description: "",
}

const categoryOption = [
    "Fashion",
    "Technology",
    "Food",
    "Politics",
    "Sports",
    "Business"
];

const Create = ({ isAuth }) => {

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [])

    const navigate = useNavigate();

    const [form, setForm] = useState(initialState);
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);
    const { title, category, description } = form;


    useEffect(() => {
        const uploadfile = () => {
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file)
            uploadTask.on("state_changed", (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
                switch (snapshot.state) {
                    case "paused":
                        console.log("upload is paused");
                        break;
                    case "running":
                        console.log("upload is paused");
                        break;
                    default:
                        break;
                }
            }, (error) => {
                console.log(error.message);
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                    setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
                })
            })

        };
        file && uploadfile();
    }, [file])

    const handlechange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const categoryChange = (e) => {
        setForm({ ...form, category: e.target.value });
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        if (category && title && file && description) {
            try {
                await addDoc(collection(db, "Blogs"), {
                    ...form,
                    timestamp: serverTimestamp(),
                    author:{
                        name:auth.currentUser.displayName ,
                        id:auth.currentUser.uid,
                    }
                })
                alert("Blog Added Successfully");
                navigate("/");
            } catch (err) {
                console.log(err.message);
            }
        }
    }

    return (
        <div className="container-fluid">
            <div className="container">
                <div>
                    <div className="text">Create Your Blog</div>
                </div>
                <div>
                    <div>
                        <form action="" onSubmit={handlesubmit}>
                            <input
                                onChange={handlechange}
                                value={title}
                                name="title"
                                type="text"
                                placeholder="Title"
                            />
                            <div><select
                                value={category}
                                onChange={categoryChange}
                            >
                                <option>
                                    Please Select Category
                                </option>
                                {categoryOption.map((option, index) => (
                                    <option value={option || ""} key={index}>
                                        {option}
                                    </option>
                                ))}
                            </select></div>
                            <div>
                                <textarea
                                    name="description"
                                    placeholder="Description"
                                    cols="30"
                                    value={description}
                                    onChange={handlechange}
                                    rows="10"
                                >
                                </textarea>

                                <div>
                                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                                </div>
                            </div>
                            <button type="submit"
                                disabled={progress !== null && progress < 100}
                            > Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create;
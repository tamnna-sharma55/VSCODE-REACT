import React, { useState } from 'react';
import { app } from './Firebase';
import { getFirestore, setDoc, doc, Firestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const db = getFirestore(app);
const storage = getStorage(app);

const Web = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev, [name]: value
        }));
    };

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let imageUrl = "";
            if (image) {
                const imageRef = ref(storage, `images/${Date.now()}-${image.name}`);
                await uploadBytes(imageRef, image);
                imageUrl = await getDownloadURL(imageRef);
            }

            await setDoc(doc(db, "india", "himachal"), {
                name: form.name,
                email: form.email,
                password: form.password,
                imageUrl: imageUrl
            });

            alert("Document and image saved successfully");
        } catch (error) {
            console.error("Error saving document: ", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br/>
                <input name='name' value={form.name} onChange={handleChange} type='text' placeholder='Enter your name' /><br /><br />

                <label>Email</label><br/>
                <input name='email' value={form.email} onChange={handleChange} type='email' placeholder='Enter your email' /><br /><br />

                <label>Password</label><br/>
                <input name='password' value={form.password} onChange={handleChange} type='password' placeholder='Enter your password' /><br /><br />

                <label>Upload Image</label><br/>
                <input type='file' accept='image/*' onChange={handleImageChange} /><br /><br />

                <button type='submit'>Save</button>
            </form>
        </div>
    );
};

export default Firestore;

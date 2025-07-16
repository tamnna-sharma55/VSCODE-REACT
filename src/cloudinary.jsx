import React, { useState } from 'react';
import { app } from './Firebase1';
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore';

const db = getFirestore(app);

const Cloudinary = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!file) {
      alert('Please select a file');
      return;
    }

    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'react1'); // Make sure 'react1' exists in your Cloudinary settings

    try {
      setLoading(true);

      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dmau5kozv/image/upload',
        {
          method: 'POST',
          body: data,
        }
      );

      const result = await res.json();

      if (!result.secure_url) {
        throw new Error('Cloudinary upload failed');
      }

      await addDoc(collection(db, 'food'), {
        url: result.secure_url,
        uploadedAt: serverTimestamp(), // More reliable than new Date()
      });

      alert('Image uploaded and saved to Firestore successfully!');
      setFile(null); // Reset file input
    } catch (err) {
      console.error('Upload error:', err);
      alert('An error occurred during upload.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Cloudinary Image Upload</h1>
      <input type='file' onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload Image'}
      </button>
    </div>
  );
};

export default Cloudinary

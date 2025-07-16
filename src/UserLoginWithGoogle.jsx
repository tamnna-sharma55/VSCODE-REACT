import React from 'react'
import {app} from './Firebase1'
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const UserLoginWithGoogle = () => {
    const handleClick = () => {
        signInWithPopup(auth,googleProvider)
        .then(()=>{
            console.log("user is login via goolge provider")
            alert("user is login via google provider")
        })
        .catch((err)=>{
            console.log("user is not login via google provider",err)
        })
    }


6

return (
    <div>
        <button onClick={handleClick}>signin with google</button>
    </div>
  )
}

export default UserLoginWithGoogle
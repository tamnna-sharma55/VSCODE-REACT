import React, {useState} from 'react'
import {app} from "./Firebase1"
import {getDatabase,ref,onValue,remove} from 'firebase/database'

const db = getDatabase(app)

const Getdata = () => {
    const [data,setData] = useState({})
    console.log(data)

    const handleData = () => {
        const databaseRef = ref(db,"student")
        onValue(databaseRef,(snapshot) => {
            const data = snapshot.val()
            console.log(data)
            if(data){
                setData(data)
            }else{
                setData("")
            }
        })
    }
    const handleDelete = (id)=>{
        const abc =  window.confirm("are you sure data is deleted permanently ")
        if(abc){
        remove(ref(db,`student/${id}`))
        .then(()=>console.log("data is deleted successfully"))
        .catch((err)=>{
            console.log("data is not deleted due to errror",err)

        })
    }
    }
  return (
    <div>
    <button onClick={handleData}>get data</button>
    {Object.keys(data)&& Object.keys(data).length === 0 ? (
        <div>no data found</div>
    ):(<div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(data).map(([key,element])=>(
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{element.name}</td>
                        <td>{element.email}</td>
                        <td>{element.password}</td>
                        <button onClick={()=>handleDelete(key)}>delete</button>
                    </tr>
                )
                )}
            </tbody>
        </table>
    </div>)}
    </div>
  )
}

export default Getdata
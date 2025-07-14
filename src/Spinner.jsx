import React,{useState,useEffect} from 'react'
import BarLoader from "react-spinners/BarLoader"

const Spinner = () => {
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        setInterval(()=>{
            setLoading(false)

        },3000);
    },[])
  return (
    <div>
        {loading ? (
            <BarLoader color="red" loading={loading} size={50}/>
        ):(<h1>data loaded</h1>)}
    </div>
  )
}

export default Spinner
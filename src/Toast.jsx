import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  
  function Toast(){
    const notify = () => toast.success("Wow so easy!",{
        // position:toast.position.left
        autoClose:2000,
        hideProgressBar:true,
        pauseOnHover:true,
        draggable:false

    });

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    )
}

export default Toast 
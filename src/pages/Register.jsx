import React, { useRef } from 'react'
import { RxCross2 } from "react-icons/rx";


const Register = ({onClose}) => {

    const modelRef = useRef();
    const closeModel = (e) => {
        if(modelRef.current === e.target){
            onClose();
        }
    }

    return (
    <div ref={modelRef} onClick={closeModel} className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
<div className='m-5 flex flex-col gap-5 text-white border rounded-xl bg-slate-600 p-6'>
<button onClick={onClose} className='place-self-end'><RxCross2 size={30}/></button> 
<div className=''>
    <form className=''>
        <input
        type='text'
        placeholder='Enter Your ID' required className='w-full   py-3 border border-white rounded-xl bg-slate-600'/>
        <input
        type='text'
        placeholder='Enter Your Name' required className='w-full  py-3 border border-white rounded-xl mt-10 bg-slate-600'/>
        <button className='text-black bg-white py-2 px-10 mt-6 rounded-lg'>Submit</button>
    </form>
    </div>  
 </div>    
    </div>
  )
}

export default Register

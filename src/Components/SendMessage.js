import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import {auth, db} from '../firebase'
const style = {
    form: `h-14 w-full flex text-xl absolute bottom-0`,
    input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button: `w-[20%] bg-green-500`
}
const SendMessage = ({scroll}) => {
 const [input, setInput] = useState('')
 const sendMessage = async (e) => {
     e.preventDefault()
     if (input === ""){
         alert("Please enter a valid message")
         return
     }
        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text : input,
            name : displayName,
            uid,
            timestamp: serverTimestamp()
        })
     
         setInput('')
         scroll.current.scrollIntoView({behavior: 'smooth'})
 }
  return (
      <>
    <form onSubmit={sendMessage} className={style.form}>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Message' className={style.input} />
        <button className={style.button} type='submit'>Send</button>
    </form>
    </>
  )
}

export default SendMessage
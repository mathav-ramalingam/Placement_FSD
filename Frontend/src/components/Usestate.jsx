import React, { useEffect } from 'react'
import { useState } from 'react'

export const Usestate = () => {

    var [text,settext] = useState("Mathav")

    useEffect(() =>{
        console.log(text)
    },[text])

  return (
    <>
    <h1>Use state example </h1>
    <input type="text" value ={text} onChange={(e => {settext(e.target.value)})}  />
    <h2>type Text is  : {text}</h2>
    </>
  )
}




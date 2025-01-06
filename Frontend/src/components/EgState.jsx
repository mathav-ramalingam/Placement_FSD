import React, { useState } from 'react'
import i from '../assets/Image/mk.jpg'
import i2 from '../assets/Image/1.jpg'
import i3 from '../assets/Image/2.jpg'


export const EgState = () => {

  const [first, setchange] = useState(i)
  var arr = [i,i2,i3]
  function change()
  {
    let v = Math.floor(Math.random() * arr.length);
    console.log(Math.random())
    setchange(arr[v])
  }

  return (
    <>
    <div>
        <img src={first}  onClick={change}/>
    </div>
    </>
  )
}

import React, { useMemo, useState } from 'react'


var slowFunction = (number) =>
{
    for(let i=0;i<100000000;i++)
    {

    }
    return number * 2
}




export const UseMemo = () => {


    var [num, setnum] = useState(0);
    var [theme,updatetheme] = useState(true);

    var darklight = 
    {
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
    }


    var doubly = useMemo(() => {
        return slowFunction(num)
},[num])
        

  return (
    <>
    <div>
        <h1>This is useMomo Example</h1>
        <h1>&quot;const variable = useMemo(() =&gt; { statement } ,[])&quot;</h1>
        <input type="number" value={num} onChange={(e) => setnum(e.target.value)} />
        <button onClick={() => { updatetheme(theme = !theme)}} > toggle</button>
        <h2 style={darklight}>{doubly}</h2>
    </div>
    </>
  )
}

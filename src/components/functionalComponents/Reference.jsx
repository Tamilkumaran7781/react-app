import React, { useState,useMemo } from "react";

const Memo = () => {
    const[number,updateNumber]=useState(0);
    const [dark,updateTheme]=useState(false)
    const doubleNumber = useMemo (()=>{
        return doubleNumberSlow(number)
    },[number])
    function doubleNumberSlow(num){
        console.log("Is it calling")
        for(let i=0;i<100000;i++){}
        return num*2;
    }
    const Theme= useMemo(()=>{
        return{
            backgroundColor:dark?"black":"white",
            color:dark?"white":"black"
            }
        },[dark])
       
    return(
        <div>
            <h1>This is a dangerous hook which is called useForm</h1>
            <input type="number" value={number} onChange={(event)=>updateNumber(event.target.value)}/>
            <h2 style={Theme}>The doubled Number {doubleNumber}</h2>
            <button onClick={()=>{updateTheme((prevDark) => !prevDark)}}>Change Theme</button>
        </div>
    )
}
export default Memo;
import { useEffect, useState } from "react"


export default function Mode(){
    const [mode, setMode] = useState("light");

    const theme = () =>{
        // console.log(mode);
        if(mode === 'dark'){
            setMode('light')
            // console.log(document.body.className)
        }else{
            setMode('dark');
            // console.log(document.body.className)
        }  
    }

    useEffect(()=>{
        document.body.className = mode;
    }, [mode])
   
    return (
        <>
            <button onClick={theme}> Mode Change </button>
        </>
    )
}
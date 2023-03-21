import { useState } from "react"

export default function Home(){
    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    
    function funcOne(e){
        console.log(e.target.value);
        setOne(e.target.value);
    }

    function funcTwo(e){
        console.log(e.target.value);
        setTwo(e.target.value);
    }

    return (
        <>
            <h1>Welcome To my Home Page</h1>
            <input type="text" onChange={(e)=>funcOne(e)} value={one}></input>
            <input type="text" onChange={(e)=>funcTwo(e)} value={two} ></input>
            <h1>{one+ " "+two}</h1>
        </>
    )
}
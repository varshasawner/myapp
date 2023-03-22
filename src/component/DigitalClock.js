import { useState } from "react"


export default function DigitalClock(){
    let time = new Date().toLocaleTimeString();

    const [ctime, setCTime] = useState("");
    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCTime(time);
    }

    setInterval(updateTime, 1000)
   
    return (
        <>
            <h1>{ctime}</h1>
            {/* <button onClick={updateTime}>Change</button> */}
        </>
    )
}
import { useState } from "react"

export default function FormValidation(e){
   
    const [name, setName] = useState("");
    const [msg, setMsg] = useState("");
    
    const valid = (e) => {
        e.preventDefault();
        if(name === ""){
            setMsg("Please Enter Name");
        }
    }

    const check = () => {
        setMsg("");
    }
   
    return (
        <>
            <form action="" onSubmit={valid}>
            <input Type="text" value={name} onChange={(e)=>{setName(e.target.value)}} onFocus={check}/>
            <span>{msg}</span>

            <input type="submit" />
            </form>
        </>
    )
}
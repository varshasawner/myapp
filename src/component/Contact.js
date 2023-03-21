import { useState } from "react"

export default function Contact(){
    const [addItem, setAddItem] = useState("");
    const [list, setList] = useState([]);
    const [value, setValue] = useState("");

    const add = () => {
        setList([...list, addItem]);
        // console.log(list);
        setAddItem("");
    }

    const deleteItem = (i) => {
        // alert(i);
        list.splice(i, 1);
        setList([...list]);
        console.log(list.length);
        if(list.length === 0){
            setValue("emplty");
        }else{
            setValue("");
        }
        
    }
    return (
        <>
        <br /><br />
             <input type="text" onChange={(e)=>{setAddItem(e.target.value)}} value={addItem}/>
             <button onClick={add}>Add</button>
             <h1>{ value }</h1>
             {
                list.map((item, i)=>{
                    return (<li key={i}>{item}  <button onClick={()=>deleteItem(i)}>Delete</button> </li>)
                })
             }
        </>
    )
}
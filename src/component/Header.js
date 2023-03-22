

export default function Header(props){

    // console.log(props)
    let greeting = "Welcome priya";
   
    return (
        <>
            <header>
                <h1>{props.siteName }</h1>
                <button onClick={()=>{props.other(greeting)}}>click</button>
                <h2>{props.sakshi}</h2>
            </header>
        </>
    )
}
// import React, { useEffect, useState } from "react";

// export default function About() {
//     const [data, setData] = useState([]);
//     const getData = () => {
//         fetch('https://jsonplaceholder.typicode.com/todos')
//         .then((response) => {
//             return response.json()
//         })
//         .then((response) => {
//             setData(response);
//             console.log(response);
//             console.log(data);
//         })
//     }
//     useEffect(()=>{
//         getData();
//     }, [])

//     return (
//         <>
//           {
//             data.map((item, index)=>{
//                 return (
//                     <li key={ item.title}>{item.title}</li>
//                 )
//             })
//           }
//         </>
//     )
// }

import React, { useEffect, useState } from "react"

const UsingFetch = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setUsers(data)
        console.log(users)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UsingFetch

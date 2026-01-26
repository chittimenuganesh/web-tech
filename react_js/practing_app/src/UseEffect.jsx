import { useEffect, useState } from "react";

function UseEffect() {
    useEffect(()=>{
        console.log('component mounted')
    },[]);
    // ---
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log('count change:',count)
    },[count]);
    // ---
    const [users,setUsers]=useState([]);
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((res)=>res.json())
    //     .then((data)=>setUsers(data));
    // },[]);
    // ---
    useEffect(()=>{
        async function fetchUsers(){
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data);
        }
        fetchUsers();
    },[])

    return (
        <>
            <h1>check console</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <h2>user list</h2>
            {/* {users.map((user)=>(
                <p key={user.id}>name:{user.name}</p>
            ))} */}
        </>
    );
}

export default UseEffect;
// []=empty dependency array = run only once
// [x]=runs evrytime when x changes
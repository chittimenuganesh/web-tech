import {useState} from 'react';

function UseState() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    return ( 
        <>
            <h1>count:{count}</h1>

            <button onClick={()=>setCount(count+1)}>increment</button>
            <button onClick={()=>setCount(count-1)}>decrement</button>

            <input type="text" placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)} />
            <p>hello.,{name}</p>
        </>
     );
}

export default UseState;
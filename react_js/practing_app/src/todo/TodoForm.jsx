import { useState } from "react";

function TodoForm({onAdd}) {
    const[input,setInput]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(input.trim()==='') return;
        onAdd(input);
        setInput('');
    }
    return ( 
        <>
            <form action="submit" onSubmit={handleSubmit}>
                <input 
                 type="text" 
                 value={input}
                 placeholder="add your list"
                 onChange={(e)=>setInput(e.target.value)}
                />
                <button>add</button>
            </form>
        </>
     );
}

export default TodoForm;
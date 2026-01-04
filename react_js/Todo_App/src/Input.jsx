import { useState } from "react";
import './input.css';

function Input({addTask}) { //rx'e prop from app
    const [input,setInput]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(input.trim()==="") return;
        addTask(input); //send data to app
        setInput('');
    }
    return ( 
        <>
            <form onSubmit={handleSubmit} className="block">
                <input 
                    type="text"
                    placeholder="Add Your Task"
                    name="input"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                />
                <button >Add</button>
            </form>
        </>
     );
}

export default Input;
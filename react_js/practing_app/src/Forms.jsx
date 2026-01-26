import { useState } from "react";

function Form() {
    const[form,setForm]=useState(
        {
            username:'',
            password:'',
        }
    );
    const handleChange=(e)=>{
        setForm({
            ...form,//keep existing data
            [e.target.name]:e.target.value,

        });
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(form)
    };
    
  return(
    <>
     <form action="submit" onSubmit={handleSubmit}>
        <input 
            type="text"
            name="username"        
            value={form.username}
            placeholder="username"
            onChange={handleChange}
        />

        <input 
            type="password"
            name="password"       
            value={form.password}
            placeholder="password"
            onChange={handleChange}
        />

        <button type="submit">submit</button>
     </form>
    </>
  );
}

export default Form;
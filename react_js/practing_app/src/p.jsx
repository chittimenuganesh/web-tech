// import { useState } from "react";

// function Todo() {
//     const [list,setList]=useState('');

//     const handleSubmit=(e)=>{
//          e.preventDefault();
//          console.log(list);
//         //clear inputs
//         setList('');
//     };
//     const handleChange=(e)=>{
//         setList(e.target.value);
//     };
//     return ( 
//         <>
//             <form action="submit" onSubmit={handleSubmit}>
//                 <input 
//                  type="text" 
//                  placeholder="todo"
//                  name="todo"
//                  onChange={handleChange}
//                  value={list}
//                 />
//                 <button type="submit">submit</button>
//             </form>
//         </>
//      );
// }

// export default Todo;
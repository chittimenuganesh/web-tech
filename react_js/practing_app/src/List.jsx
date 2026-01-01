function List() {
    const fruits=['apple','mango','orange','banana'];
    const users = [
        {id:1,name:'aadi',role:'frontend'},
        {id:2,name:'ravi',role:'backend'},
        {id:3,name:'sam',role:'student'}
    ]
    return ( 
        <div>
            <h1>Fruits List</h1>
            <ul>
                {fruits.map((fruit,index)=>(
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            {/* --- */}
            <h1>users List</h1>
            {users.map((user)=>(
                <div key={user.id}>name={user.name},role={user.role}</div>
            ))}                                    
        </div>                 
     );                       
}

export default List;




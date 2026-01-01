import useFetch from "./useFetch";

function Data() {
    const {data,loading}=useFetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    if (loading) return <p>loading</p>
    return ( 
        <>
            {data.map(user =>(
             <p key={user.id}>{user.name}</p>
            ))}
        </>
     );
}

export default Data;
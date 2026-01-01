let name='ganesh';
const age=20;

function Component() {
    return ( 
        <>
            <p>component creation, import & export</p>
            <Nested_component/>
            <p>details : name = {name},age={age}</p>
        </>
     );
}

export default Component

const Nested_component=()=>{
    return(
        <>
            <p>nested component</p>
        </>
    );
}
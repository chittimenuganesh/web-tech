function Props(props_value) {
    return ( 
        <>
            <h3>profile</h3>
            <p>name:{props_value.name}</p>
            <p>role:{props_value.role}</p>
            <Card 
                title='web_aplication' 
                description='single page application'
            />
        </>
     );
}

export default Props;

const Card=({title,description})=>{
    return(
        <>
            <p>{title}</p>
            <p>{description}</p>
        </>
    );
}




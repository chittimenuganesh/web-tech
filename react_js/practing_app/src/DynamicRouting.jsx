import { useParams } from "react-router-dom";

function DynamicRouting() {
    const {id} = useParams();
    return <h2>user ID: {id}</h2>
}

export default DynamicRouting;
import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    return (
        <div>
            <h1>OOPS !!!</h1>
            <h2>Something Went wrong</h2>
            <h3>{err.status}: {err.name}</h3>
        </div>
    )
}
export default Error;


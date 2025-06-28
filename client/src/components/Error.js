import { useRouteError } from "react-router-dom";

const Error=() =>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1> Oopss!!!!</h1>
            <h2> Something Went Wrong!! </h2>
            <h3>
                {err.status}:{err.status}
            </h3>
        </div>
    )
}
export default Error;
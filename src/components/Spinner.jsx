import {FaSpinner} from "react-icons/fa"

function Spinner(){
    return(
        <div className="">
            <FaSpinner className="fixed top-1/2 w-16 h-16 animate-spin"/>
        </div>
    );
}

export {Spinner}
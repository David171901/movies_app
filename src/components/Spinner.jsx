import {FaSpinner} from "react-icons/fa"

function Spinner(){
    return(
        <div className="flex justify-center">
            <FaSpinner className="w-16 h-16 animate-spin m-10"/>
        </div>
    );
}

export {Spinner}
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";

function SearchMovie(){

    const query = useQuery();
    const search = query.get("search");

    const [searchText,setSearchText] = useState("")

    const history = useHistory();

    useEffect(() => {
        setSearchText(search || "");
    }, [search]);

    const handleSubmit  = (event) => {
        event.preventDefault();
        history.push("?search=" + searchText);
    };

    return(
        <div>
            <form 
            className="flex items-center" 
            onSubmit={handleSubmit }>   
                <input 
                className="w-64 shadow appearance-none border rounded-l-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" 
                placeholder="Search"
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}/>
                <button type="submit" className="p-2 text-sm font-medium text-white bg-gray-700 rounded-r-lg border border-gray-700 hover:bg-gray-800 ">
                    <FaSearch 
                    size={20}/>
                </button>
            </form>
        </div>
    );
}

export {SearchMovie}
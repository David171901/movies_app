import { useQuery } from "../hooks/useQuery";
import {SearchMovie} from "../components/SearchMovie";
import {MovieSection} from "../components/MovieSection";

function LandingPage(props){
    const query = useQuery();
    const search = query.get("search");  
    
    return(
        <div className="flex flex-col justify-center items-center">
            <SearchMovie />
            <MovieSection key={search}/>
        </div>
    );
}

export {LandingPage}
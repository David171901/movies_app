import { useEffect } from 'react';
import { useQuery } from "../hooks/useQuery";
import {get} from '../utils/httpClient.js'
import {MovieCard} from "./MovieCard";
import { useState } from 'react';
import { Spinner } from './Spinner.jsx';

function MovieSection(props){
    const [isLoading,setIsLoading] = useState(true)
    const [movies,setMovies] = useState([])

    const query = useQuery();
    const search = query.get("search");  

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search
        ? "/search/movie?query=" + search
        : "/discover/movie";
        get(searchUrl).then((data) => {
        setMovies(data.results);
        setIsLoading(false);
        });
    }, [search]);
    
    if(isLoading){
        return <Spinner></Spinner>
    }

    return(
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 space-y-10 md:space-y-0  space-x-0 md:space-x-10'>
            {
                movies.map((el)=>{
                return <MovieCard key={el.id} movie={el}></MovieCard>
                })
            }
        </ul>
    );
}

export  {MovieSection}